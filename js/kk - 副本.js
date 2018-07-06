// JavaScript Document
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}




function openNew(){
var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
	var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
	var wHeight=document.documentElement.clientHeight;		//获取可是页面的高度-->
	

	var zhezhao=document.createElement("div");		//创建一个节点DIV -->
		zhezhao.id="zhezhao";						//给这个DIV一个ID-->
		zhezhao.style.height=sHeight+"px";			//设置高的长度-->
		zhezhao.style.width=sWidth+"px";			//设置宽的长度-->
		document.body.appendChild(zhezhao);			//将上面创建的元素加入到BODY的尾部-->
		
		var	login=document.createElement("div");	//创建一个节点DIV -->
		login.id="login";							//给这个DIV一个ID-->	
			login.innerHTML="	<div class=\"logink\"> \
		<div class=\"logintop\"> \
		<span>用户登录</span> \
		</div> \
		<div id=\"close\"></div> \
	</div>\
	<div class=\"logincont\" align=\"center\"> \
        <form action=\"#\" method=\"post\" name=\"login\"> \
			<input name=\"user\" type=\"text\" value=\"请输入账号\" maxlength=\"20\" onClick=\"this.value=''\" txt=><br><br><br><br><br><br> \
			<input name=\"pass\" type=\"password\" value=\"请输入密码\" maxlength=\"20\" onClick=\"this.value=''\"><br><br><br> \
            <a href=\"#\" class=\"djzc\">没有账号点击这里注册</a> \
			<span><input type=\"submit\" name=\"logintj\" value=\"登录\"></span> \
        </form>\
    </div>\";
 //直接添加HTML代码-->
		document.body.appendChild(login);			//将上面创建的元素加入到BODY的尾部
		//获取login的宽度和高度
		var dHeight=login.offsetHeight;
		var dWidth=login.offsetWidth;
		login.style.left=(sWidth-dWidth)/2+"px";		//设置居中 定义登陆框左边距离等于 （总宽-登陆框宽）/2
		login.style.top=(wHeight-dHeight)/2+"px";		//设置居中 定义登陆框上边距离等于 （总高-登陆框高）/2
		
		var oClose=document.getElementById("close");	//获取id=close
			zhezhao.onclick=oClose.onclick=function(){					//鼠标点击触发
					document.body.removeChild(zhezhao);		//删除body子节点的id为zhezhao的遮罩层
					document.body.removeChild(login);		//删除登录框
			}
}
function zhuce(){
var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
	var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
	var wHeight=document.documentElement.clientHeight;		//获取可是页面的高度-->
	

	var zhezhao=document.createElement("div");		//创建一个节点DIV -->
		zhezhao.id="zhezhao";						//给这个DIV一个ID-->
		zhezhao.style.height=sHeight+"px";			//设置高的长度-->
		zhezhao.style.width=sWidth+"px";			//设置宽的长度-->
		document.body.appendChild(zhezhao);			//将上面创建的元素加入到BODY的尾部-->
		
		var	zhuce=document.createElement("div");	//创建一个节点DIV -->
		zhuce.id="zhuce";							//给这个DIV一个ID-->	
			zhuce.innerHTML="	<div class=\"zhucek\">\
	<div class=\"logintop\">\
		<span>用户注册</span>\
		</div>\
		<div id=\"close\"></div>\
	</div>\
	<div class=\"zhucecont\" align=\"center\">\
	<form action=\"#\" method=\"post\" name=\"zhuce\">\
	<input name=\"user\" type=\"text\" value=\"登录账号(不可修改)\" maxlength=\"20\" onClick=\"this.value=''\" txt=><br><br><br><br><br><br>\
	<input name=\"pass\" type=\"text\" value=\"登录密码\" maxlength=\"20\" onClick=\"this.value=''\"><br><br><br><br><br><br>\
	<input name=\"name\" type=\"text\" value=\"昵称\" maxlength=\"20\" onClick=\"this.value=''\"><br><br><br><br><br><br>\
	<input name=\"emall\" type=\"text\" value=\"邮箱地址(找回密码)\" maxlength=\"20\" onClick=\"this.value=''\"><br><br><br><br><br><br>\
		<a href=\"#\" class=\"djzc\">已有账号点击这里登录</a>\
		<span><input type=\"submit\" name=\"zhecetj\" value=\"注册\"></span>\
	</form>\
</div>";
 //直接添加HTML代码-->
		document.body.appendChild(zhuce);			//将上面创建的元素加入到BODY的尾部
		//获取zhuce的宽度和高度
		var dHeight=zhuce.offsetHeight;
		var dWidth=zhuce.offsetWidth;
		zhuce.style.left=(sWidth-dWidth)/2+"px";		//设置居中 定义登陆框左边距离等于 （总宽-登陆框宽）/2
		zhuce.style.top=(wHeight-dHeight)/2+"px";		//设置居中 定义登陆框上边距离等于 （总高-登陆框高）/2
		
		var oClose=document.getElementById("close");	//获取id=close
			zhezhao.onclick=oClose.onclick=function(){					//鼠标点击触发
					document.body.removeChild(zhezhao);		//删除body子节点的id为zhezhao的遮罩层
					document.body.removeChild(zhuce);		//删除登录框
			}
}

