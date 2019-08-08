(function(){
	/*$.fn.ResourceCode = function(){*/

		var $target = jQuery("#code");

		//点击向右按钮
		$("#codeButton1").on("click",function(){
			$(this).hide();
			$("#codeButton2").show(200);
			$("#codeArea").hide(200);
		});
		//点击向下按钮
		$("#codeButton2").on("click",function(){
			$(this).hide();
			$("#codeButton1").show(200);
			$("#codeArea").show(200);
		});
	/*};*/
})(jQuery);
var loadDemoCode_gisDemo = function(url){
	var re = "";   
    $.ajax({
        async: false,
        dataType: "html",
        url: url,
        success: function (result) {
            re = result;           
        }
    });
    $('#code').text(re);
};
var loadDemoCode = function (url) {
	// return;
    var re = "";
    // url = window.location.href;
    $.ajax({
        async: false,
        dataType: "html",
        url: url,
        success: function (result) {
            re = result;
            $('#code').text(re);
        }
    });
   
};

var isShowInstruction = true;
//操作说明
var registerDemoInstructions = function(instructionDetails){
	if(isShowInstruction)
		Dialog.show(instructionDetails);
	$("#x-dialog").parent()[0].style.zIndex = '20000'
	$("#controlButton").on("click", function(){
		isShowInstruction =!isShowInstruction;
		if(isShowInstruction){
			Dialog.show(instructionDetails);
		}else{
			Dialog.close();
		}
	});
};