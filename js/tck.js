// JavaScript Document
//	window.onload=function(){/* 当文档加载完成开始执行*/
//	var oBtn=document.getElementById("btnlogin"); //获取点击按钮 使用byid获取按钮节点2283	1242
//		oBtn.onclick=function(){								//当鼠标点击后执行以下命令
//		openNew();
//		}
//			var oBtn=document.getElementById("btnzhuce"); //获取点击按钮 使用byid获取按钮节点2283	1242
//		oBtn.onclick=function(){								//当鼠标点击后执行以下命令
//		zhuce();
//		}
//			var oBtn=document.getElementById("woyaobiaobai"); //获取点击按钮 使用byid获取按钮节点2283	1242
//		oBtn.onclick=function(){								//当鼠标点击后执行以下命令
//		biaobaifb();
//		}
//	
//}		

					/*获取时间*/
function CurentTime()  
    {   
        var now = new Date();  
          
        var year = now.getFullYear();       //年  
        var month = now.getMonth() + 1;     //月  
        var day = now.getDate();            //日  
          
        var hh = now.getHours();            //时  
        var mm = now.getMinutes();          //分  
        var ss = now.getSeconds();           //秒  
          
        var clock = year + "-";  
          
        if(month < 10)  
            clock += "0";  
          
        clock += month + "-";  
          
        if(day < 10)  
            clock += "0";  
              
        clock += day + " ";  
          
        if(hh < 10)  
            clock += "0";  
              
        clock += hh + ":";  
        if (mm < 10) clock += '0';   
        clock += mm + ":";   
           
        if (ss < 10) clock += '0';   
        clock += ss;  
		return clock;
      
}

			
	



					function read(){
							
			
						if(document.getElementById("dht-zhezhao")){
							var dhtzhezhao = document.getElementById("dht-zhezhao");
							var dhtzx = document.getElementById("daohangtiao");
							document.body.removeChild(dhtzhezhao);
							document.body.removeChild(dhtzx);
						}else{
					
						var dhtimg = document.getElementById("head-right");
						var heidht=document.documentElement.scrollHeight;
						var width = document.documentElement.scrollWidth;
						var dhtzhezhao=document.createElement("div");
							dhtzhezhao.id = "dht-zhezhao";
							dhtzhezhao.style.height=heidht+"px";
							dhtzhezhao.style.width=width+"px";
							document.body.appendChild(dhtzhezhao);
						var dhtzx=document.createElement("div");
							dhtzx.id = "daohangtiao";
							dhtzx.innerHTML="<div class=\"dht-touxiang\" align=\"center\"><img src=\"images/niming1.png\"></div>\
											<div class=\"dht-name\" align=\"center\"><span>匿名</span>\</div>\
											<div class=\"dht-input\" align=\"center\">\
											<input type=\"button\" value=\"登录\" id=\"longintj\" onClick=\"loginhs()\"><input type=\"button\" value=\"注册\" id=\"regtj\" onclick=\"reg()\"></div>";

							document.body.appendChild(dhtzx);
						
							dhtzhezhao.onclick=function(){
							document.body.removeChild(dhtzhezhao);
							document.body.removeChild(dhtzx);
							}
						}
							
							
			}
	
		
				function read2(){
							
			
						if(document.getElementById("dht-zhezhao")){
							var dhtzhezhao = document.getElementById("dht-zhezhao");
							var dhtzx = document.getElementById("daohangtiao");
							document.body.removeChild(dhtzhezhao);
							document.body.removeChild(dhtzx);
						}else{
					
						var dhtimg = document.getElementById("head-right");
						var heidht=document.documentElement.scrollHeight;
						var width = document.documentElement.scrollWidth;
						var dhtzhezhao=document.createElement("div");
							dhtzhezhao.id = "dht-zhezhao";
							dhtzhezhao.style.height=heidht+"px";
							dhtzhezhao.style.width=width+"px";
							document.body.appendChild(dhtzhezhao);
						var dhtzx=document.createElement("div");
							dhtzx.id = "daohangtiao";
							dhtzx.innerHTML="<div class=\"dht-touxiang\" align=\"center\"><img src=\"images/niming1.png\"></div>\
											<div class=\"dht-name\" align=\"center\"><span>匿名</span>\</div>\
											<div class=\"dht-input\" align=\"center\">\
											<input type=\"button\" value=\"登录\" id=\"longintj\" onClick=\"zccxdlk()\"><input type=\"button\" value=\"注册\" id=\"regtj\" onclick=\"zccxzck()\"></div>";

							document.body.appendChild(dhtzx);
						
							dhtzhezhao.onclick=function(){
							document.body.removeChild(dhtzhezhao);
							document.body.removeChild(dhtzx);
							}
						}
							
							
			}
		


			
			function fb(){
							
								var bbfb = new XMLHttpRequest;
								bbfb.open("POST","biaobai.php");
								var fasong = "dfname=" + document.getElementById("dfname").value 
											+"&dfemail=" + document.getElementById("dfemail").value 
											+"&name=" + document.getElementById("name").value 
											+"&qq=" + document.getElementById("qq").value 
											+"&bbkfbcont=" + document.getElementById("bbkfbcont").value;
								bbfb.setRequestHeader("Content-type","application/x-www-form-urlencoded");
								bbfb.send(fasong);
								bbfb.onreadystatechange=function(){
									if(bbfb.readyState===4){
										if(bbfb.status==200){
												var jieguo = JSON.parse(bbfb.responseText);
												if(jieguo.success){
													var zhezhao = document.getElementById("zhezhao");
													document.body.removeChild(zhezhao);
													var bbkfb = document.getElementById("bbkfb");
												   	document.body.removeChild(bbkfb);
													
													var fbyes = document.createElement("div");
														fbyes.id= "fb-yes";
													fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"发布成功\"  onClick=\"fbcg()\"></div>";
													document.body.appendChild(fbyes);
													
												   }else{
													  
													 	
													var fbyes = document.createElement("div");
														fbyes.id= "fb-yes";
													fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/xx.png\"></div><div class=\"fb-span\" align=\"center\"><span id=\"fbspan-ts\"></span><input type=\"button\" value=\"发布失败\"  onClick=\"fbsb()\"></div>";
													document.body.appendChild(fbyes);
													   var fbspan = document.getElementById("fbspan-ts");
													   fbspan.innerHTML = jieguo.msg;
													   
												   }
										   
										   }
									   
									   }
									
									
								}
								}
			
		function fbcg(){
				var shanchu = document.getElementById("fb-yes");
				document.body.removeChild(shanchu);
				location.reload();
			
		}
		function fbsb(){
				var shanchu = document.getElementById("fb-yes");
				document.body.removeChild(shanchu);
			
		}

