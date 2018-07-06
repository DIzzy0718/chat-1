<?php 
require_once("./conn/conn.php");
require_once("./ip.php");
require_once("./time.php");
session_start();
$user=$_SESSION['user'];
if(empty($user)){
	header('Location:index.php');

	die;

}
?>
<?php
header("Content-Type: text/plain;charset=utf-8"); 
$ip=@$onlineip;
$name=$_POST["name"];
$age=$_POST["age"];
$email=$_POST["email"];
$school=$_POST["school"];
$xinbie=$_POST["xinbie"];
$tizhong=$_POST["tizhong"];
$shenggao=$_POST["shenggao"];
$phone=$_POST["phone"];

$xqq=floor(floatval($_POST["qq"]));
	

$qianming=$_POST["qianming"];
	$xgsql="update user set name ='$name',age='$age',email='$email',school='$school',xinbie='$xinbie',tizhong='$tizhong',shenggao='$shenggao',phone='$phone',qianming='$qianming',qq='$xqq' where username ='$user'";
	$zxsql=mysql_query($xgsql);
	if($zxsql){
			echo '{"success":true,"msg":"修改成功！"}';
			
	}else{
		echo '{"success":false,"msg":"修改失败"}';
	}


?>