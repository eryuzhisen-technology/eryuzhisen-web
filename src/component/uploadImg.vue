<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-upload;

.@{module} {
    width: 0;
    height: 0;
    opacity: 0;
}
</style>

<!-- html代码 -->
<template>
    <div :id="container" class="c-upload"></div>
</template>

<script>
export default {
    name: 'uploadImg',
    data () {
    	return {
    		accessid: '',
            host: '',
            policyBase64: '',
            signature: '',
            key: '',
            expire: 0,
            uploadfilename: {}
    	}
    },
    props: ['type', 'select', 'container'],
    methods: {
        getParam (cb){
            this.$store.dispatch('common_getPolicyAndAccess', {
                type: this.type || 1
            }).then( (res) => {
                //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
                this.host = res.host;
                this.policyBase64 = res.policy;
                this.accessid = res.accessid;
                this.signature = res.signature;
                this.expire = parseInt(res.expire);
                this.key = res.dir;

                cb && cb();
                this.$store.dispatch('bubble_success', res);
            }).catch( (err) => {
                this.$store.dispatch('bubble_fail', err);
            })
        },
        random_string (len){
        　　var len = len || 32;
        　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
        　　var maxPos = chars.length;
        　　var pwd = '';
        　　for (var i = 0; i < len; i++) {
            　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
        upload (file){
            var imgURL;
            try {  
                //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径  
                try {  
                    imgURL =  file.getAsDataURL();  
                } catch(e) {  
                    imgURL = window.URL.createObjectURL(file);  
                }
            } catch(e) {  
                var reader = new FileReader();  
                reader.onload = function (e) {  
                    imgURL = e.target.result;  
                };  
                reader.readAsDataURL(file);  
            }
            return imgURL;
        },
        send_request (filename){
            // 开始传输图片
            var pos = filename.lastIndexOf('.')
            var suffix = filename.substring(pos);
            var uploadfilename = this.key + this.random_string(10) + suffix;
            this.uploadfilename[filename] = {
                src: this.host + '/' + uploadfilename,
                load: 0,
                name: this.random_string(10) + suffix
            };

            this.uploader.setOption({
                'url': this.host,
                'multipart_params': {
                    'key' : uploadfilename,
                    'policy': this.policyBase64,
                    'OSSAccessKeyId': this.accessid, 
                    'signature': this.signature,
                    'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
                }
            });
            this.uploader.start();
        }
    },
    mounted (){
        var that = this;
        this.getParam();
        this.uploader = new this.$plupload.Uploader({
            runtimes: 'html5, flash, silverlight, html4',
            browse_button: this.select, 
            container: document.getElementById(this.container),
            flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
            silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
            url: 'https://oss.aliyuncs.com',
            filters: {
                mime_types: [ //只允许上传图片和zip,rar文件
                    { 
                        title: "Image files", 
                        extensions: "jpg,png,jpeg" 
                    }, 
                ],
                max_file_size: '10mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },
            init: {
                // 初始化完毕
                PostInit: function() {
                    // todo
                },
                // 添加图片成功
                FilesAdded: (up, files) => {
                    var now = Date.parse(new Date()) / 1000; 
                    if (this.expire < now + 3) {
                        this.getParam( res => {
                            this.uploader.start();
                        })
                    } else {
                        this.uploader.start();
                    }
                },
                // 上传前
                BeforeUpload: function(up, file) {
                    that.send_request(file.name);
                },
                // 上传过程中
                UploadProgress: function(up, file) {
                    // todo
                },
                // 上传成功
                FileUploaded: (up, file, info) => {
                    var fileUrl = this.uploadfilename[file.name].src;
                    var name = this.uploadfilename[file.name].name;
                    this.uploadfilename[file.name].load = 1;
                    this.$emit('uploadImg_uploaded', fileUrl, name);
                },
                // 上传失败
                Error: (up, err) => {
                    if (err.code == -602) {
                        var fileUrl = this.uploadfilename[err.file.name].src;
                        var name = this.uploadfilename[err.file.name].name;
                        this.$emit('uploadImg_uploaded', fileUrl, name);
                    } else {
                        this.$emit('uploadImg_error', err);    
                    }
                }
            }
        });
        this.uploader.init();
    }
}
</script>

