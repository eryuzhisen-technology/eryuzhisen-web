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
import plupload from '../lib/upload/plupload.dev'
import {getCatalogList, getPolicyAndAccess} from '../server/getDataCommon'
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
            uploadfilename: '',
            now: Date.parse(new Date()) / 1000,
            timestamp: Date.parse(new Date()) / 1000,
    	}
    },
    props: ['type', 'select', 'container'],
    methods: {
        send_request (filename){
            getPolicyAndAccess({
                type: this.type || 1
            }).then( (res) => {
                //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
                this.now = this.timestamp = Date.parse(new Date()) / 1000; 
                if (this.expire < this.now + 3) {
                    this.host = res.host;
                    this.policyBase64 = res.policy;
                    this.accessid = res.accessid;
                    this.signature = res.signature;
                    this.expire = parseInt(res.expire);
                    this.key = res.dir;
                }

                // 开始传输图片
                var pos = filename.lastIndexOf('.')
                var suffix = filename.substring(pos);
                this.uploadfilename = this.key + this.random_string(10) + suffix;
                this.uploader.setOption({
                    'url': this.host,
                    'multipart_params': {
                        'key' : this.uploadfilename,
                        'policy': this.policyBase64,
                        'OSSAccessKeyId': this.accessid, 
                        'signature': this.signature,
                        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
                    }
                });
                this.uploader.start();
            }).catch( (res) => {
                this.$store.dispatch('bubble_showBubble', {
                    show: true,
                    type: 'top',
                    top: {
                        status: 'z-warn',
                        msg: res.msg
                    }
                })
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
            this.$emit('uploadImg_addFile', imgURL);
        }
    },
    mounted (){
        this.uploader = new plupload.Uploader({
            runtimes : 'html5, flash, silverlight, html4',
            browse_button : this.select, 
            container: document.getElementById(this.container),
            flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
            silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
            url : 'http://oss.aliyuncs.com',
            filters: {
                mime_types : [ //只允许上传图片和zip,rar文件
                    { 
                        title: "Image files", 
                        extensions: "jpg,gif,png,bmp" 
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
                    var file = files[0].getSource().getSource();
                    this.upload(file);
                    this.send_request(files[0].name);
                },
                // 上传前
                BeforeUpload: function(up, file) {
                    // todo
                },
                // 上传过程中
                UploadProgress: function(up, file) {
                    // todo
                },
                // 上传成功
                FileUploaded: (up, file, info) => {
                    var fileUrl = this.host + '/' + this.uploadfilename;
                    this.$emit('uploadImg_uploaded', fileUrl);
                },
                // 上传失败
                Error: (up, err) => {
                    this.$emit('uploadImg_error', err);
                }
            }
        });
        this.uploader.init();
    }
}
</script>

