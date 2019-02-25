###### 1.下载SteamCMD

```
yum install glibc.i686 libstdc++.i686

useradd -m steam 
su - steam 

mkdir steamcmd
cd steamcmd

wget https://steamcdn-a.akamaihd.net/client/installer/steamc
md_linux.tar.gz

tar -zxvf steamcmd_linux.tar.gz

./steamcmd.sh
```
###### 2.Rust服务器文件
```
>steam login anonymous
>steam force_install_dir <PATH>
>steam app_update 258550 
```
###### 3.服务器开启脚本文件

```
#!/bin/sh
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:`dirname $0`/RustDedicated_Data/Plugins/x86_64
clear while : do
  exec ./RustDedicated -batchmode -nographics \
  -server.ip 0.0.0.0 \
  -server.port 28001 \
  -rcon.ip 0.0.0.0 \
  -rcon.port 28005 \
  -rcon.web 0 \
  -rcon.password "admin123" \
  -server.maxplayers 20 \
  -server.hostname "[DEV SERVER] SeBL4RD" \
  -server.identity "my_server_identity" \
  -server.level "Procedural Map" \
  -server.seed 12345 \
  -server.worldsize 3000 \
  -server.saveinterval 600 \
  -server.globalchat true \
  -server.tickrate 30 \
  -logfile log.txt \
  -server.description "Au boulot" \
  -server.headerimage "http://rustinpeace.fr/images/ACCUEIL-MINI.png" \
  -server.url "http://rustinpeace.fr/" echo "\nRestarting server...\n" done
```
###### 4.配置防火墙

```
firewall-cmd --zone=public --add-port=28001/udp --perments
firewall-cmd --zone=public --add-port=28005/tcp --perments
firewall-cmd --reload
```
