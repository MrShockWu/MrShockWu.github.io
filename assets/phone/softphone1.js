var voice_path = "";
var aconnectid = "";

function login_call() {
	var called = "917625657488";
	$caf.phone.open();
	$caf.phone.ready();
	$caf.phone.callout(called); //拨打
}

function callend() {
	$caf.phone.callend();
	$caf.phone.cancelwork();
	divstyle('loginout');
	$caf.phone.loginout();
}

function divstyle(type) {
	if (type == "login") {
		$('#logindiv').css('display', 'none');
		$('#callenddiv').css('display', 'none');
	} else if (type == "loginout") {
		$('#logindiv').css('display', 'block');
		$('#loginoutdiv').css('display', 'none');
		$('#callenddiv').css('display', 'none');
	} else if (type == "callouting") {
		$('#logindiv').css('display', 'none');
		$('#loginoutdiv').css('display', 'none');
		$('#callenddiv').css('display', 'block');
	} else if (type == "notlogin") {
		$('#logindiv').css('display', 'block');
	}
}

var AgentEvent_Hold_Type = '';
var dateBegin

function initCAF() {
	var resultList = JSON.parse(window.sessionStorage.resultList);
	console.log(resultList);
	$caf.phone.config({
		host: resultList.ctiIp,
		port: 8000,
		agentPwd: "cti-1234",
		agentNo: resultList.agentNo,
		phoneNumber: resultList.aextention,
	});

	$caf.phone.listen(function (type, id, message) {
		debugger
		if (id == "0") {
			divstyle("notlogin");
		} else if (id == "1") {
			divstyle('login');
		} else if (id == "2") {
			divstyle('loginout');
		} else if (id == "5") { //挂机成功
			divstyle('loginout');
		} else if (id == "6") {} else if (id == "7") { //通话态单独处理,此处不做处理
		} else if (id == "8") {
			divstyle('rest');
		} else if (type == "callouting") {
			aconnectid = message;
			divstyle('callouting');
			// dateBegin = new Date() //获取开始时间
			// var dialDate =transDateN(dateBegin);//拨打电话的日期
				var param1 = {
					aconnectid: aconnectid,
					// obDate: dialDate
				}
			window.sessionStorage['aconnectid'] = aconnectid;
			var setDate = JSON.stringify(param1);
			window.sessionStorage['setDate'] = setDate;
			console.log(window.sessionStorage['setDate'])
		} else if (type == "AgentOther_PhoneAlerting") {
			document.getElementById('callid').value = message;
			divstyle('AgentOther_PhoneAlerting');
		} else if (type == "AgentEvent_Auto_Answer") {
			divstyle('AgentEvent_Auto_Answer');
			clearClock();
			startClock();
		} else if (type == "AgentEvent_Hold") {
			if (AgentEvent_Hold_Type == '1') { //转保持
			} else if (AgentEvent_Hold_Type == '2') { //转咨询
			}
		} else if (type == "qxholdSuccess") {} else if (type == "stop_innerHelp_Success") {} else if (type == "confrence_Success") {} else if (type == "stop_confrence_Success") {} else if (type == "supervise_Success") {} else if (type == "qualitycontrol_Success") {} else if (type == "addinsert_Success") {} else if (type == "intercept_Success") {} else if (type == "anser_Success") {} else if (type == "Call_Out_Fail") {
			divstyle('loginout');
		} else if (type == 'callData') {} else if (type == 'setCallId') {} else if (type == 'cancelwork_fail') {} else if (type == 'restSuccess') {} else if (type == 'cancelrestSuccess') {} else if (type == 'AgentMediaEvent_Record') { //获取录音文件
			var startindx = message.lastIndexOf('fileName=') + 9;
			var endindx = message.lastIndexOf(".V3") + 3;
			voice_path = message.substring(startindx, endindx); //录音文件名
		} else if (type == 'callendSuccess') { //挂机事件
			// alert(aconnectid); //aconnectid   
			// alert(voice_path); //录音文件名
			// var dateEnd = new Date();
			// var dateTime = timeFn(dateBegin, dateEnd);
			var param = {
				aucid: voice_path,
				// obTime: dateTime
			}
			if (this.voice_path != '') {
				var tapeInfo = JSON.stringify(param);
				window.sessionStorage['tapeInfo'] = tapeInfo;
				console.log(window.sessionStorage['tapeInfo'])
			}
		}
	});

	// function timeFn(dateBegin, dateEnd) {
	// 	var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
	// 	var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算相差天数
	// 	var leavel = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
	// 	var hours = Math.floor(leavel / (3600 * 1000)); //计算出小时数
	// 	//计算相差分钟数
	// 	var leavel2 = leavel % (3600 * 1000); //计算小时数后剩余的毫秒数
	// 	var minutes = Math.floor(leavel2 / (3600 * 1000)); //计算相差分钟数
	// 	//计算相差秒数
	// 	var leavel3 = leavel2 % (60 * 1000); //计算分钟数后剩余的毫秒数
	// 	var seconds = Math.round(leavel3 / 1000);
	// 	var dateTime = dayDiff + ':' + hours + ':' + minutes + ':' + seconds;
	// 	return dateTime;
	// }

	// function getSessionDataCH(key) {
	// 	let session = window.sessionStorage;
	// 	//  atob(btoa("qqqq"));
	// 	let data = session.getItem(key);
	// 	return data;
	// }
	/**
	 * 转换日期格式
	 */
	// function transDateN(value) {
	// 	if (!value) {
	// 		return ''
	// 	}
	// 	let time = new Date(value);
	// 	let year = value.getFullYear();
	// 	let month = value.getMonth() + 1 + '';
	// 	let data = value.getDate() + '';
	// 	if (month.length < 2) {
	// 		month = '0' + month;
	// 	}
	// 	if (data.length < 2) {
	// 		data = "0" + data
	// 	}
	// 	let newtime = year + "-" + month + "-" + data;
	// 	return newtime;
	// }

}
