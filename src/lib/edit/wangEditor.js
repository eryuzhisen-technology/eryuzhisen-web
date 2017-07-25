(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? 
        module.exports = factory() :
        typeof define === 'function' && define.amd ? 
            define(factory) :
            (global.wangEditor = factory());
}(this, (function() {
    'use strict';
    /*
        poly-fill
    */
    var polyfill = function() {

        // Object.assign
        if (typeof Object.assign != 'function') {
            Object.assign = function(target, varArgs) {
                // .length of function is 2
                if (target == null) {
                    // TypeError if undefined or null
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource != null) {
                        // Skip over if undefined or null
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            };
        }

        // IE 中兼容 Element.prototype.matches
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
        }
    };

    /*
        工具
    */
    // 和 UA 相关的属性
    var UA = {
        _ua: navigator.userAgent,

        // 是否 webkit
        isWebkit: function isWebkit() {
            var reg = /webkit/i;
            return reg.test(this._ua);
        },

        // 是否 IE
        isIE: function isIE() {
            return 'ActiveXObject' in window;
        }
    };
    // 遍历对象
    function objForEach(obj, fn) {
        var key = void 0,
            result = void 0;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                result = fn.call(obj, key, obj[key]);
                if (result === false) {
                    break;
                }
            }
        }
    }
    // 遍历类数组
    function arrForEach(fakeArr, fn) {
        var i = void 0,
            item = void 0,
            result = void 0;
        var length = fakeArr.length || 0;
        for (i = 0; i < length; i++) {
            item = fakeArr[i];
            result = fn.call(fakeArr, item, i);
            if (result === false) {
                break;
            }
        }
    }
    // 获取随机数
    function getRandom(prefix) {

        return prefix + Math.random().toString().slice(2);
    }
    // 替换 html 特殊字符
    function replaceHtmlSymbol(html) {
        if (html == null) {
            return '';
        }
        return html.replace(/</gm, '&lt;').replace(/>/gm, '&gt;').replace(/"/gm, '&quot;');
    }

    /*
        DOM 操作 API
    */
    // 根据 html 代码片段创建 dom 对象
    function createElemByHTML(html) {
        var div = void 0;
        div = document.createElement('div');
        div.innerHTML = html;
        return div.children;
    }
    // 是否是 DOM List
    function isDOMList(selector) {
        if (!selector) {
            return false;
        }
        if (selector instanceof HTMLCollection || selector instanceof NodeList) {
            return true;
        }
        return false;
    }
    // 封装 document.querySelectorAll
    function querySelectorAll(selector) {
        var result = document.querySelectorAll(selector);
        if (isDOMList(result)) {
            return result;
        } else {
            return [result];
        }
    }
    // new 一个对象
    function $(selector) {
        return new DomElement(selector);
    }
    // 创建构造函数
    function DomElement(selector) {
        if (!selector) {
            return;
        }

        // selector 本来就是 DomElement 对象，直接返回
        if (selector instanceof DomElement) {
            return selector;
        }

        this.selector = selector;

        // 根据 selector 得出的结果（如 DOM，DOM List）
        var selectorResult = [];
        if (selector.nodeType === 1) {
            // 单个 DOM 节点
            selectorResult = [selector];
        } else if (isDOMList(selector)) {
            // DOM List
            selectorResult = selector;
        } else if (typeof selector === 'string') {
            // 字符串
            selector = selector.replace('/\n/mg', '').trim();
            if (selector.indexOf('<') === 0) {
                // 如 <div>
                selectorResult = createElemByHTML(selector);
            } else {
                // 如 #id .class
                selectorResult = querySelectorAll(selector);
            }
        }

        var length = selectorResult.length;
        if (!length) {
            // 空数组
            return this;
        }

        // 加入 DOM 节点
        var i = void 0;
        for (i = 0; i < length; i++) {
            this[i] = selectorResult[i];
        }
        this.length = length;
    }
    // 修改原型
    DomElement.prototype = {
        constructor: DomElement,

        // 类数组，forEach
        forEach: function forEach(fn) {
            var i = void 0;
            for (i = 0; i < this.length; i++) {
                var elem = this[i];
                var result = fn.call(elem, elem, i);
                if (result === false) {
                    break;
                }
            }
            return this;
        },

        // 获取第几个元素
        get: function get(index) {
            var length = this.length;
            if (index >= length) {
                index = index % length;
            }
            return $(this[index]);
        },

        // 第一个
        first: function first() {
            return this.get(0);
        },

        // 最后一个
        last: function last() {
            var length = this.length;
            return this.get(length - 1);
        },

        // 绑定事件
        on: function on(type, selector, fn) {
            // selector 不为空，证明绑定事件要加代理
            if (!fn) {
                fn = selector;
                selector = null;
            }

            // type 是否有多个
            var types = [];
            types = type.split(/\s+/);

            return this.forEach(function(elem) {
                types.forEach(function(type) {
                    if (!type) {
                        return;
                    }

                    if (!selector) {
                        // 无代理
                        elem.addEventListener(type, fn, false);
                        return;
                    }

                    // 有代理
                    elem.addEventListener(type, function(e) {
                        var target = e.target;
                        if (target.matches(selector)) {
                            fn.call(target, e);
                        }
                    }, false);
                });
            });
        },

        // 取消事件绑定
        off: function off(type, fn) {
            return this.forEach(function(elem) {
                elem.removeEventListener(type, fn, false);
            });
        },

        // 获取/设置 属性
        attr: function attr(key, val) {
            if (val == null) {
                // 获取值
                return this[0].getAttribute(key);
            } else {
                // 设置值
                return this.forEach(function(elem) {
                    elem.setAttribute(key, val);
                });
            }
        },

        // 添加 class
        addClass: function addClass(className) {
            if (!className) {
                return this;
            }
            return this.forEach(function(elem) {
                var arr = void 0;
                if (elem.className) {
                    // 解析当前 className 转换为数组
                    arr = elem.className.split(/\s/);
                    arr = arr.filter(function(item) {
                        return !!item.trim();
                    });
                    // 添加 class
                    if (arr.indexOf(className) < 0) {
                        arr.push(className);
                    }
                    // 修改 elem.class
                    elem.className = arr.join(' ');
                } else {
                    elem.className = className;
                }
            });
        },

        // 删除 class
        removeClass: function removeClass(className) {
            if (!className) {
                return this;
            }
            return this.forEach(function(elem) {
                var arr = void 0;
                if (elem.className) {
                    // 解析当前 className 转换为数组
                    arr = elem.className.split(/\s/);
                    arr = arr.filter(function(item) {
                        item = item.trim();
                        // 删除 class
                        if (!item || item === className) {
                            return false;
                        }
                        return true;
                    });
                    // 修改 elem.class
                    elem.className = arr.join(' ');
                }
            });
        },

        // 修改 css
        css: function css(key, val) {
            var currentStyle = key + ':' + val + ';';
            return this.forEach(function(elem) {
                var style = (elem.getAttribute('style') || '').trim();
                var styleArr = void 0,
                    resultArr = [];
                if (style) {
                    // 将 style 按照 ; 拆分为数组
                    styleArr = style.split(';');
                    styleArr.forEach(function(item) {
                        // 对每项样式，按照 : 拆分为 key 和 value
                        var arr = item.split(':').map(function(i) {
                            return i.trim();
                        });
                        if (arr.length === 2) {
                            resultArr.push(arr[0] + ':' + arr[1]);
                        }
                    });
                    // 替换或者新增
                    resultArr = resultArr.map(function(item) {
                        if (item.indexOf(key) === 0) {
                            return currentStyle;
                        } else {
                            return item;
                        }
                    });
                    if (resultArr.indexOf(currentStyle) < 0) {
                        resultArr.push(currentStyle);
                    }
                    // 结果
                    elem.setAttribute('style', resultArr.join('; '));
                } else {
                    // style 无值
                    elem.setAttribute('style', currentStyle);
                }
            });
        },

        // 显示
        show: function show() {
            return this.css('display', 'block');
        },

        // 隐藏
        hide: function hide() {
            return this.css('display', 'none');
        },

        // 获取子节点
        children: function children() {
            var elem = this[0];
            if (!elem) {
                return null;
            }

            return $(elem.children);
        },

        // 增加子节点
        append: function append($children) {
            return this.forEach(function(elem) {
                $children.forEach(function(child) {
                    elem.appendChild(child);
                });
            });
        },

        // 移除当前节点
        remove: function remove() {
            return this.forEach(function(elem) {
                if (elem.remove) {
                    elem.remove();
                } else {
                    var parent = elem.parentElement;
                    parent && parent.removeChild(elem);
                }
            });
        },

        // 是否包含某个子节点
        isContain: function isContain($child) {
            var elem = this[0];
            var child = $child[0];
            return elem.contains(child);
        },

        // 尺寸数据
        getSizeData: function getSizeData() {
            var elem = this[0];
            return elem.getBoundingClientRect(); // 可得到 bottom height left right top width 的数据
        },

        // 封装 nodeName
        getNodeName: function getNodeName() {
            var elem = this[0];
            return elem.nodeName;
        },

        // 从当前元素查找
        find: function find(selector) {
            var elem = this[0];
            return $(elem.querySelectorAll(selector));
        },

        // 获取当前元素的 text
        text: function text(val) {
            if (!val) {
                // 获取 text
                var elem = this[0];
                return elem.innerHTML.replace(/<.*?>/g, function() {
                    return '';
                });
            } else {
                // 设置 text
                return this.forEach(function(elem) {
                    elem.innerHTML = val;
                });
            }
        },

        // 获取 html
        html: function html(value) {
            var elem = this[0];
            if (value == null) {
                return elem.innerHTML;
            } else {
                elem.innerHTML = value;
                return this;
            }
        },

        // 获取 value
        val: function val() {
            var elem = this[0];
            return elem.value.trim();
        },

        // focus
        focus: function focus() {
            return this.forEach(function(elem) {
                elem.focus();
            });
        },

        // parent
        parent: function parent() {
            var elem = this[0];
            return $(elem.parentElement);
        },

        // parentUntil 找到符合 selector 的父节点
        parentUntil: function parentUntil(selector, _currentElem) {
            var results = document.querySelectorAll(selector);
            var length = results.length;
            if (!length) {
                // 传入的 selector 无效
                return null;
            }

            var elem = _currentElem || this[0];
            if (elem.nodeName === 'BODY') {
                return null;
            }

            var parent = elem.parentElement;
            var i = void 0;
            for (i = 0; i < length; i++) {
                if (parent === results[i]) {
                    // 找到，并返回
                    return $(parent);
                }
            }

            // 继续查找
            return this.parentUntil(selector, parent);
        },

        // 判断两个 elem 是否相等
        equal: function equal($elem) {
            if ($elem.nodeType === 1) {
                return this[0] === $elem;
            } else {
                return this[0] === $elem[0];
            }
        },

        // 将该元素插入到某个元素前面
        insertBefore: function insertBefore(selector) {
            var $referenceNode = $(selector);
            var referenceNode = $referenceNode[0];
            if (!referenceNode) {
                return this;
            }
            return this.forEach(function(elem) {
                var parent = referenceNode.parentNode;
                parent.insertBefore(elem, referenceNode);
            });
        },

        // 将该元素插入到某个元素后面
        insertAfter: function insertAfter(selector) {
            var $referenceNode = $(selector);
            var referenceNode = $referenceNode[0];
            if (!referenceNode) {
                return this;
            }
            return this.forEach(function(elem) {
                var parent = referenceNode.parentNode;
                if (parent.lastChild === referenceNode) {
                    // 最后一个元素
                    parent.appendChild(elem);
                } else {
                    // 不是最后一个元素
                    parent.insertBefore(elem, referenceNode.nextSibling);
                }
            });
        }
    };  

    /*
        配置信息
    */
    var config = {
        // 默认菜单配置
        menus: [],

        // 提示语言包
        lang: {
            bold: '粗体',
            italic: '斜体',
            indent: '缩进',
            justifyCenter: '居中',
            strikeThrough: '删除线',
            image: '图片'
        },

        // 编辑区域的 z-index
        zIndex: 10000,

        // 是否开启 debug 模式（debug 模式下错误会 throw error 形式抛出）
        debug: false,

        // onchange 事件
        // onchange: function (html) {
        //     // html 即变化之后的内容
        //     console.log(html)
        // },

        // 是否显示添加网络图片的 tab
        showLinkImg: true,

        // 默认上传图片 max size: 5M
        uploadImgMaxSize: 5 * 1024 * 1024,

        // 配置一次最多上传几个图片
        // uploadImgMaxLength: 5,

        // 上传图片，是否显示 base64 格式
        uploadImgShowBase64: false,

        // 上传图片，server 地址（如果有值，则 base64 格式的配置则失效）
        // uploadImgServer: '/upload',

        // 自定义配置 filename
        uploadFileName: '',

        // 上传图片的自定义参数
        uploadImgParams: {
            token: 'abcdef12345'
        },

        // 上传图片的自定义header
        uploadImgHeaders: {
            // 'Accept': 'text/x-json'
        },

        // 配置 XHR withCredentials
        withCredentials: false,

        // 自定义上传图片超时时间 ms
        uploadImgTimeout: 5000,

        // 上传图片 hook 
        uploadImgHooks: {
            // customInsert: function (insertLinkImg, result, editor) {
            //     console.log('customInsert')
            //     // 图片上传并返回结果，自定义插入图片的事件，而不是编辑器自动插入图片
            //     const data = result.data1 || []
            //     data.forEach(link => {
            //         insertLinkImg(link)
            //     })
            // },
            before: function before(xhr, editor, files) {
                // 图片上传之前触发
            },
            success: function success(xhr, editor, result) {
                // 图片上传并返回结果，图片插入成功之后触发
            },
            fail: function fail(xhr, editor, result) {
                // 图片上传并返回结果，但图片插入错误时触发
            },
            error: function error(xhr, editor) {
                // 图片上传出错时触发
            },
            timeout: function timeout(xhr, editor) {
                // 图片上传超时时触发
            }
        }
    };

        /*
        所有菜单的汇总
    */
    // 存储菜单的构造函数
    var MenuConstructors = {};
    MenuConstructors.bold = Bold || null;
    MenuConstructors.italic = Italic || null;
    MenuConstructors.strikeThrough = StrikeThrough || null;
    MenuConstructors.justifyCenter = JustifyCenter || null;
    MenuConstructors.indent = Indent || null;
    MenuConstructors.image = Image || null;

    /*
        菜单集合
    */
    // 构造函数
    function Menus(editor) {
        this.editor = editor;
        this.menus = {};
    }
    // 修改原型
    Menus.prototype = {
        constructor: Menus,

        // 初始化菜单
        init: function init() {
            var _this = this;

            var editor = this.editor;
            var config = editor.config || {};
            var configMenus = config.menus || []; // 获取配置中的菜单

            // 根据配置信息，创建菜单
            configMenus.forEach(function(menuKey) {
                var MenuConstructor = MenuConstructors[menuKey];
                if (MenuConstructor && typeof MenuConstructor === 'function') {
                    // 创建单个菜单
                    _this.menus[menuKey] = new MenuConstructor(editor);
                }
            });

            // 添加到菜单栏
            this._addToToolbar();

            // 绑定事件
            this._bindEvent();
        },

        // 添加到菜单栏
        _addToToolbar: function _addToToolbar() {
            var editor = this.editor;
            var $toolbarElem = editor.$toolbarElem;
            var menus = this.menus;
            var config = editor.config;
            // config.zIndex 是配置的编辑区域的 z-index，菜单的 z-index 得在其基础上 +1
            var zIndex = config.zIndex + 1;
            objForEach(menus, function(key, menu) {
                var $elem = menu.$elem;
                if ($elem) {
                    // 设置 z-index
                    $elem.css('z-index', zIndex);
                    $elem.append($('<div class="menu-tip"><i class="tip-triangle"></i>'+ menu.title +'</div>'));
                    $toolbarElem.append($elem);
                }
            });
        },

        // 绑定菜单 click mouseenter 事件
        _bindEvent: function _bindEvent() {
            var menus = this.menus;
            var editor = this.editor;
            objForEach(menus, function(key, menu) {
                var type = menu.type;
                if (!type) {
                    return;
                }
                var $elem = menu.$elem;
                var droplist = menu.droplist;
                var panel = menu.panel;

                // 点击类型，例如 bold
                if (type === 'click' && menu.onClick) {
                    $elem.on('click', function(e) {
                        if (editor.selection.getRange() == null) {
                            return;
                        }
                        menu.onClick(e);
                    });
                }

                // 下拉框，例如 head
                if (type === 'droplist' && droplist) {
                    $elem.on('mouseenter', function(e) {
                        if (editor.selection.getRange() == null) {
                            return;
                        }
                        // 显示
                        droplist.showTimeoutId = setTimeout(function() {
                            droplist.show();
                        }, 200);
                    }).on('mouseleave', function(e) {
                        // 隐藏
                        droplist.hideTimeoutId = setTimeout(function() {
                            droplist.hide();
                        }, 0);
                    });
                }

                // 弹框类型，例如 link
                if (type === 'panel' && menu.onClick) {
                    $elem.on('click', function(e) {
                        e.stopPropagation();
                        if (editor.selection.getRange() == null) {
                            return;
                        }
                        // 在自定义事件中显示 panel
                        menu.onClick(e);
                    });
                }
            });
        },

        // 尝试修改菜单状态
        changeActive: function changeActive() {
            var menus = this.menus;
            objForEach(menus, function(key, menu) {
                if (menu.tryChangeActive) {
                    menu.tryChangeActive();
                }
            });
        },

        activeClick: function activeClick(){
            var menus = this.menus;
            objForEach(menus, function(key, menu) {
                if (menu.activeClick) {
                    menu.activeClick();
                }
            });
        }
    };

    /*
        bold-menu
    */
    // 构造函数
    function Bold(editor) {
        this.editor = editor;
        this.$elem = $('<div class="w-e-menu w-e-menu-bold"><i class="w-e-icon-bold"><i/></div>');
        this.type = 'click';
        this.title = config.lang['bold'];

        // 当前是否 active 状态
        this._active = false;
    }
    // 原型
    Bold.prototype = {
        constructor: Bold,

        // 点击事件
        onClick: function onClick(e) {
            // 点击菜单将触发这里

            var editor = this.editor;
            var $elem = this.$elem;
            var isSeleEmpty = editor.selection.isSelectionEmpty();

            /*if (isSeleEmpty) {
                // 选区是空的，插入并选中一个“空白”
                editor.selection.createEmptyRange();
            }

            // 执行 bold 命令
            editor.cmd.do('bold'); 

            if (isSeleEmpty) {
                // 需要将选取折叠起来
                editor.selection.collapseRange();
                editor.selection.restoreSelection();
            }*/
            if (isSeleEmpty) {
                if (this._active) {
                    this._active = false;
                    $elem.removeClass('w-e-active');
                } else {
                    this._active = true;
                    $elem.addClass('w-e-active');
                }
                editor.selection.restoreSelection();
            } else {
                // 执行 bold 命令
                editor.cmd.do('bold'); 
            }
        },

        activeClick: function activeClick(){
            var editor = this.editor;
            if (!this._active && editor.selection.getSelectionStartElem()[0].nodeName.toLocaleLowerCase() !== 'b') {
                return false;
            }
            if (this._active && editor.selection.getSelectionStartElem()[0].nodeName.toLocaleLowerCase() === 'b') {
                return false;
            }

            // 修改 offset 位置
            var range = editor.selection.getRange();
                range.setStart(range.endContainer, range.startOffset - 1);
            editor.selection.saveRange(range);

            // 执行 bold 命令
            editor.cmd.do('bold');

            // 需要将选取折叠起来
            editor.selection.collapseRange();
            editor.selection.restoreSelection();
        },

        // 试图改变 active 状态
        tryChangeActive: function tryChangeActive(e) {
            var editor = this.editor;
            var $elem = this.$elem;

            if (editor.cmd.queryCommandState('bold')) {
                this._active = true;
                $elem.addClass('w-e-active');
            } else {
                this._active = false;
                $elem.removeClass('w-e-active');
            }
        }
    };    

    /*
        italic-menu
    */
    // 构造函数
    function Italic(editor) {
        this.editor = editor;
        this.$elem = $('<div class="w-e-menu w-e-menu-italic"><i class="w-e-icon-italic"><i/></div>');
        this.type = 'click';
        this.title = config.lang['italic'];

        // 当前是否 active 状态
        this._active = false;
    }
    // 原型
    Italic.prototype = {
        constructor: Italic,

        // 点击事件
        onClick: function onClick(e) {
            // 点击菜单将触发这里

            var editor = this.editor;
            var $elem = this.$elem;
            var isSeleEmpty = editor.selection.isSelectionEmpty();

            /*if (isSeleEmpty) {
                // 选区是空的，插入并选中一个“空白”
                editor.selection.createEmptyRange();
            }

            // 执行 italic 命令
            editor.cmd.do('italic');

            if (isSeleEmpty) {
                // 需要将选取折叠起来
                editor.selection.collapseRange();
                editor.selection.restoreSelection();
            }*/
            if (isSeleEmpty) {
                if (this._active) {
                    this._active = false;
                    $elem.removeClass('w-e-active');
                } else {
                    this._active = true;
                    $elem.addClass('w-e-active');
                }
                editor.selection.restoreSelection();
            } else {
                // 执行 bold 命令
                editor.cmd.do('italic'); 
            }
        },

        activeClick: function activeClick(){
            var editor = this.editor;
            if (!this._active && editor.selection.getSelectionStartElem()[0].nodeName.toLocaleLowerCase() !== 'i') {
                return false;
            }
            if (this._active && editor.selection.getSelectionStartElem()[0].nodeName.toLocaleLowerCase() === 'i') {
                return false;
            }

            // 修改 offset 位置
            var range = editor.selection.getRange();
                range.setStart(range.endContainer, range.startOffset - 1);
            editor.selection.saveRange(range);

            // 执行 bold 命令
            editor.cmd.do('italic');

            // 需要将选取折叠起来
            editor.selection.collapseRange();
            editor.selection.restoreSelection();
        },

        // 试图改变 active 状态
        tryChangeActive: function tryChangeActive(e) {
            var editor = this.editor;
            var $elem = this.$elem;
            if (editor.cmd.queryCommandState('italic')) {
                this._active = true;
                $elem.addClass('w-e-active');
            } else {
                this._active = false;
                $elem.removeClass('w-e-active');
            }
        }
    };

    /*
        strikeThrough-menu
    */
    // 构造函数
    function StrikeThrough(editor) {
        this.editor = editor;
        this.$elem = $('<div class="w-e-menu w-e-menu-strikeThrough"><i class="w-e-icon-strikethrough"><i/></div>');
        this.type = 'click';
        this.title = config.lang['strikeThrough'];

        // 当前是否 active 状态
        this._active = false;
    }
    // 原型
    StrikeThrough.prototype = {
        constructor: StrikeThrough,

        // 点击事件
        onClick: function onClick(e) {
            // 点击菜单将触发这里

            var editor = this.editor;
            var $elem = this.$elem;
            var isSeleEmpty = editor.selection.isSelectionEmpty();

            /*if (isSeleEmpty) {
                // 选区是空的，插入并选中一个“空白”
                editor.selection.createEmptyRange();
            }

            // 执行 strikeThrough 命令
            editor.cmd.do('strikeThrough');

            if (isSeleEmpty) {
                // 需要将选取折叠起来
                editor.selection.collapseRange();
                editor.selection.restoreSelection();
            }*/
            if (isSeleEmpty) {
                if (this._active) {
                    this._active = false;
                    $elem.removeClass('w-e-active');
                } else {
                    this._active = true;
                    $elem.addClass('w-e-active');
                }
                editor.selection.restoreSelection();
            } else {
                // 执行 bold 命令
                editor.cmd.do('strikeThrough'); 
            }
        },

        activeClick: function activeClick(){
            var editor = this.editor;
            if (!this._active && editor.selection.getSelectionStartElem()[0].nodeName.toLocaleLowerCase() !== 'strike') {
                return false;
            }
            if (this._active && editor.selection.getSelectionStartElem()[0].nodeName.toLocaleLowerCase() === 'strike') {
                return false;
            }

            // 修改 offset 位置
            var range = editor.selection.getRange();
                range.setStart(range.endContainer, range.startOffset - 1);
            editor.selection.saveRange(range);

            // 执行 bold 命令
            editor.cmd.do('strikeThrough');

            // 需要将选取折叠起来
            editor.selection.collapseRange();
            editor.selection.restoreSelection();
        },

        // 试图改变 active 状态
        tryChangeActive: function tryChangeActive(e) {
            var editor = this.editor;
            var $elem = this.$elem;
            if (editor.cmd.queryCommandState('strikeThrough')) {
                this._active = true;
                $elem.addClass('w-e-active');
            } else {
                this._active = false;
                $elem.removeClass('w-e-active');
            }
        }
    };

    /*
        menu - justifyCenter
    */
    // 构造函数
    function JustifyCenter(editor) {
        this.editor = editor;
        this.$elem = $('<div class="w-e-menu w-e-menu-justifyCenter"><i class="w-e-icon-justifyCenter"><i/></div>');
        this.type = 'click';
        this.title = config.lang['justifyCenter'];

        // 当前是否 active 状态
        this._active = false;
    }
    // 原型
    JustifyCenter.prototype = {
        constructor: JustifyCenter,

        // 点击事件
        onClick: function onClick(e) {
            // 点击菜单将触发这里

            var editor = this.editor;
            if (this._active) {
                editor.cmd.do('JustifyLeft');    
            } else {
                editor.cmd.do('justifyCenter');
            }
        },

        // 试图改变 active 状态
        tryChangeActive: function tryChangeActive(e) {
            var editor = this.editor;
            
            // 获取当前选区所在的父元素
            var elem = editor.selection.getSelectionContainerElem();
            var p = elem.parentUntil('p') || elem;
            var textAlign;

            if (!p) {
                // 未找到 p 元素，则标记为未处于选中状态
                this._active = false;
                return;
            }
 
            textAlign = p[0].style.textAlign;
            if (!textAlign || textAlign === 'left') {
                // 得到的p，text-align 属性是 left，则标记为未处于选中状态
                this._active = false;
                return;
            }

            // 找到 p 元素，并且 text-indent 不是 0，则标记为选中状态
            this._active = true;
        }
    };

    /*
        menu - indent
    */
    // 构造函数
    function Indent(editor) {
        this.editor = editor;
        this.$elem = $('<div class="w-e-menu w-e-menu-indent"><i class="w-e-icon-Indent"><i/></div>');
        this.type = 'click';
        this.title = config.lang['indent'];

        // 当前是否 active 状态
        this._active = false;
    }
    // 原型
    Indent.prototype = {
        constructor: Indent,

        // 点击事件
        onClick: function onClick(e) {
            // 点击菜单将触发这里

            var editor = this.editor;
            if (this._active) {
                var elem = editor.selection.getSelectionContainerElem();
                var p = elem.parentUntil('p') || elem;
                if (!p) {
                    // 未找到 p 元素，则忽略
                    return e.preventDefault();
                }
                p.css('text-indent', '0');
            } else {
                var elem = editor.selection.getSelectionContainerElem();
                var p = elem.parentUntil('p') || elem;
                if (!p) {
                    // 未找到 p 元素，则忽略
                    return e.preventDefault();
                }
                p.css('text-indent', '2em');
            }

            // 需要将选取折叠起来
            this.tryChangeActive();
            editor.selection.collapseRange();
            editor.selection.restoreSelection();
        },

        // 试图改变 active 状态
        tryChangeActive: function tryChangeActive(e) {
            var editor = this.editor;
           
            // 获取当前选区所在的父元素
            var elem = editor.selection.getSelectionContainerElem();
            var p = elem.parentUntil('p') || elem;
            var indent;

            if (!p) {
                // 未找到 p 元素，则标记为未处于选中状态
                this._active = false;
                return;
            }
 
            indent = p[0].style.textIndent;

            if (!indent || indent === '0px') {
                // 得到的p，text-indent 属性是 0，则标记为未处于选中状态
                this._active = false;
                return;
            }

            // 找到 p 元素，并且 text-indent 不是 0，则标记为选中状态
            this._active = true;
        }
    };

    /*
        menu - img
    */
    // 构造函数
    function Image(editor) {
        this.editor = editor;
        this.$elem = $('<div class="w-e-menu w-e-menu-image" id="edit_upload_image_select"><i class="w-e-icon-image"><i/></div>');
        this.type = 'panel';
        this.title = config.lang['image'];

        // 当前是否 active 状态
        this._active = false;
    }
    // 原型
    Image.prototype = {
        constructor: Image,

        onClick: function onClick() {
            // if (this._active) {
            //     this._createEditPanel();
            // } else {
            //     this._createInsertPanel();
            // }
        },

        // 试图改变 active 状态
        tryChangeActive: function tryChangeActive(e) {
            var editor = this.editor;
            var $elem = this.$elem;
            if (editor._selectedImg) {
                this._active = true;
                $elem.addClass('w-e-active');
            } else {
                this._active = false;
                $elem.removeClass('w-e-active');
            }
        }
    };

    /*
        粘贴信息的处理
    */
    // 获取粘贴的纯文本
    function getPasteText(e) {
        var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData;
        var pasteText = void 0;
        if (clipboardData == null) {
            pasteText = window.clipboardData && window.clipboardData.getData('text');
        } else {
            pasteText = clipboardData.getData('text/plain');
        }

        return replaceHtmlSymbol(pasteText);
    }
    // 获取粘贴的html
    function getPasteHtml(e) {
        var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData;
        var pasteText = void 0,
            pasteHtml = void 0;
        if (clipboardData == null) {
            pasteText = window.clipboardData && window.clipboardData.getData('text');
        } else {
            pasteText = clipboardData.getData('text/plain');
            pasteHtml = clipboardData.getData('text/html');
        }
        if (!pasteHtml && pasteText) {
            pasteHtml = '<p>' + replaceHtmlSymbol(pasteText) + '</p>';
        }
        if (!pasteHtml) {
            return;
        }

        // 过滤word中状态过来的无用字符
        var docSplitHtml = pasteHtml.split('</html>');
        if (docSplitHtml.length === 2) {
            pasteHtml = docSplitHtml[0];
        }

        // 过滤无用标签
        pasteHtml = pasteHtml.replace(/<(meta|script|link).+?>/igm, '');

        // 过滤样式
        pasteHtml = pasteHtml.replace(/\s?(class|style)=('|").+?('|")/igm, '');

        return pasteHtml;
    }
    // 获取粘贴的图片文件
    function getPasteImgs(e) {
        var result = [];
        var txt = getPasteText(e);
        if (txt) {
            // 有文字，就忽略图片
            return result;
        }

        var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData || {};
        var items = clipboardData.items;
        if (!items) {
            return result;
        }

        objForEach(items, function(key, value) {
            var type = value.type;
            if (/image/i.test(type)) {
                result.push(value.getAsFile());
            }
        });

        return result;
    }
    /*
        编辑区域
    */
    // 构造函数
    function Text(editor) {
        this.editor = editor;
    }
    // 修改原型
    Text.prototype = {
        constructor: Text,

        // 初始化
        init: function init() {
            // 绑定事件
            this._bindEvent();
        },

        // 清空内容
        clear: function clear() {
            this.html('<p><br></p>');
        },

        // 获取 设置 html
        html: function html(val) {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if (val == null) {
                return $textElem.html();
            } else {
                $textElem.html(val);

                // 初始化选取，将光标定位到内容尾部
                editor.initSelection();
            }
        },

        // 获取 设置 text
        text: function text(val) {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if (val == null) {
                return $textElem.text();
            } else {
                $textElem.text('<p>' + val + '</p>');

                // 初始化选取，将光标定位到内容尾部
                editor.initSelection();
            }
        },

        // 追加内容
        append: function append(html) {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            $textElem.append($(html));

            // 初始化选取，将光标定位到内容尾部
            editor.initSelection();
        },

        // 绑定事件
        _bindEvent: function _bindEvent() {
            // 实时保存选取
            this._saveRangeRealTime();

            // 按回车建时的特殊处理
            this._enterKeyHandle();

            // 清空时保留 <p><br></p>
            this._clearHandle();

            // 粘贴事件（粘贴文字，粘贴图片）
            this._pasteHandle();
        },

        // 实时保存选取
        _saveRangeRealTime: function _saveRangeRealTime() {
            var editor = this.editor;
            var $textElem = editor.$textElem;

            // 保存当前的选区
            function saveRange(e) {
                // 随时保存选区
                editor.selection.saveRange();
                // 除去上下左右
                // 删除
                // back
                if (e.type === 'keyup' && 
                    e.keyCode !== 8 &&
                    e.keyCode !== 37 && 
                    e.keyCode !== 39 && 
                    e.keyCode !== 38 && 
                    e.keyCode !== 40 &&
                    e.keyCode !== 46) {
                    editor.menus.activeClick(e);
                }
                // 更新按钮 ative 状态
                editor.menus.changeActive(e);
            }
            $textElem.on('keydown', function(){
                editor.selection.saveRange();
            });
            $textElem.on('keyup', saveRange);
            $textElem.on('mousedown', function(e) {
                // mousedown 状态下，鼠标滑动到编辑区域外面，也需要保存选区
                $textElem.on('mouseleave', saveRange);
            });
            $textElem.on('mouseup', function(e) {
                saveRange(e);
                // 在编辑器区域之内完成点击，取消鼠标滑动到编辑区外面的事件
                $textElem.off('mouseleave', saveRange);
            });
        },

        // 按回车键时的特殊处理
        _enterKeyHandle: function _enterKeyHandle() {
            var editor = this.editor;
            var $textElem = editor.$textElem;

            // 将回车之后生成的非 <p> 的顶级标签，改为 <p>
            function pHandle(e) {
                var $selectionElem = editor.selection.getSelectionContainerElem();
                var $parentElem = $selectionElem.parent();
                if (!$parentElem.equal($textElem)) {
                    // 不是顶级标签
                    return;
                }
                var nodeName = $selectionElem.getNodeName();
                if (nodeName === 'P') {
                    // 当前的标签是 P ，不用做处理
                    return;
                }

                if ($selectionElem.text()) {
                    // 有内容，不做处理
                    return;
                }

                // 插入 <p> ，并将选取定位到 <p>，删除当前标签
                var $p = $('<p><br></p>');
                $p.insertBefore($selectionElem);
                editor.selection.createRangeByElem($p, true);
                editor.selection.restoreSelection();
                $selectionElem.remove();
            }

            $textElem.on('keyup', function(e) {
                if (e.keyCode !== 13) {
                    // 不是回车键
                    return;
                }
                // 将回车之后生成的非 <p> 的顶级标签，改为 <p>
                pHandle(e);
            });

            // <pre><code></code></pre> 回车时 特殊处理
            function codeHandle(e) {
                var $selectionElem = editor.selection.getSelectionContainerElem();
                if (!$selectionElem) {
                    return;
                }
                var $parentElem = $selectionElem.parent();
                var selectionNodeName = $selectionElem.getNodeName();
                var parentNodeName = $parentElem.getNodeName();

                if (selectionNodeName !== 'CODE' || parentNodeName !== 'PRE') {
                    // 不符合要求 忽略
                    return;
                }

                if (!editor.cmd.queryCommandSupported('insertHTML')) {
                    // 必须原生支持 insertHTML 命令
                    return;
                }

                var _startOffset = editor.selection.getRange().startOffset;
                editor.cmd.do('insertHTML', '\n');
                editor.selection.saveRange();
                if (editor.selection.getRange().startOffset === _startOffset) {
                    // 没起作用，再来一遍
                    editor.cmd.do('insertHTML', '\n');
                }

                // 阻止默认行为
                e.preventDefault();
            }

            $textElem.on('keydown', function(e) {
                if (e.keyCode !== 13) {
                    // 不是回车键
                    return;
                }
                // <pre><code></code></pre> 回车时 特殊处理
                codeHandle(e);
            });
        },

        // 清空时保留 <p><br></p>
        _clearHandle: function _clearHandle() {
            var editor = this.editor;
            var $textElem = editor.$textElem;

            $textElem.on('keydown', function(e) {
                if (e.keyCode !== 8) {
                    return;
                }
                var txtHtml = $textElem.html().toLowerCase().trim();
                if (txtHtml === '<p><br></p>') {
                    // 最后剩下一个空行，就不再删除了
                    e.preventDefault();
                    return;
                }
            });

            $textElem.on('keyup', function(e) {
                if (e.keyCode !== 8) {
                    return;
                }
                var $p = void 0;
                var txtHtml = $textElem.html().toLowerCase().trim();

                // firefox 时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断
                if (!txtHtml || txtHtml === '<br>') {
                    // 内容空了
                    $p = $('<p><br/></p>');
                    $textElem.html(''); // 一定要先清空，否则在 firefox 下有问题
                    $textElem.append($p);
                    editor.selection.createRangeByElem($p, false, true);
                    editor.selection.restoreSelection();
                }
            });
        },

        // 粘贴事件（粘贴文字 粘贴图片）
        _pasteHandle: function _pasteHandle() {
            var editor = this.editor;
            var $textElem = editor.$textElem;

            // 粘贴文字
            $textElem.on('paste', function(e) {
                if (UA.isIE()) {
                    // IE 下放弃下面的判断
                    return;
                }

                // 阻止默认行为，使用 execCommand 的粘贴命令
                e.preventDefault();

                // 获取粘贴的文字
                // 过滤粘贴过来的内容
                var pasteHtml = getPasteHtml(e);
                    pasteHtml = editor.option.xss(pasteHtml, editor.option.xssRule);
                var pasteText = getPasteText(e);
                    pasteText = pasteText.replace(/\n/gm, '<br>');

                var $selectionElem = editor.selection.getSelectionContainerElem();
                if (!$selectionElem) {
                    return;
                }

                editor.selection.restoreSelection();
                document.execCommand('delete');

                var nodeName = $selectionElem.getNodeName();

                // code 中粘贴忽略
                if (nodeName === 'CODE' || nodeName === 'PRE') {
                    return;
                }

                // 表格中忽略，可能会出现异常问题
                if (nodeName === 'TD' || nodeName === 'TH') {
                    return;
                }

                if (nodeName === 'DIV' || $textElem.html() === '<p><br></p>') {
                    // 是 div，可粘贴过滤样式的文字和链接
                    if (!pasteHtml) {
                        return;
                    }
                    try {
                        // firefox 中，获取的 pasteHtml 可能是没有 <ul> 包裹的 <li>
                        // 因此执行 insertHTML 会报错
                        editor.cmd.do('insertHTML', pasteHtml);
                    } catch (ex) {
                        // 此时使用 pasteText 来兼容一下
                        editor.cmd.do('insertHTML', '<p>' + pasteText + '</p>');
                    }
                } else {
                    // 不是 div，证明在已有内容的元素中粘贴，只粘贴纯文本
                    if (!pasteText) {
                        return;
                    }
                    editor.cmd.do('insertHTML', '<p>' + pasteText + '</p>');
                }
            });

            // 粘贴图片
            $textElem.on('paste', function(e) {
                e.preventDefault();

                // 获取粘贴的图片
                var pasteFiles = getPasteImgs(e);
                if (!pasteFiles || !pasteFiles.length) {
                    return;
                }

                // 获取当前的元素
                var $selectionElem = editor.selection.getSelectionContainerElem();
                if (!$selectionElem) {
                    return;
                }
                var nodeName = $selectionElem.getNodeName();

                // code 中粘贴忽略
                if (nodeName === 'CODE' || nodeName === 'PRE') {
                    return;
                }

                // 上传图片
                // var uploadImg = editor.uploadImg;
                // uploadImg.uploadImg(pasteFiles);
            });
        }
    };

    /*
        命令，封装 document.execCommand
    */

    // 构造函数
    function Command(editor) {
        this.editor = editor;
    }
    // 修改原型
    Command.prototype = {
        constructor: Command,

        // 执行命令
        do: function _do(name, value) {
            var editor = this.editor;
            // 如果无选区，忽略
            if (!editor.selection.getRange()) {
                return;
            }

            // 恢复选取
            editor.selection.restoreSelection();

            // 执行
            var _name = '_' + name;
            if (this[_name]) {
                // 有自定义事件
                this[_name](value);
            } else {
                // 默认 command
                this._execCommand(name, value);
            }

            // 修改菜单状态
            editor.menus.changeActive();

            // 最后，恢复选取保证光标在原来的位置闪烁
            editor.selection.saveRange();
            editor.selection.restoreSelection();

            // 触发 onchange
            editor.change && editor.change();
        },

        // 自定义 insertHTML 事件
        _insertHTML: function _insertHTML(html) {
            var editor = this.editor;
            var range = editor.selection.getRange();

            // 保证传入的参数是 html 代码
            var test = /^<.+>$/.test(html);
            if (!test && !UA.isWebkit()) {
                // webkit 可以插入非 html 格式的文字
                throw new Error('执行 insertHTML 命令时传入的参数必须是 html 格式');
            }

            if (this.queryCommandSupported('insertHTML')) {
                // W3C
                this._execCommand('insertHTML', html);
            } else if (range.insertNode) {
                // IE
                range.deleteContents();
                range.insertNode($(html)[0]);
            } else if (range.pasteHTML) {
                // IE <= 10
                range.pasteHTML(html);
            }
        },

        // 插入 elem
        _insertElem: function _insertElem($elem) {
            var editor = this.editor;
            var range = editor.selection.getRange();

            if (range.insertNode) {
                range.deleteContents();
                range.insertNode($elem[0]);
            }
        },

        // 封装 execCommand
        _execCommand: function _execCommand(name, value) {
            document.execCommand(name, false, value);
        },

        // 封装 document.queryCommandValue
        queryCommandValue: function queryCommandValue(name) {
            return document.queryCommandValue(name);
        },

        // 封装 document.queryCommandState
        queryCommandState: function queryCommandState(name) {
            return document.queryCommandState(name);
        },

        // 封装 document.queryCommandSupported
        queryCommandSupported: function queryCommandSupported(name) {
            return document.queryCommandSupported(name);
        }
    };

    /*
        selection range API
    */

    // 构造函数
    function API(editor) {
        this.editor = editor;
        this._currentRange = null;
    }
    // 修改原型
    API.prototype = {
        constructor: API,

        // 获取 range 对象
        getRange: function getRange() {
            return this._currentRange;
        },

        // 保存选区
        saveRange: function saveRange(_range) {
            if (_range) {
                // 保存已有选区
                this._currentRange = _range;
                return;
            }

            // 获取当前的选区
            var selection = window.getSelection();
            if (selection.rangeCount === 0) {
                return;
            }
            var range = selection.getRangeAt(0);

            // 判断选区内容是否在编辑内容之内
            var $containerElem = this.getSelectionContainerElem(range);
            if (!$containerElem) {
                return;
            }
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if ($textElem.isContain($containerElem)) {
                // 是编辑内容之内的
                this._currentRange = range;
            }
        },

        // 折叠选区
        collapseRange: function collapseRange(toStart) {
            if (toStart == null) {
                // 默认为 false
                toStart = false;
            }
            var range = this._currentRange;
            if (range) {
                range.collapse(toStart);
            }
        },

        // 选中区域的文字
        getSelectionText: function getSelectionText() {
            var range = this._currentRange;
            if (range) {
                return this._currentRange.toString();
            } else {
                return '';
            }
        },

        // 选区的 $Elem
        getSelectionContainerElem: function getSelectionContainerElem(range) {
            range = range || this._currentRange;            
            var elem = void 0;
            if (range) {
                elem = range.commonAncestorContainer;
                return $(elem.nodeType === 1 ? elem : elem.parentNode);
            }
        },
        getSelectionStartElem: function getSelectionStartElem(range) {
            range = range || this._currentRange;
            var elem = void 0;
            if (range) {
                elem = range.startContainer;
                return $(elem.nodeType === 1 ? elem : elem.parentNode);
            }
        },
        getSelectionEndElem: function getSelectionEndElem(range) {
            range = range || this._currentRange;
            var elem = void 0;
            if (range) {
                elem = range.endContainer;
                return $(elem.nodeType === 1 ? elem : elem.parentNode);
            }
        },

        // 选区是否为空
        isSelectionEmpty: function isSelectionEmpty() {
            var range = this._currentRange;
            if (range && range.startContainer) {
                if (range.startContainer === range.endContainer) {
                    if (range.startOffset === range.endOffset) {
                        return true;
                    }
                }
            }
            return false;
        },

        // 恢复选区
        restoreSelection: function restoreSelection() {
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(this._currentRange);
        },

        // 创建一个空白（即 &#8203 字符）选区
        createEmptyRange: function createEmptyRange() {
            var editor = this.editor;
            var range = this.getRange();
            var $elem = void 0;

            if (!range) {
                // 当前无 range
                return;
            }
            if (!this.isSelectionEmpty()) {
                // 当前选区必须没有内容才可以
                return;
            }

            try {
                // 目前只支持 webkit 内核
                if (UA.isWebkit()) {
                    // 插入 &#8203
                    editor.cmd.do('insertHTML', '&#8203;');
                    // 修改 offset 位置
                    range.setEnd(range.endContainer, range.endOffset + 1);
                    // 存储
                    this.saveRange(range);
                } else {
                    $elem = $('<strong>&#8203;</strong>');
                    editor.cmd.do('insertElem', $elem);
                    this.createRangeByElem($elem, true);
                }
            } catch (ex) {
                // 部分情况下会报错，兼容一下
            }
        },

        // 根据 $Elem 设置选区
        createRangeByElem: function createRangeByElem($elem, toStart, isContent) {
            // $elem - 经过封装的 elem
            // toStart - true 开始位置，false 结束位置
            // isContent - 是否选中Elem的内容
            if (!$elem.length) {
                return;
            }

            var elem = $elem[0];
            var range = document.createRange();

            if (isContent) {
                range.selectNodeContents(elem);
            } else {
                range.selectNode(elem);
            }

            if (typeof toStart === 'boolean') {
                range.collapse(toStart);
            }

            // 存储 range
            this.saveRange(range);
        }
    };

    /*
        编辑器构造函数
    */
    // id，累加
    var editorId = 1;
    // 构造函数
    function Editor(toolbarSelector, textSelector, option) {
        if (toolbarSelector == null) {
            // 没有传入任何参数，报错
            throw new Error('错误：初始化编辑器时候未传入任何参数，请查阅文档');
        }
        // id，用以区分单个页面不同的编辑器对象
        this.id = 'wangEditor-' + editorId++;
        
        this.option = option;
        this.toolbarSelector = toolbarSelector;
        this.textSelector = textSelector;

        // 自定义配置
        this.customConfig = {};
    }
    // 修改原型
    Editor.prototype = {
        constructor: Editor,

        // 初始化配置
        _initConfig: function _initConfig() {
            // _config 是默认配置，this.customConfig 是用户自定义配置，将它们 merge 之后再赋值
            var target = {};
            this.config = Object.assign(target, config, this.customConfig);
        },

        // 初始化 DOM
        _initDom: function _initDom() {
            var _this = this;

            var toolbarSelector = this.toolbarSelector;
            var $toolbarSelector = $(toolbarSelector);
            var textSelector = this.textSelector;

            var config$$1 = this.config;
            var zIndex = config$$1.zIndex;

            // 定义变量
            var $toolbarElem = void 0,
                $textContainerElem = void 0,
                $textElem = void 0,
                $children = void 0;

            if (textSelector == null) {
                // 只传入一个参数，即是容器的选择器或元素，toolbar 和 text 的元素自行创建
                $toolbarElem = $('<div></div>');
                $textContainerElem = $('<div></div>');

                // 将编辑器区域原有的内容，暂存起来
                $children = $toolbarSelector.children();

                // 添加到 DOM 结构中
                $toolbarSelector.append($toolbarElem).append($textContainerElem);

                // 自行创建的，需要配置默认的样式
                // $toolbarElem.css('background-color', '#f1f1f1').css('border', '1px solid #ccc');
                // $textContainerElem.css('border', '1px solid #ccc').css('border-top', 'none').css('height', '300px');
            } else {
                // toolbar 和 text 的选择器都有值，记录属性
                $toolbarElem = $toolbarSelector;
                $textContainerElem = $(textSelector);
                // 将编辑器区域原有的内容，暂存起来
                $children = $textContainerElem.children();
            }

            // 编辑区域
            $textElem = $('<div></div>');
            $textElem.attr('contenteditable', 'true').css('width', '100%').css('height', '100%');

            // 初始化编辑区域内容
            if ($children && $children.length) {
                $textElem.append($children);
            } else {
                $textElem.append($('<p><br></p>'));
            }

            // 编辑区域加入DOM
            $textContainerElem.append($textElem);

            // 设置通用的 class
            $toolbarElem.addClass('w-e-toolbar');
            $textContainerElem.addClass('w-e-text-container');
            $textContainerElem.css('z-index', zIndex);
            $textElem.addClass('w-e-text');

            // 记录属性
            this.$toolbarElem = $toolbarElem;
            this.$textContainerElem = $textContainerElem;
            this.$textElem = $textElem;

            // 绑定 onchange
            $textContainerElem.on('click keyup', function() {
                _this.change && _this.change();
            });
            $toolbarElem.on('click', function() {
                this.change && this.change();
            });
        },

        // 封装 command
        _initCommand: function _initCommand() {
            this.cmd = new Command(this);
        },

        // 封装 selection range API
        _initSelectionAPI: function _initSelectionAPI() {
            this.selection = new API(this);
        },

        // 初始化菜单
        _initMenus: function _initMenus() {
            this.menus = new Menus(this);
            this.menus.init();
        },

        // 添加 text 区域
        _initText: function _initText() {
            this.txt = new Text(this);
            this.txt.init();
        },

        // 初始化选区，将光标定位到内容尾部
        initSelection: function initSelection(newLine) {
            var $textElem = this.$textElem;
            var $children = $textElem.children();
            if (!$children.length) {
                // 如果编辑器区域无内容，添加一个空行，重新设置选区
                $textElem.append($('<p><br></p>'));
                this.initSelection();
                return;
            }

            var $last = $children.last();

            if (newLine) {
                // 新增一个空行
                var html = $last.html().toLowerCase();
                var nodeName = $last.getNodeName();
                if (html !== '<br>' && html !== '<br\/>' || nodeName !== 'P') {
                    // 最后一个元素不是 <p><br></p>，添加一个空行，重新设置选区
                    $textElem.append($('<p><br></p>'));
                    this.initSelection();
                    return;
                }
            }

            this.selection.createRangeByElem($last, false, true);
            this.selection.restoreSelection();
        },

        // 绑定事件
        _bindEvent: function _bindEvent() {
            // -------- 绑定 onchange 事件 --------
            var onChangeTimeoutId = 0;
            var beforeChangeHtml = this.txt.html();
            var config$$1 = this.config;
            var onchange = config$$1.onchange;
            if (onchange && typeof onchange === 'function') {
                // 触发 change 的有三个场景：
                // 1. $textContainerElem.on('click keyup')
                // 2. $toolbarElem.on('click')
                // 3. editor.cmd.do()
                this.change = function() {
                    // 判断是否有变化
                    var currentHtml = this.txt.html();
                    if (currentHtml.length === beforeChangeHtml.length) {
                        return;
                    }

                    // 执行，使用节流
                    if (onChangeTimeoutId) {
                        clearTimeout(onChangeTimeoutId);
                    }
                    onChangeTimeoutId = setTimeout(function() {
                        // 触发配置的 onchange 函数
                        onchange(currentHtml);
                        beforeChangeHtml = currentHtml;
                    }, 200);
                };
            }
        },

        // 创建编辑器
        create: function create() {
            // 初始化配置信息
            this._initConfig();

            // 初始化 DOM
            this._initDom();

            // 封装 command API
            this._initCommand();

            // 封装 selection range API
            this._initSelectionAPI();

            // 添加 text
            this._initText();

            // 初始化菜单
            this._initMenus();

            // 初始化选区，将光标定位到内容尾部
            this.initSelection(true);

            // 绑定事件
            this._bindEvent();
        }
    };

    // 检验是否浏览器环境
    try {
        document;
    } catch (ex) {
        throw new Error('请在浏览器环境下运行');
    }

    // polyfill
    polyfill();
    // 返回
    var index = window.wangEditor || Editor;

    // 插件注入到vue里面
    var _export = (function() {
        var Vue;
        function install(_Vue) {
            if (Vue) {
                console.error(
                    '[edit] already installed. Vue.use(edit) should be called only once.'
                );
                return
            }
            Vue = _Vue;
            Vue.prototype.$edit = index;
        }
        return {
            install: install,
            version: '1.0.0'
        }
    })();

    return _export;

})));