/*点赞*/
				function dianzan(dianzanid){

				var dianzan = new XMLHttpRequest;
				dianzan.open("POST","7.php");
				dianzan.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				dianzan.send("dzid="+dianzanid);
				dianzan.onreadystatechange=function(){
				if(dianzan.readyState===4){
						if(dianzan.status===200){
								var jieguo = JSON.parse(dianzan.responseText);
								if(jieguo.success){
								   		var zanspan = document.getElementById("dznumber-"+dianzanid).innerText;
										var zanspannumber=Number(zanspan)+Number(1);
											document.getElementById("dznumber-"+dianzanid).innerText=zanspannumber;
									
									var zanimg = document.getElementById("zan-img-"+dianzanid);
										zanimg.src = "images/icon/zan.png";
								
									}
							
						   
						   }
				   
				   }
		}
		
		}
/*登录*/
			function loginhs(){
						
						var	daohangtiao = document.getElementById("daohangtiao");
							document.body.removeChild(daohangtiao);
							var login = document.createElement("div");
								login.id = "dengluk";
								login.innerHTML="<div class=\"dengluk-head\">\
												<span>登录</span>\
												<div class=\"bbkfb-xx\"><img src=\"images/xx1.png\" id=\"js-xx\"></div>\
												</div>\
												<div class=\"bbkfb-content\">\
												<div class=\"bbk-input\">\
												<input type=\"text\" placeholder=\"请输入您的账号\" name=\"username\" id=\"js-user\">\
												<input type=\"password\" placeholder=\"请输入您的密码\" name=\"password\" id=\"js-pass\">\
												<a href=\"#\">找回密码</a>\
												<input type=\"submit\" value=\"登录\" id=\"js-longintj\" onclick=\"logintj()\">\
												</div>\
												</div>";
								document.body.appendChild(login);
						
							var zhezhao = document.getElementById("dht-zhezhao");
							var xx = document.getElementById("js-xx");
								xx.onclick=zhezhao.onclick=function(){
									document.body.removeChild(login);
									document.body.removeChild(zhezhao);
									
								}
						
					}
				
