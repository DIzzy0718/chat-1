<?php 

							$sql="select * from liaotian order by time asc";
							@$ltsql=mysql_query($sql);
							
							while(@$ltsz=mysql_fetch_array($ltsql)){
							
								
								echo "<div id='lt-left'>";
								echo "<div class='lt-left-left'>";
								if (!isset($ltsz['touxiang']{4})) {
									echo "<img src='images/niming";
									echo $ltsz['touxiang'];
									echo ".png'>";
								}else{
									$tx=$ltsz['touxiang'];
									echo "<img src=";
									echo "'http://q2.qlogo.cn/headimg_dl?dst_uin=$tx&spec=5'>";
								}								
								echo "</div>";
								echo "<div class='lt-left-right'>";
								echo "<div class='lt-left-right-top'>";
								if($ltsz['vip']==0){
								echo "<span>";echo $ltsz['name'];echo "</span>";
								}else{
									echo "<span  style=\"color:red\">";echo $ltsz['name'];echo "</span>";
								}
								echo "<span>";echo $ltsz['time'];echo "</span>";
								echo "</div>";
								echo "<div class='lt-left-massage'>";
								echo "<span>";echo $ltsz['content'];echo "</span>";
								echo "</div>";		
								echo "</div>";
								echo "</div>";	
							
									
							}
							
							
							
							?>