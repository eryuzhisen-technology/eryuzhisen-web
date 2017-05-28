// cpm-inout
// focus后改变边框颜色
function cpm_input_focus (context){
	$(".cpm_form_input input").on('focus', function(){
	    var _this = $(this);
	    var name = _this.attr('name');
	    context[name + '_reg'] = true;
	})
}


// user
// login 和 dialog高度一样
function user_logo_dialog_height (){
	$(".m-user-logo").height($('.m-user-dialog').height());
}

export default {
	domInit (context){
console.log(context)		
		cpm_input_focus(context);
		user_logo_dialog_height();
	}
}