/*登录账号*/
					
						function logintj(){
									var login = new XMLHttpRequest;
									login.open("POST","login.php")
									login.setRequestHeader("Content-type","application/x-www-form-urlencoded");
										var fasong = "user="+ document.getElementById("js-user").value
												+"&pass=" + document.getElementById("js-pass").value;
									login.send(fasong);
									login.onreadystatechange=function(){
										if(login.readyState===4){
												if(login.status===200){
													var jieguo = JSON.parse(login.responseText);
													if(jieguo.success){
													   		var zhezhao = document.getElementById("dht-zhezhao");
																document.body.removeChild(zhezhao);
															var logink = document.getElementById("dengluk");
																document.body.removeChild(logink);
															
														var fbyes = document.createElement("div");
														fbyes.id= "fb-yes";
													fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"登录成功\"  onClick=\"fbcg()\"></div>";
													document.body.appendChild(fbyes);
														
														
													   }else{
														  
														   		
														   var fbyes = document.createElement("div");
																fbyes.id= "fb-yes";
																fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/xx.png\"></div><div class=\"fb-span\" align=\"center\"><span id=\"fbspan-ts\"></span><input type=\"button\" value=\"重新登录\"  onClick=\"fbsb()\"></div>";
																document.body.appendChild(fbyes);
																   var fbspan = document.getElementById("fbspan-ts");
																   fbspan.innerHTML = jieguo.msg;
														   
													   }
												   
												   }
										}
						}
						}

/*个人中心显示隐藏*/
					function dis(){
								var zhezhao = document.getElementById("bl-zhezhao");
								var daohang = document.getElementById("daohangtiao");
								var height = document.documentElement.scrollHeight;
								var width = document.documentElement.scrollWidth;
									zhezhao.style.width=width+"px";
									zhezhao.style.height=height+"px";
									zhezhao.style.display="block";
									daohang.style.display="block";
								var img = document.getElementById("head-right");
								zhezhao.onclick=function(){
									daohang.style.display="none";
									zhezhao.style.display="none";
								}
						
					}


/*表白框评论*/
					function bbkpl(plid){
								var pinglun = new XMLHttpRequest;
								pinglun.open("POST","pinglun.php");
								pinglun.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						var fasong =  "plnr=" + document.getElementById("bbk-plnr").value 
											+"&plid=" + plid;
								pinglun.send(fasong);
								
					}


/*注销登录*/
					function zx(){
								var zhuxiao = new XMLHttpRequest;
									zhuxiao.open("GET","zx.php?zx=1");
									zhuxiao.send();
						zhuxiao.onreadystatechange=function(){
								if(zhuxiao.readyState===4){
										if(zhuxiao.status===200){
												var jieguo = JSON.parse(zhuxiao.responseText);
													if(jieguo.success){
													   		var zhezhao = document.getElementById("	bl-zhezhao");
																document.body.removeChild(zhezhao);
															var dht = document.getElementById("daohangtiao");
																document.body.removeChild(dht);
														
																var fbyes = document.createElement("div");
																	fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"注销成功\"  onClick=\"fbcg()\"></div>";
																	document.body.appendChild(fbyes);
													   }
										   
										   }
								   
								   }
						}
					}
		
/*注销重写*/
				function zxcx(){
							window.location.href="./zxcx.php";
				}










/*注册*/
								function reg(){
										var zhezhao = document.getElementById("dht-zhezhao");
										var dht = document.getElementById("daohangtiao");
										
											document.body.removeChild(dht);
										 var regk = document.createElement("div");
											 regk.id="zhuce";
											 regk.innerHTML="	<div id=\"zhezhao\"></div>\
																<div id=\"zhuce\">\
																<div class=\"dengluk-head\">\
																<span>注册</span>\
																<div class=\"bbkfb-xx\"><img src=\"images/xx1.png\" id=\"js-xx\"></div>\
																</div>\
																<div class=\"bbkfb-content\">\
																<div class=\"bbk-input\">\
																<input type=\"text\" placeholder=\"请输入您要注册账号\" name=\"username\" id=\"js-zcname\">\
																<input type=\"password\" placeholder=\"请输入您的密码\" name=\"password\" id=\"js-zcpass\">\
																<input type=\"password\" placeholder=\"请确认您的密码\" name=\"okpassword\"  id=\"js-zcpassok\">\
																<input type=\"text\" placeholder=\"请输入您的邮箱\" name=\"email\" id=\"js-zcemail\">\
																<input type=\"submit\" value=\"注册\" id=\"js-zc\" onclick=\"zhuce()\">\
																</div>\
																</div>\
																</div>";
												document.body.appendChild(regk);
											var xx = document.getElementById("js-xx");
												xx.onclick=zhezhao.onclick=function(){
													document.body.removeChild(zhezhao);
													document.body.removeChild(regk);
												}
								}
										
				function zhuce(){
							var zctj = new XMLHttpRequest;
								zctj.open("POST","zhuce.php");
								zctj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
								var fasong = "user=" + document.getElementById("js-zcname").value
											 + "&pass=" + document.getElementById("js-zcpass").value
											 + "&okpass=" + document.getElementById("js-zcpassok").value
											 + "&email=" + document.getElementById("js-zcemail").value;
								zctj.send(fasong);
								zctj.onreadystatechange=function(){
										if(zctj.readyState===4){
												if(zctj.status===200){
														var fanhui = JSON.parse(zctj.responseText);
															if(fanhui.success){
															   	var zhezhao = document.getElementById("dht-zhezhao");
																document.body.removeChild(zhezhao);
															var dht = document.getElementById("zhuce");
																document.body.removeChild(dht);
														
																var fbyes = document.createElement("div");
																	fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"注册成功\"  onClick=\"fbcg()\"></div>";
																	document.body.appendChild(fbyes);
																
															   }else{
																   var fbyes = document.createElement("div");
																   fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/xx.png\"></div><div class=\"fb-span\" align=\"center\"><span id=\"fbspan-ts\"></span><input type=\"button\" value=\"注册失败\"  onClick=\"fbsb()\"></div>";
																	document.body.appendChild(fbyes);
																   	var fbspan = document.getElementById("fbspan-ts");
													   				fbspan.innerHTML = fanhui.msg;
															   }
													
												}
										   
										   }
									
								}
				}

