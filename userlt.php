<?php require_once("./conn/conn.php");
require_once("./ip.php");
require_once("./time.php");
session_start();
@$user=$_SESSION['user'];	
$hqsql="select * from user where username='$user'";
@$hquser=mysql_query($hqsql);
@$hquserz=mysql_fetch_array($hquser);
$qq=$hquserz['qq'];
@$xname=$hquserz['name'];
@$vip=$hquserz['vip'];




?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link href="style/reset.css" rel="stylesheet" />
<link href="style/user.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>匿名聊天室</title>
</head>

<body onload="bgsz();hqsj(<?php if(@$user || @$xnmae){echo "'$xname'";}else{echo "'$user'";}?>)">
	<div class="box" name="box">
			<div class="head">
					<div class="left">
							<img src="images/icon/xin.png">
						<a href="./index.php"><span>聊天室</span></a>
					</div>
					<div class="right">
						<img src="images/icon/account.png" id="head-right"
							 <?php
										
											if(!empty($user)){
											echo "onClick='dis()'";
											}else{
												echo "onClick='read2()'";
											}
							 
							 
							 	
											?>
							 
					</div>
			</div>
		</div>
				<div id="lt-bg" >
					<div id="lt-xianzhi" >
						<div class="lt-top" align="center">
							<span>匿名聊天室</span>
						</div>
						<div id="lt-neirong">
							<?php require_once("./xsneirong.php"); ?>
						
							
			
						</div>
						
						<div class="lt-bottom">
							<textarea placeholder="我要说几句" maxlength="255" id="js-lt-neirong"></textarea>
							<div class="lt-tj">
								
								<?php if(@$user){ 
											
												}else{
											echo '<input type="submit" value="改名" onClick="nmlttj()" >';					
								}?>
							
								<input type="submit" id="js-xxfs" style="cursor: pointer;" value="发送" <?php
									@$name=$_SESSION["name"];
									
									   if($user){
										  if($xname){
											  if($qq){
											  echo "onClick='lttj($qq,\"$xname\")'";
												  }else{
												   echo "onClick='lttj(\"\",\"$xname\")'";
											  }
										  }else{
											  if($qq){
												  echo "onClick='lttj($qq,$user)'";
											  }else{
												  echo "onClick='lttj(\"\",\"$user\")'";
											  }
											  
										  }
										   
										   
										   
										   
									   }else{
										   if(@$name){
											   echo 'onClick="lttjno(\''.$name.'\')"';
										   }else{
										   echo "onClick=\"lttjno('匿名')\"";
											   }
									   }?>
									   >
							</div>
						</div>
					</div>
				</div>

	
	
		<?php 
			
		
			if(!empty($user)){
			
						
				echo "<div id='bl-zhezhao' style='display:none'></div>";
				echo "<div id='daohangtiao' style='display:none'>";
				echo "<div class='dht-bg'>";
				echo "<div class='dht-touxiang' align='center'><img src='";
					if(!empty($hquserz['qq'])){
				echo "http://q2.qlogo.cn/headimg_dl?dst_uin=";
				echo $hquserz['qq'];
				echo "&spec=5";
						}else{
						$sjtx=rand(1,5);
						echo "./images/niming";
						echo $sjtx;
						echo ".png";
					}
				echo "'></div>";
				echo "<div class='dht-name' align='center'><span>";
				echo $hquserz['username'];
				echo "</span>";
				if($hquserz['xinbie']==0){}elseif($hquserz['xinbie']==1){
				echo "<img src='images/icon/nan.png'>";
				}else{
					echo "<img src='images/icon/nv.png'>";
				}
				echo "</div>";	
				echo "</div>";
				echo "<div class='dht-xinxi'>";
				echo "<span>基本资料</span>";
				echo "<div class='dht-cx-content'>";
				echo "<div class='dht-cx-left'>";
				echo "<img src='";
			
				echo "images/icon/qq.png'>";
				echo "<span> QQ:</span>";
				echo "</div>";
				echo "<div class='dht-cx-right'>";
				echo "<span>";
				echo $hquserz['qq'];
				echo "</span>";
				echo "</div>";
				echo "</div>";
				echo "<div class='dht-cx-content'>";
				echo "<div class='dht-cx-left'>";
				echo "<img src='images/icon/lianxi.png'>";
				echo "<span>手机:</span>";
				echo "</div>";
				echo "<div class='dht-cx-right'>";
				echo "<span>";
				echo $hquserz['phone'];
				echo "</span>";
				echo "</div>";	
				echo "</div>";
				echo "<div class='dht-cx-content'>";
				echo "<div class='dht-cx-left'>";
				echo "<img src='images/icon/email1.png'>";
				echo "<span>邮箱:</span>";
				echo "</div>";
				echo "<div class='dht-cx-right'>";
				echo "<span>";
				echo $hquserz['email'];
				echo "</span>";
				echo "</div>";
				echo "</div>";
				echo "<div class='dht-input-dibu' align='center'>";
				echo "<input type='button' value='修改资料' onclick='xgzl()'>";
				echo "<input type='button' value='退出登录' onclick='zxcx()'>";
				echo "</div>";
				echo "</div>";
	}
	?>
	</div>

	
	
	
	<div id="ts-zhezhao" style="display: none">
		<div class="cxtsk">
			<div class="cxtsk-top"></div>
			<div class="cxtsk-buttom"></div>
		</div>
	
	</div>
	
	
	
	<div id="lt-zhezhao" style="display:none">
	<div id="lt-niming">
			<div class="lt-nm-top" align="center">
				<span>提示</span>
			</div>
			<div class="lt-nm-bottom">
				<span>输入你的名字(可不填)</span>
				<input type="test" id="js-nm-name">
				<div class="lt-nm-bottom-left" align="center" onClick="ltnameqx()">
					<span>取消</span>
				</div>
				<div class="lt-nm-bottom-right" align="center" onClick="ltnametj()">
					<span>确定</span>
				</div>
			</div>
		</div>
</div>
	
	
</body>
	<script type="text/JavaScript" src="js/tck.js">
		

	</script>
</html>