function biaobaifb(){
var sHeight=document.documentElement.scrollHeight;		//获取页面的高的长度-->
	var sWidth=document.documentElement.scrollWidth;		//获取页面的宽的长度-->
	var wHeight=document.documentElement.clientHeight;		//获取可是页面的高度-->
	

	var zhezhao=document.createElement("div");		//创建一个节点DIV -->
		zhezhao.id="zhezhao";						//给这个DIV一个ID-->
		zhezhao.style.height=sHeight+"px";			//设置高的长度-->
		zhezhao.style.width=sWidth+"px";			//设置宽的长度-->
		document.body.appendChild(zhezhao);			//将上面创建的元素加入到BODY的尾部-->
		
		var	biaobai=document.createElement("div");	//创建一个节点DIV -->
		biaobai.id="biaobai";							//给这个DIV一个ID-->	
			biaobai.innerHTML="	<div class=\"biaobaifbk\">\
		<div class=\"logintop\">\
		<span>我要表白</span>\
		</div>\
		<div id=\"close\"></div>\
	</div>\
	<div class=\"biaobaicont\" align=\"center\">\
	<form action=\"biaobai.php\" method=\"post\" name=\"biaobai\">\
	<input name=\"dfname\" type=\"text\" value=\"\" placeholder=\"表白对象名称\" maxlength=\"20\" onClick=\"this.value=''\" txt=><br><br><br><br>\
	<input name=\"dfemall\" type=\"text\" value=\"\" placeholder=\"对方邮箱，系统自动邮箱通知(可不填)\" maxlength=\"20\" onClick=\"this.value=''\"><br><br><br><br>\
	<input name=\"name\" type=\"text\" value=\"\" placeholder=\"自己的名称\" maxlength=\"20\" onClick=\"this.value=''\"><br><br><br><br>\
	<input name=\"qq\" type=\"text\" value=\"\" placeholder=\"自己QQ号,自动获取头像（匿名可不填）\" maxlength=\"30\" onClick=\"this.value=''\"><br><br><br><br>\
	<textarea name=\"content\" value=\"\" placeholder=\"你想说的话\" onFocus=\"if(value==defaultValue){value='';}\" onBlur=\"if(!value){value=defaultValue;}\"></textarea>\
	<div class=\"fabutj\"><input type=\"submit\" name=\"biaobaifbtj\" value=\"发布\"></div>\
	</form>\
	</div>";
 //直接添加HTML代码-->
		document.body.appendChild(biaobai);			//将上面创建的元素加入到BODY的尾部
		//获取zhuce的宽度和高度
		var dHeight=biaobai.offsetHeight;
		var dWidth=biaobai.offsetWidth;
		biaobai.style.left=(sWidth-dWidth)/2+"px";		//设置居中 定义登陆框左边距离等于 （总宽-登陆框宽）/2
			//设置居中 定义登陆框上边距离等于 （总高-登陆框高）/2  
		//dHeight=2468 wHeight=2283
	
		var oClose=document.getElementById("close");	//获取id=close
			oClose.onclick=function(){					//鼠标点击触发
					document.body.removeChild(zhezhao);		//删除body子节点的id为zhezhao的遮罩层
					document.body.removeChild(biaobai);		//删除登录框
			}
}


