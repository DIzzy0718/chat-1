
<table width="1242" height="2208" border="0" align="center" cellpadding="0" cellspacing="0" background="images/bg.jpg" id="__01">
	<tr>
		<td width="1242" height="150" >
			<div class="touming">
		<div class="head-left">
			<img src="images/icon/xin.png">
			<a href="./index.php" >校园表白墙</a>
		</div>
		<!-- 	<div class="top_right">
				<span>欢迎来到本网站</span>
			 <a  id="btnlogin">登录</a>  
			<a  id="btnzhuce">注册</a>	
				</div>-->
				<div class="top-right"><img src="images/icon/account.png" id="head-right" 
											<?php
											@$user=$_SESSION['user'];
											if(!empty($user)){
											echo "onClick='dis()'";
											}else{
												echo "onClick='read()'";
											}
											?>
											<span id="panduan" style="display:block"></span></div>
			</div>	  
			</td>
	</tr>
	<tr>
		<td>
			<img src="images/bt.png" width="1242" height="400" alt=""></td>
	</tr>
	