/*修改资料跳转*/
				function xgzl(){
			
					window.location.href="./user.php";
				}
/*修改资料提交*/
 				function xgzltj(){
				
					
					
					
						var xgzl = new XMLHttpRequest;
							xgzl.open("POST","xgzl.php");
					xgzl.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					var obj=document.getElementById('my-sex');
					var index=obj.selectedIndex; //序号，取当前选中选项的序号
					var val = obj.options[index].value;
							xgzl.send("name=" + document.getElementById("my-name").value
									 	+ "&xinbie=" + val
									    + "&age=" + document.getElementById("my-age").value
									  	+ "&shenggao=" + document.getElementById("my-shengao").value
										+ "&tizhong=" + document.getElementById("my-tizhong").value
										+ "&qianming=" + document.getElementById("my-qianming").value
									  	+ "&phone=" + document.getElementById("my-phone").value
									  	+ "&email=" + document.getElementById("my-email").value
									  	+ "&school=" + document.getElementById("my-school").value
									  	+ "&qq=" + document.getElementById("my-qq").value
									 );
					xgzl.onreadystatechange=function(){
										if(xgzl.readyState===4){
												if(xgzl.status===200){
													var fanhui = JSON.parse(xgzl.responseText);
															if(fanhui.success){
																var fbyes = document.createElement("div");
																	fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"保存成功\"  onClick=\"fbcg()\"></div>";
																	document.body.appendChild(fbyes);
																
															
															}
													
													
													
												}
										}
					}
				}

/*修改密码*/
						function xgpasstj(){
								var xgmm = new XMLHttpRequest;
									xgmm.open("POST","xgpass.php");
									xgmm.setRequestHeader("Content-type","application/x-www-form-urlencoded");
								var fasong = "pass=" + document.getElementById("my-pass").value
											+"&newpass=" + document.getElementById("my-newpass").value
											+"&okpass=" + document.getElementById("my-okpass").value
											;
									xgmm.send(fasong);
								xgmm.onreadystatechange=function(){
										if(xgmm.readyState===4){
												if(xgmm.status===200){
													var fanhui = JSON.parse(xgmm.responseText);
															if(fanhui.success){
																
															var fbyes = document.createElement("div");
																	fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"保存成功\"  onClick=\"fbcg()\"></div>";
																	document.body.appendChild(fbyes);
									
									
									
													}else{
														var fbyes = document.createElement("div");
																   fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/xx.png\"></div><div class=\"fb-span\" align=\"center\"><span id=\"fbspan-ts\"></span><input type=\"button\" value=\"修改失败\"  onClick=\"fbsb()\"></div>";
																	document.body.appendChild(fbyes);
																   	var fbspan = document.getElementById("fbspan-ts");
													   				fbspan.innerHTML = fanhui.msg;
														
													}
									}
								}
							}
						}

/*修改密码*/
				function xgmm(){		
						var xinxi = document.getElementById("js-xinxi");
					var xgmma = document.getElementById("js-xgmm");
						if(xinxi.style.display="block"){
							xinxi.style.display="none";
							 xgmma.style.display="block";
						}
				}


