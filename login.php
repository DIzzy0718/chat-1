<?php 
require_once("./conn/conn.php");
require_once("./ip.php");
require_once("./time.php");
session_start();
?>
<?php
header("Content-Type: text/plain;charset=utf-8"); 
$ip=@$onlineip;
@$user=$_POST["user"];
@$pass=md5($_POST["pass"]);
if (!isset($user) || empty($user)
   	|| !isset($pass) || empty($pass)
   ){
	
		echo '{"success":false,"msg":"账号密码填写不完全"}';
		return;
	}else{
	$cxpassword="select * from user where username='$user' and password='$pass'";
	@$cx=mysql_query($cxpassword);
	@$row=mysql_fetch_array($cx);
	$yonghu=$row['username'];
	if($yonghu){
		
		$cripsql="update user set dlip='$ip',dltime='$time' where username = '$yonghu'";
			mysql_query($cripsql);
		 $_SESSION['user']=$row['username'];
		$_SESSION['qq']=$row['qq'];
		echo '{"success":true,"msg":"登录成功"}';
	}else{
		echo '{"success":false,"msg":"账号或者密码错误"}';
	};
	
}