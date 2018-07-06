
<?php
require_once("./conn/conn.php");
require_once("./ip.php");
require_once("./time.php");
header("Content-Type: text/plain;charset=utf-8"); 
$cstime=$_POST['cstime'];
$xgtime=date('Y-m-d H:i:s',strtotime("$cstime -1 second"));
@$cooktime=$_COOKIE['cstime'];
						if(!empty($cooktime)){
							$sql="select * from liaotian where time >= '$cooktime' order by time asc";
									@$ltsql=mysql_query($sql);			
							while(@$ltsz=mysql_fetch_assoc($ltsql)){
								@$results[]= $ltsz;
							}
							@$jsonResult =  json_encode($results);
							
							if(@$jsonResult=="null"){
								
								
								echo "null";

							}else{
								echo @$jsonResult;
								setcookie("cstime");

							}
							
								
						}else{
							$sql="select * from liaotian where time = '$cstime' order by time asc";
										@$ltsql=mysql_query($sql);			
								while(@$ltsz=mysql_fetch_assoc($ltsql)){
								@$results[]= $ltsz;
									}
							@$jsonResult =  json_encode($results);
							
							if(@$jsonResult=="null"){
								
								setcookie("cstime","$cstime");
								echo "null";

							}else{
								echo @$jsonResult;
								setcookie("cstime");

							}
						}
							
					
							?>