/*点击加载更多*/
	/*		var dj = 1;
			document.getElementById("db-jzgd").onclick=function(){
			   dj++;
			  var jiazai= new XMLHttpRequest;
				  jiazai.open("GET","./page.php?page="+dj);
					jiazai.send();
				
    }*/
			/*登陆框隐藏*/
				function dlkyc(){
							var dlkzhezhao = document.getElementById("cxdl-zhezhao").style.display="none";
							var dlk = document.getElementById("cxdl-dlk").style.display="none";
							
				}
			
			/*注册框隐藏*/
					function zckyc(){
							var dlkzhezhao = document.getElementById("cxzc-zhezhao").style.display="none";
							var dlk = document.getElementById("cxdl-zck").style.display="none";
							
				}
			
			
			

/*聊天发布有登录*/
			function lttj(qq,xname){
						var lt = new XMLHttpRequest;
							lt.open("POST","./lttj.php");
							lt.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						
							lt.send("neirong=" + document.getElementById("js-lt-neirong").value
								   	+ "&qq=" + qq
									+ "&xname=" + xname
								   );
							
							lt.onreadystatechange=function(){
								if(lt.readyState===4){
										if(lt.status===200){
											var fanhui = JSON.parse(lt.responseText);	
											if(fanhui.success){
												var ltfbnr = document.getElementById("js-lt-neirong");
													ltfbnr.value="";
											/*	var ltfb =  document.createElement("div");
														ltfb.id="lt-right";
														ltfb.innerHTML="<div class=\"lt-right-right\">\
																		<img src=\"http://q2.qlogo.cn/headimg_dl?dst_uin="+qq+"&spec=5\">\
																		</div>\
																		<div class=\"lt-right-left\">\
																		<div class=\"lt-right-left-top\">\
																		<span style=\"color:red\">"+fanhui.name+"</span>\
																		<span>"+fanhui.time+"</span>\
																		</div>\
																		<div class=\"lt-right-massage\">\
																		<span>"+fanhui.neirong+"</span>\
																		</div></div>";
																var neirong = document.getElementById("lt-neirong");
																neirong.appendChild(ltfb);
																var gdt = document.getElementById("lt-neirong");
																gdt.scrollTop = gdt.scrollHeight;*/
												
												
												
											}
											
											
										}
								}
							}
											
											
											
							
			}
			
/*聊天发布没有登录账号*/
	function lttjno(name){
							var lt = new XMLHttpRequest;
							lt.open("POST","./lttj.php");
							lt.setRequestHeader("Content-type","application/x-www-form-urlencoded");
							lt.send("neirong=" + document.getElementById("js-lt-neirong").value
								   	+ "&name=" + name
								   );
							lt.onreadystatechange=function(){
								if(lt.readyState===4){
										if(lt.status===200){
											var fanhui = JSON.parse(lt.responseText);	
											if(fanhui.success){
												var ltfbnr = document.getElementById("js-lt-neirong");
													ltfbnr.value="";
													/*var ltfb =  document.createElement("div");
														ltfb.id="lt-right";
														ltfb.innerHTML="<div class=\"lt-right-right\">\
																		<img src=\"images/niming"+fanhui.touxiang+".png\">\
																		</div>\
																		<div class=\"lt-right-left\">\
																		<div class=\"lt-right-left-top\">\
																		<span>"+fanhui.name+"</span>\
																		<span>"+fanhui.time+"</span>\
																		</div>\
																		<div class=\"lt-right-massage\">\
																		<span>"+fanhui.neirong+"</span>\
																		</div></div>";
																var neirong = document.getElementById("lt-neirong");
																neirong.appendChild(ltfb);
															var gdt = document.getElementById("lt-neirong");
															gdt.scrollTop = gdt.scrollHeight;*/
											}
											
											
										}
								}
							}
	}



/*聊天发布匿名提交*/
			function nmlttj(){
					var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
						var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
						var wHeight=document.documentElement.clientHeight;
						
					var nmtj = document.getElementById("lt-zhezhao");
						nmtj.style.display="block";
					 var nmwz = document.getElementById("lt-niming");
						var dHeight=nmwz.offsetHeight;
						var dWidth=nmwz.offsetWidth;
						nmwz.style.left=(sWidth-dWidth)/2+"px";		//设置居中 定义登陆框左边距离等于 （总宽-登陆框宽）/2
						nmwz.style.top=(wHeight-dHeight)/2+"px";		//设置居中 定义登陆框上边距离等于 （总高-登陆框高）/2
					
			}
			
			
			
			
/*聊天发布名字提交*/			
			function ltnametj(){
				
				var name = new XMLHttpRequest;
					name.open("POST","./ltname.php");
					name.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					name.send("name=" + document.getElementById("js-nm-name").value);
					name.onreadystatechange=function(){
								if(name.readyState===4){
										if(name.status===200){
											var fanhui = JSON.parse(name.responseText);	
											if(fanhui.success){
											var zhezhao = document.getElementById("lt-zhezhao");
 												zhezhao.style.display="none";
											window.location.replace("./userlt.php")
											
												

											}
											
											
										}
								}
							}
				
				
				
				
			}
			
