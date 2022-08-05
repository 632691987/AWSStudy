在目标组中添加新的EC2实例
=====================

## 知识点

* 在目标组中添加新的EC2实例，分散整体的网络负载

## 实战演习

>看图说话

+ 启动一台新的EC2
+ 将EC2注册到目标组
+ 确认动作

## 操作步骤

### 启动一台新的EC2

+ Name
  - ec2-for-alb-03
    * komavideo-web-1a

*用户数据*

```bash
#!/bin/bash
yum update -y
yum install -y httpd
yum install -y nmap
systemctl start httpd
systemctl enable httpd
usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
cd /var/www/html
# 根据EC2实例改写现实内容
echo "<h1 style='color:red'>你好，AWS EC2-03.</h1>" > index.html
touch /home/ec2-user/.hushlogin
chown -R ec2-user:ec2-user /home/ec2-user/.hushlogin
```

## 课程文件

+ 小马部落Discord专区共享

## 小马部落

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com
