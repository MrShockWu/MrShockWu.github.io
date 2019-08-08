//将返回的随路数据进行解析
function anslyzeCallData(callData){
	return callData.split('|');
}

//设置随路数据
//callDatas是传回的数组
//返回应用需要的随路数据格式
function setCallData(callDatas){
	var callData="";
	for(var i = 0 ; i<callDatas.length ; i++){
		callData += "|"+callDatas[i];
	}
	return callData.substring(1);
}