/*聊天发布取消*/
		function ltnameqx(){
			var zhezhao = document.getElementById("lt-zhezhao");
 						zhezhao.style.display="none";
		}
			
/*重写登录*/
		function cxloginhs(){
					var zhezhao = document.getElementById("dht-zhezhao");
					var dht = document.getElementById("daohangtiao");
						document.body.removeChild(zhezhao);
						document.body.removeChild(dht);	
					var cxdl = document.getElementById("cxdl-zhezhao");
						cxdl.style.display="block";
			
			
		}







/*重写登录提交*/
		function cxdltj(){
					var cxdl = new XMLHttpRequest;
						cxdl.open("POST","login.php");
						cxdl.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						cxdl.send("user=" + document.getElementById("js-cxdlname").value
								  + "&pass=" +document.getElementById("js-cxdlpass").value
								 );
						
						cxdl.onreadystatechange=function(){
								if(cxdl.readyState===4){
										if(cxdl.status===200){
											var fanhui = JSON.parse(cxdl.responseText);	
											if(fanhui.success){
													window.location.replace("./userlt.php")
											
												

											}else{
													var cuowu = document.getElementById("js-cxdlfh");
														cuowu.innerHTML= fanhui.msg;
												
											}
											
											
										}
								}
							}
				
			
			
			
			
		}


/*重写登录注册叉叉*/
				function cxdlxx(){
						dlkyc();
					
					var zczhezhao = document.getElementById("cxzc-zhezhao");

					if(zczhezhao){
						zczhezhao.style.display="none";
					}
						
					
				}


/*重写点击注册*/
				function cxdjzc(){
						var zhezhao = document.getElementById("cxdl-zhezhao");
						var dlk = document.getElementById("cxdl-dlk");
							document.body.removeChild(zhezhao);
							document.body.removeChild(dlk);
						zccxzck();
						
					
					
				}

/*重写点击登录*/
		function cxdjdl(){
							var zhezhao = document.getElementById("cxzc-zhezhao");
						var dlk = document.getElementById("cxdl-dlk");
							document.body.removeChild(zhezhao);
							document.body.removeChild(dlk);
						zccxdlk();
						
								
							  
						
					
					
			
		}

/*重写注册提交*/
		function cxzctj(){
					var zc = new XMLHttpRequest;
						zc.open("POST","zhuce.php");
						zc.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						var fasong = "user=" + document.getElementById("js-cxzcuser").value
											 + "&pass=" + document.getElementById("js-cxzcpass").value
											 + "&okpass=" + document.getElementById("js-cxzcokpass").value
											 + "&email=" + document.getElementById("js-cxzcemail").value;
						zc.send(fasong);
						zc.onreadystatechange=function(){
								if(zc.readyState===4){
										if(zc.status===200){
											var fanhui = JSON.parse(zc.responseText);	
											if(fanhui.success){
													var fbyes = document.createElement("div");
																	fbyes.id= "fb-yes";
																	fbyes.innerHTML="<div class=\"fb-xx\"><img src=\"images/icon/yes2-green.png\"></div><div class=\"fb-span\" align=\"center\"><input type=\"button\" value=\"注册成功\"  onClick=\"fbcg()\"></div>";
																	document.body.appendChild(fbyes);
													
												

											}else{
													var cuowu = document.getElementById("js-cxzcfh");
														cuowu.innerHTML= fanhui.msg;
												
											}
											
											
										}
								}
							}
				
			
			
			
		}	
				function bgsz(){
						var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
						var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
						var wHeight=document.documentElement.clientHeight;
						var bg = document.getElementById("lt-bg");
								bg.style.height=sHeight+"px";			//设置高的长度-->
								bg.style.width=sWidth+"px";			//设置宽的长度-->
						var nmlt = document.getElementById("lt-xianzhi");
						var zhjg = wHeight-45;
							nmlt.style.height=zhjg+"px";
						var gdt = document.getElementById("lt-neirong");
						gdt.scrollTop = gdt.scrollHeight;
				

}




