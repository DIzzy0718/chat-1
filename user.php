<?php require_once("./conn/conn.php");
require_once("./ip.php");
session_start();
if(empty($_SESSION['user'])){
	echo "<script>	window.location.href='./index.php';</script>";
}
$qq=$_SESSION['qq'];

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link href="style/reset.css" rel="stylesheet" />
<link href="style/user.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>个人中心</title>
</head>

<body>
	<div class="box">
			<div class="head">
					<div class="left">
							<img src="images/icon/xin.png">
						<a href="./index.php"><span>校园表白墙</span></a>
					</div>
					<div class="right">
						<img src="images/icon/account.png" id="head-right"
							 <?php
											@$user=$_SESSION['user'];
											if(!empty($user)){
											echo "onClick='dis()'";
											}else{
												echo "onClick='read()'";
											}
											?>
							 >
					</div>
			
			</div>
<?php 
			@$user=$_SESSION['user'];
			$hqsql="select * from user where username='$user'";
			@$hquser=mysql_query($hqsql);
			@$hquserz=mysql_fetch_array($hquser);
?>
			<div class="content" align="center" >
				
				<div class="content-top" align="center">
					
					<img src="<?php if(!empty($qq)){ echo "http://q2.qlogo.cn/headimg_dl?dst_uin=$qq&spec=5";}else{echo "./images/niming1.png";}?>">
				<span><?php echo $user ?></span>
						
				</div>
				<div class="myself">
						<div class="my-xinxi" style="display:block" id="js-xinxi">
							<div class="my-dingwei">
								<div class="my-name">
									<img src="images/icon/name1.png">
									<span>名字:</span>
									<input type="text" id="my-name" value="<?php echo @$hquserz['name'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/xinbie.png">
									<span>性别:</span>
									<select id="my-sex">
										<?php
										if($hquserz['xinbie']==1){
											  echo "<option value='1'>男</option>";
											  echo "<option value='2'>女</option>";
											}elseif($hquserz['xinbie']==2){
												echo "<option value='2'>女</option>";
												echo "<option value='1'>男</option>";
										}else{
												  echo "<option value='0'></option>";
												  echo "<option value='1'>男</option>";
												  echo "<option value='2'>女</option>";
										}
										   ?>
									</select>
								</div>
								<div class="my-name">
									<img src="images/icon/age1.png">
									<span>年龄:</span>
									<input type="text" id="my-age" value="<?php echo $hquserz['age'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/shengao.png">
									<span>身高:</span>
									<input type="text" id="my-shengao" value="<?php echo $hquserz['shenggao'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/tizhong.png">
									<span>体重:</span>
									<input type="text" id="my-tizhong" value="<?php echo $hquserz['tizhong'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/xuanyan1.png">
									<span>宣言:</span>
									<input type="text" id="my-qianming" value="<?php echo $hquserz['qianming'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/qq1.png">
									<span>QQ号:</span>
									<input type="text" id="my-qq" value="<?php echo $hquserz['qq'];?>" maxlength="11">
								</div>
								<div class="my-name">
									<img src="images/icon/phone.png">
									<span>手机:</span>
									<input type="text" id="my-phone" value="<?php echo $hquserz['phone'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/email.png">
									<span>邮箱:</span>
									<input type="text" id="my-email" value="<?php echo $hquserz['email'];?>">
								</div>
								<div class="my-name">
									<img src="images/icon/school1.png">
									<span>学校:</span>
									<input type="text" id="my-school" value="<?php echo $hquserz['school'];?>">
								</div>
								<div class="my-tj">
									<input type="submit" value="修改密码" id="xgmm" onClick="xgmm()">
									<input type="submit" id="my-tj" value="保存" onClick="xgzltj()">
								</div>
							</div>
						</div>
					<div class="my-xinxi" style="display: none" id="js-xgmm">
							<div class="my-dingwei">
						<div class="my-name">
							<img src="images/icon/pass.png">
							<span>旧密码:</span>
							<input type="text" id="my-pass">
						</div>
						<div class="my-name">
							<img src="images/icon/pass.png">
							<span>新密码:</span>
							<input type="text" id="my-newpass" >
						</div>
						<div class="my-name">
							<img src="images/icon/pass.png">
							<span>确认新密码:</span>
							<input type="text" id="my-okpass">
						</div>
						<div class="my-tj">
									<input type="submit" value="返回修改资料" onClick="xgzl()">
									<input type="submit" id="my-passtj" value="确认密码" onClick="xgpasstj()">
								</div>		
				</div>
					</div>
					
				
			</div>
	
	
	</div>
		<div style="width:1000px; margin: 0 auto;">
		<div class="float-fh" align="center" onclick="jrlts()"><p>进入聊天室</p></div>
			<div>
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
						echo "./images/niming1.png";
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

	
	
	
</body>
	<script type="text/JavaScript" src="js/tck.js"></script>
</html>