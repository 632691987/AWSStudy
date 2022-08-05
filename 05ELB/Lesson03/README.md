建立EC2
=======

## 知识点

* 建立EC2实例

## 实战演习

+ 建立安全组
+ 启动EC2实例，配置WEB服务器

>看图说话

## 操作步骤

+ 建立安全组
  - SG-WEB
    * 80
    * 8080
    * 8081
    * 8082
    * 22 (生产环境不用)
  - 源
    * 0.0.0.0/0
    * 生产环境时要配成ALB安全组
+ 启动*2*个EC2实例，安装Web服务器
  + Apache Httpd
    * 80
    * 其他虚拟主机后面课程配置
  + Name
    - ec2-for-alb-01
      * komavideo-web-1a
    - ec2-for-alb-02
      * komavideo-web-1c

## 用户数据

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
echo "<h1 style='color:green'>你好，AWS EC2-02.</h1>" > index.html
touch /home/ec2-user/.hushlogin
chown -R ec2-user:ec2-user /home/ec2-user/.hushlogin
```

## SSH登陆脚本

```bash
$ ssh -i ./deeplearnaws-ssh-key.pem ec2-user@ip
```

## 课程文件

+ 小马部落Discord专区共享

## 小马部落

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com
