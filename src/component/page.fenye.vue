<!-- style样式代码 -->
<style lang="less">
@import (reference) '../common/css/common';
@module: c-page-fenye;

.@{module} {
    user-select: none;
    width: 100%;
    height: 30px;
    overflow: hidden;
    .default_center;
    & .item {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        vertical-align: middle;
        .default_border-r-4;
        .default_disline;
        .default_backgroud_2;
        .default_font_size_2;
        .default_color_2;
        .default_pointer;
        .default_center;
        &.z-on {
            .default_backgroud_6;
            .default_color_1;
        }
        &:hover {
            .default_color_1;   
        }
        &.z-prev {
            .skin_icon_prev;
            &:hover {
                .skin_icon_prev_on;
            }
        }
        &.z-next {
            .skin_icon_next;
            &:hover {
                .skin_icon_next_on;
            }
        }
    }
    & .text {
        margin-left: 10px;
        vertical-align: middle;
        .default_font_size_2;
        .default_color_2;
        & span{
            margin-left: 5px;
            .default_color_7;
        }
        display: none;
    }
    & .input {
        width: 60px;
        height: 40px;
        margin: 0 10px;
        vertical-align: middle;
        display: none;
        .default_backgroud_2;
        & input {
            .default_center;
        }
    }
    & .btn {
        vertical-align: middle;
        display: none;
    }
    &.z-small {
        text-align: left;
        .default_color_2;
        & .item {
            .default_border-r-50;
            .default_backgroud_n;
            &:hover {
                .default_backgroud_4;
                .default_color_1;   
            }
            &.z-on {
                .default_backgroud_000;
                .default_color_2;
            }
            &.z-prev {
                .skin_icon_prev;
            }
            &.z-next {
                .skin_icon_next;
            }
        }
    }
    &.z-width {
        text-align: left;
        .default_color_2;
        & .text,
        & .input,
        & .btn {
            .default_disline;
        }
    }
}
</style>

<script>
export default {
    props: ['count', 'length', 'index', 'ext'],
    computed: {
        pages () {
            return Math.ceil(this.count/this.length);
        }
    },
    methods: {
        pageSwitch (e){
            var node = e.target;
            var index = node.dataset['index'];
            var dist;
            if (index == 'prev') {
                dist = this.index - 1;
            } else if (index == 'next') {
                dist = this.index + 1;
            } else {
                dist = parseInt(index);
            }
            this.$emit('page_switch', dist, this.ext);
        }
    },
    render (h) {
        var that = this;
        var index = this.index;
        var pages = this.pages;
        var _arr = [];
        var isloadmore = false;
        var left = 0;
        var right = 0;
        for (var i = 0; i < pages; i++) {
            _arr[i] = i;
        }
        if (pages == 0) {
            return '';
        }
        if (index == 1 || index == pages) {
            isloadmore = true;
        }
        if (index - 1 < 3) {
            right = isloadmore ? 5 - index : 4 - index;
        }
        if (pages - index < 3) {
            left = isloadmore ? 4 - (pages - index) : 3 - (pages - index);
        }
        return (
            <div class="c-page-fenye">
            {
                index != 1 ? <div class="item z-prev" data-index="prev" onClick={that.pageSwitch}></div> : ''
            }
            {
                _arr.map(function(item, i){
                    var _index = i + 1;
                    
                    // 左边保留3个
                    if (_index + 3 + left < index) {
                        return '';
                    }

                    // 右边保留3个
                    if (index + 3 + right < _index) {
                        return '';
                    }
                    isloadmore--;
                    return (
                        <div class={"item " + (_index == index ? 'z-on' : '')} data-index={_index} onClick={that.pageSwitch}>{_index}</div>
                    )
                })
            }
            {
                index != pages ? <div class="item z-next" data-index="next" onClick={that.pageSwitch}></div> : ''
            }
                <div class="text">共页<span>{pages}</span>，跳转</div>
                <div class="input cpm_form_input"><input type="text"/></div> 
                <div class="btn cpm_button_default">GO</div> 
            </div>
        )
    }
}
</script>