/*MD 再次重写JS写登陆框*/
					function zccxdlk(){
						if(document.getElementById("dht-zhezhao")){
							var dhtzhezhao = document.getElementById("dht-zhezhao");
							var dhtzx = document.getElementById("daohangtiao");
							document.body.removeChild(dhtzhezhao);
							document.body.removeChild(dhtzx);
						}
						var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
						var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
						var wHeight=document.documentElement.clientHeight;		//获取可是页面的高度-->
						var cxdlzhezhao=document.createElement("div");
							cxdlzhezhao.id = "cxdl-zhezhao";
							cxdlzhezhao.style.height=sHeight+"px";
							cxdlzhezhao.style.width=sWidth+"px";
							document.body.appendChild(cxdlzhezhao);
						var cjdlk=document.createElement("div");
							cjdlk.id = "cxdl-dlk";
							cjdlk.innerHTML="<div class='cxdl-xx'><img src='images/icon/xxx.png' id='js-cxdlkxx'></div>\
				<span class='cxdl-bt'>请登录</span>\
				<input type='test' placeholder='输入你的账号' id='js-cxdlname'>\
				<input type='password'  placeholder='输入你的密码' id='js-cxdlpass'>\
				<div class='lt-myzh'>\
					<span id='js-cxdlfh'></span>\
					<span onClick='cxdjzc()'>没有账号？点我注册</span>	\
				</div>\
				<button type='submit' onClick='cxdltj()'>登录</button>";

							document.body.appendChild(cjdlk);
									var dHeight=cjdlk.offsetHeight;
									var dWidth=cjdlk.offsetWidth;
									cjdlk.style.left=(sWidth-dWidth)/2+"px";		//设置居中 定义登陆框左边距离等于 （总宽-登陆框宽）/2
									cjdlk.style.top=(wHeight-dHeight)/2+"px";		//设置居中 定义登陆框上边距离等于 （总高-登陆框高）/2
							var cxxx = document.getElementById("js-cxdlkxx");
							cxxx.onclick=cxdlzhezhao.onclick=function(){
							document.body.removeChild(cxdlzhezhao);
							document.body.removeChild(cjdlk);
							}
						}
