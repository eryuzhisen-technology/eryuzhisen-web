/**
 * String字符串类型扩展计算字符长度
 * - 中文2个字节
 * - 英文1个字节
 * @return {[type]} [description]
 */
String.prototype.gblen = function() {
	var len = 0;
	for (var i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
			len += 2;
		} else {
			len++;
		}
	}
	return len;
}

