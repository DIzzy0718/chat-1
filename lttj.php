<?php 
require_once("./conn/conn.php");
require_once("./ip.php");
require_once("./time.php");
session_start();
?>
<?php
header("Content-Type: text/plain;charset=utf-8"); 
$ip=@$onlineip;
@$neirong=$_POST["neirong"];
@$name=$_POST["name"];
@$user=$_SESSION['user'];
@$xname=$_POST['xname'];
@$xtime=date('Y-m-d H:i:s',strtotime("-3 second"));
$b=rand(1,5);
@$qq=$_POST["qq"];
if(empty($_SESSION["touxiang"])){
	@$_SESSION["touxiang"]=$b;
	@$c=$_SESSION["touxiang"];
}else{
	@$c=$_SESSION["touxiang"];
}







if (!isset($neirong) || empty($neirong)){
		echo '{"success":false,"msg":"参数错误，参数不完全"}';
		return;
	}else{
	if($user){
		if(!empty($xname)){
			if($qq){
			$sql="insert into liaotian(name,time,content,ip,vip,touxiang) values('$xname','$time','$neirong','$ip','1','$qq')";
			
			}else{
				$sql="insert into liaotian(name,time,content,ip,vip,touxiang) values('$xname','$time','$neirong','$ip','1','$c')";
			}
		}else{
			if($qq){
					$sql="insert into liaotian(name,time,content,ip,vip,touxiang) values('$user','$time','$neirong','$ip','1','$qq')";
				}else{
				$sql="insert into liaotian(name,time,content,ip,vip,touxiang) values('$user','$time','$neirong','$ip','1','$c')";
			}
		}
		$zxsql=mysql_query($sql);
		if($zxsql){
			if($xname){
				echo '{"success":true,"msg":"发布成功！","name":"'.$xname.'","time":"'.$time.'","neirong":"'.$neirong.'"}';
			}else{
				echo '{"success":true,"msg":"发布成功！","name":"'.$user.'","time":"'.$time.'","neirong":"'.$neirong.'"}';
			}
	}else{
			echo '{"success":false,"msg":"发布失败"}';
	}
		
		
	}elseif($name){
		$sql="insert into liaotian(name,time,content,ip,touxiang) values('$name','$time','$neirong','$ip','$c')";
		$zxsql=mysql_query($sql);
		echo '{"success":true,"msg":"发布成功！","name":"'.$name.'","time":"'.$time.'","neirong":"'.$neirong.'","touxiang":"'.$c.'"}';
	}
	
	
}

?>