/*MD 再次重写JS写注册框*/
					function zccxzck(){
						if(document.getElementById("dht-zhezhao")){
							var dhtzhezhao = document.getElementById("dht-zhezhao");
							var dhtzx = document.getElementById("daohangtiao");
							document.body.removeChild(dhtzhezhao);
							document.body.removeChild(dhtzx);
						}
						var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
						var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
						var wHeight=document.documentElement.clientHeight;		//获取可是页面的高度-->
						var cxzczhezhao=document.createElement("div");
							cxzczhezhao.id = "cxzc-zhezhao";
							cxzczhezhao.style.height=sHeight+"px";
							cxzczhezhao.style.width=sWidth+"px";
							document.body.appendChild(cxzczhezhao);
						var cjzck=document.createElement("div");
							cjzck.id = "cxdl-dlk";
							cjzck.innerHTML="<div class='cxdl-xx'><img src='images/icon/xxx.png' id='js-cxdlkxx'></div>\
			<span class='cxdl-bt'>请注册</span>\
			<input type='test' placeholder='输入你的账号' id='js-cxzcuser'>\
			<input type='password' placeholder='输入你的密码' id='js-cxzcpass'>\
			<input type='password' placeholder='确认你的密码' id='js-cxzcokpass'>\
			<input type='test'  placeholder='输入你的邮箱' id='js-cxzcemail'>\
			<div class='lt-myzh'>\
				<span id='js-cxzcfh'></span>\
				<span onClick='cxdjdl()'>已有账号？点我登录</span></div>\
						<button type='submit' onClick='cxzctj()'>注册</button>";

							document.body.appendChild(cjzck);
									var dHeight=cjzck.offsetHeight;
									var dWidth=cjzck.offsetWidth;
									cjzck.style.left=(sWidth-dWidth)/2+"px";		//设置居中 定义登陆框左边距离等于 （总宽-登陆框宽）/2
									cjzck.style.top=(wHeight-dHeight)/2+"px";		//设置居中 定义登陆框上边距离等于 （总高-登陆框高）/2
							var cxxx = document.getElementById("js-cxdlkxx");
							cxxx.onclick=cxzczhezhao.onclick=function(){
							document.body.removeChild(cxzczhezhao);
							document.body.removeChild(cjzck);
							}
						}							
						
	
	
	
					
	/*获取数据*/
			function hqsj(user){
						setInterval(function(){  
							var clock = CurentTime();
	
										
								var fs = new XMLHttpRequest;
									fs.open("POST","hqshuju.php");	
									fs.setRequestHeader("Content-type","application/x-www-form-urlencoded");
									fs.send("cstime=" + clock);
									fs.onreadystatechange=function(){
								if(fs.readyState===4){
										if(fs.status===200){
											var fanhui = JSON.parse(fs.responseText);		
											
											if(fanhui!==null){		
											
												for(var i = 0 ; i < fanhui.length;i++){
													if(fanhui[i].vip==1){
														if(user!="" && fanhui[i].name==user){
															if(fanhui[i].touxiang.length > 4){
															var ltfb =  document.createElement("div");
															ltfb.id="lt-right";
															ltfb.innerHTML="<div class=\"lt-right-right\">\
																			<img src=\"http://q2.qlogo.cn/headimg_dl?dst_uin="+fanhui[i].touxiang+"&spec=5\">\
																			</div>\
																			<div class=\"lt-right-left\">\
																			<div class=\"lt-right-left-top\">\
																			<span style=\"color:red\">"+fanhui[i].name+"</span>\
																			<span>"+fanhui[i].time+"</span>\
																			</div>\
																			<div class=\"lt-right-massage\">\
																			<span>"+fanhui[i].content+"</span>\
																			</div></div>";
																	var neirong = document.getElementById("lt-neirong");
																	neirong.appendChild(ltfb);
															}else{
																var ltfb =  document.createElement("div");
																	ltfb.id="lt-right";
																	ltfb.innerHTML="<div class=\"lt-right-right\">\
																			<img src=\"images/niming"+fanhui[i].touxiang+".png\">\
																			</div>\
																			<div class=\"lt-right-left\">\
																			<div class=\"lt-right-left-top\">\
																			<span style=\"color:red\">"+fanhui[i].name+"</span>\
																			<span>"+fanhui[i].time+"</span>\
																			</div>\
																			<div class=\"lt-right-massage\">\
																			<span>"+fanhui[i].content+"</span>\
																			</div></div>";
																	var neirong = document.getElementById("lt-neirong");
																	neirong.appendChild(ltfb);
															}		
															
															
														}else{
														if(fanhui[i].touxiang.length > 4){	
															var ltfb =  document.createElement("div");
															ltfb.id="lt-left";
														ltfb.innerHTML="<div class=\"lt-left-left\">\
																		<img src=\"http://q2.qlogo.cn/headimg_dl?dst_uin="+fanhui[i].touxiang+"&spec=5\">\
																		</div>\
																		<div class=\"lt-left-right\">\
																		<div class=\"lt-left-right-top\">\
																		<span style=\"color:red\">"+fanhui[i].name+"</span>\
																		<span>"+fanhui[i].time+"</span>\
																		</div>\
																		<div class=\"lt-left-massage\">\
																		<span>"+fanhui[i].content+"</span>\
																		</div></div>";
																var neirong = document.getElementById("lt-neirong");
																neirong.appendChild(ltfb);
															}else{
																var ltfb =  document.createElement("div");
															ltfb.id="lt-left";
														ltfb.innerHTML="<div class=\"lt-left-left\">\
																		<img src=\"images/niming"+fanhui[i].touxiang+".png\">\
																		</div>\
																		<div class=\"lt-left-right\">\
																		<div class=\"lt-left-right-top\">\
																		<span style=\"color:red\">"+fanhui[i].name+"</span>\
																		<span>"+fanhui[i].time+"</span>\
																		</div>\
																		<div class=\"lt-left-massage\">\
																		<span>"+fanhui[i].content+"</span>\
																		</div></div>";
																var neirong = document.getElementById("lt-neirong");
																neirong.appendChild(ltfb);
															}
														}
														
														
														
														
													}
													if(fanhui[i].vip==0){
													var ltfb =  document.createElement("div");
														ltfb.id="lt-left";
														ltfb.innerHTML="<div class=\"lt-left-left\">\
																		<img src=\"images/niming"+fanhui[i].touxiang+".png\">\
																		</div>\
																		<div class=\"lt-left-right\">\
																		<div class=\"lt-left-right-top\">\
																		<span>"+fanhui[i].name+"</span>\
																		<span>"+fanhui[i].time+"</span>\
																		</div>\
																		<div class=\"lt-left-massage\">\
																		<span>"+fanhui[i].content+"</span>\
																		</div></div>";
																var neirong = document.getElementById("lt-neirong");
																neirong.appendChild(ltfb);
													
													}
													
												}
																var gdt = document.getElementById("lt-neirong");
																gdt.scrollTop = gdt.scrollHeight;
												}
												
											
											
											
											
									
								}
							}
							
							
				}
	
							},1000);

				
				
			}


/*进入聊天室*/
				function jrlts(){
							window.location.href="./userlt.php";
				}
			




/*回车*/
var jsneirong = document.getElementById("js-lt-neirong");
jsneirong.onkeydown = function (e) {
	var code = e.charCode || e.keyCode;
	if (code == 13) {
		var anniu = document.getElementById("js-xxfs");
		anniu.click();
		jsneirong.value=="";
	}
}


/*搜索*/
					

