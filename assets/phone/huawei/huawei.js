
$caf.regPlugin({
  name:"phone",
  init:function(){
    var logger=$caf.newLogger(" @ Plugin:"+this.name,"style='color:gray;'");
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/huawei.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/httpclient-4.2.6.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/httpcore-4.2.5.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/jackson-core-asl-1.9.12.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/jackson-jaxrs-1.9.12.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/jackson-mapper-asl-1.9.12.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/jackson-xc-1.9.12.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/log4j-1.2.12.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/commons-httpclient-3.0.1.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/commons-io-2.1.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/commons-lang.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/commons-logging-1.2.jar"));
    logger.print("Load lib:",$caf.loadLib("http://xwzhuat.tzbtest.ins/assets/phone/huawei/commons-logging-api-1.1.jar"));
    // var urlParam=window.location.host;
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/huawei.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/httpclient-4.2.6.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/httpcore-4.2.5.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/jackson-core-asl-1.9.12.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/jackson-jaxrs-1.9.12.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/jackson-mapper-asl-1.9.12.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/jackson-xc-1.9.12.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/log4j-1.2.12.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/commons-httpclient-3.0.1.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/commons-io-2.1.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/commons-lang.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/commons-logging-1.2.jar"));
    // logger.print("Load lib:",$caf.loadLib("http://"+urlParam+"/assets/phone/huawei/commons-logging-api-1.1.jar"));
    logger.close();
    $caf["phone"]={
      imp:$caf.javaCreate("com.pactera.caf.huawei.Phone",function(id,message){
    	  var args=["phone"];
          for(var i=0;i<arguments.length;i++){
            args[args.length]=arguments[i];
          }
          $caf.fireEvent.apply($caf,args);
      }),
      listen:function(callback){
          $caf.listen("phone",callback);
      },
      config:function(msConfig){
         var config=$caf.javaCreate("com.pactera.caf.huawei.Config");
         if(msConfig.host)config.setHost(msConfig.host);
         if(msConfig.port>0)config.setPort(msConfig.port);
         if(msConfig.agentPwd)config.setAgentPwd(msConfig.agentPwd);
         if(msConfig.agentNo)config.setAgentNo(msConfig.agentNo);
         if(msConfig.phoneNumber)config.setPhoneNumber(msConfig.phoneNumber);
         this.imp.setConfig(config);
      },
      open:function(){
          this.imp.open();
      },
      ready:function(){
          this.imp.ready();
      },
      loginout:function(){
          this.imp.loginout();
      },
      notready:function(){
          this.imp.notready();
      },
      rest:function(){
    	  this.imp.rest();
      },
      cancelrest:function(){
    	  this.imp.cancelrest();
      },
      callout:function(called){
    	  this.imp.callout(called);
      },
      callend:function(){
    	  this.imp.callend();
      },
      hold:function(){
    	  this.imp.hold();
      },
      qxhold:function(){
    	  this.imp.qxhold();
      },
      innerhelp:function(phoneNum){
    	  this.imp.innerhelp(phoneNum);
      },
      stopinnerhelp:function(){
    	  this.imp.stopinnerhelp();
      },
      transfer:function(workNoed){
    	  this.imp.transfer(workNoed);
      },
      confrence:function(workNoed){
    	  this.imp.confrence(workNoed);
      },
      stopconfrence:function(){
    	  this.imp.stopconfrence();
      },
      addsupervise:function(workNoed){
    	  this.imp.addsupervise(workNoed);
      },
      qualitycontrol:function(){
    	  this.imp.qualitycontrol();
      },
      addinsert:function(){
    	  this.imp.addinsert();
      },
      intercept:function(){
    	  this.imp.intercept();
      },
      answer:function(){
    	  this.imp.answer();
      },
      setCallData:function(callData){
    	  this.imp.setCallData(callData);
      },
      getCallData:function(){
    	  this.imp.getCallData();
      },
      cancelwork:function(){
    	  this.imp.cancelwork();
      }
    }
  },
  destroy:function(){
	 if($caf.rtms){
		$caf.rtms.stop();
	 }
  }
});
