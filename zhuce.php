<?php 
require_once("./conn/conn.php");
require_once("./ip.php");
require_once("./time.php");
?>
<?php
header("Content-Type: text/plain;charset=utf-8"); 
$ip=@$onlineip;
$user=$_POST["user"];
$email=$_POST["email"];
$pass=md5($_POST["pass"]);
$okpass=md5($_POST["okpass"]);
if (!isset($user) || empty($user)
	|| !isset($pass) || empty($pass)
	|| !isset($okpass) || empty($okpass)
	|| !isset($email) || empty($email)
   ){
		echo '{"success":false,"msg":"信息填写不完整"}';
		return;
	}else{
	if($pass==$okpass){
				@$qruser=mysql_query("select * from user where username='$user'");
				@$panduan=mysql_fetch_array($qruser);
			if(!empty($panduan['username'])){
				echo '{"success":false,"msg":"用户名已存在"}';
		}else{
		$zansql="insert into user(username,password,email,zcip,zctime) values('$user','$pass','$email','$ip','$time') ";
		if(mysql_query($zansql)){
					echo '{"success":true,"msg":"注册成功"}';
		}
			}

	}else{
		echo '{"success":false,"msg":"两次密码不一致"}';
	}
}