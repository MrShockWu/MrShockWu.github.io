

//通话时间定时器
var ClockTimer = null;
//秒计数器
var TalkTimeCount = 0;
//超时秒计数器

/**
	 * 开始计时
	 */
function startClock(){
  try{
	if(ClockTimer != null){
		window.clearTimeout(ClockTimer);
		ClockTimer = null;
	}
    clockTime();
  }catch(e){}
}

	/**
	 * 结束计时
	 */
function stopClock(){
 try{
  if(ClockTimer != null){
    window.clearTimeout(ClockTimer);
    ClockTimer = null;
  }
 }catch(e){}
}

/**
 * 重置计时
 */
function clearClock(){
  stopClock();
  TalkTimeCount = 0;
  document.all.TalkTime.innerHTML="00:00:00";
}

/**
 * 统计时间
 */
function clockTime(){
  try{
		TalkTimeCount++;
	    document.all.TalkTime.innerHTML=FormatTime(TalkTimeCount)+"";
	    ClockTimer = window.setTimeout("clockTime();", 1000);
  }catch(e){
  }
}

/**
 * 将整数秒转换成时分秒格式
 */
function FormatTime(intTime){
	var TimeStr = "";
	if(intTime >= 3600){
		var Hours = parseInt(intTime/3600);
		var Minutes = parseInt((intTime - 3600*Hours)/60);
		var Seconds = intTime - Hours*3600-Minutes*60;
		if(Hours < 10){
	    	TimeStr = "0"+Hours;
	  	}else{
	  		TimeStr = ""+Hours;
	  	}
	  	if(Minutes < 10 ){
	    	TimeStr += ":0"+Minutes;
	  	}else{
	    	TimeStr += ":"+Minutes;
	  	}
	  	if(Seconds < 10){
	    	TimeStr += ":0"+Seconds;
	  	}else{
	  		TimeStr += ":"+Seconds;
	  	} 
	}
	else if(intTime >= 60 && intTime < 3600){
		var Minutes = parseInt(intTime/60);
		var Seconds = intTime - Minutes*60;
  
	  	if(Minutes < 10 ){
	    	TimeStr = "00:0"+Minutes;
	  	}else{
	    	TimeStr = "00:"+Minutes;
	  	}
	  	if(Seconds < 10){
	    	TimeStr += ":0"+Seconds;
	  	}else{
	  		TimeStr += ":"+Seconds;
	  	} 
	}
	else {
		var Seconds = intTime;
		if(Seconds < 10){
	    	TimeStr = "00:00:0"+Seconds;
	  	}else{
	  		TimeStr = "00:00:"+Seconds;
	  	} 
	}
	return(TimeStr);
}