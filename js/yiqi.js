// JavaScript Document
	
		function wybb(){
		var wybb=document.getElementById("woyaobiaobai");
		var heidht=document.documentElement.scrollHeight;
		var width = document.documentElement.scrollWidth;
		
		var zhezhao=document.createElement("div");
			zhezhao.id="zhezhao";
		 	zhezhao.style.height=heidht+"px";
			zhezhao.style.width=width+"px";
			document.body.appendChild(zhezhao);
		var login=document.createElement("div");
			login.id="bbkfb";
			login.innerHTML="<div class=\"bbkfb-head\">\
		<span>\我要表白</span>\
		<div class=\"bbkfb-xx\">\<img src=\"images/xx1.png\" id=\"bbk-close\"></div>\
	</div>\
	<div class=\"bbkfb-content\">\
		<div class=\"bbk-input\">\
			<input type=\"text\" placeholder=\"表白对象名称\" name=\"dfname\" id=\"dfname\">\
			<input type=\"text\" placeholder=\"对方邮箱，系统自动通知(可不填)\" name=\"dfemail\" id=\"dfemail\">\
			<input type=\"text\" placeholder=\"自己的名称\" name=\"name\" id=\"name\">\
			<input type=\"text\" placeholder=\"自己的QQ号(可不填，获取头像)\" name=\"qq\" id=\"qq\">\
			<textarea placeholder=\"说出你想说的话\" name=\"content\" id=\"bbkfbcont\">\</textarea>\
			<input type=\"submit\" value=\"发布\" onClick=\"fb()\">\
		</div>\
	</div>";
			document.body.appendChild(login);

				
			var Close = document.getElementById("bbk-close");
			Close.onclick=zhezhao.onclick=function(){
				document.body.removeChild(zhezhao);
				document.body.removeChild(login);
			}		
			
			
		}
		

		
			
		
				



			













