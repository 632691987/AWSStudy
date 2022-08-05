建立EC2实例 - 开启我们的云端服务器之旅
=================================

## 知识点

* 建立一个公网可访问的EC2服务器实例

## 实战演习

### EC2实例具体设置

+ Amazon Linux 2 AMI
+ t2.micro
+ vincentstudy-vpc
+ vincentstudy-web-1a
+ 自动分配公有 IP
+ 内网IP: 172.16.10.10/32
+ Name: vincentstudy-web1
+ 密钥对: vincentstudy

### SSH连接

```bash
$ cp ~/Downloads/vincentstudy.pem ./
$ chmod 400 vincentstudy.pem
# Amazon Linux 2
$ ssh -o IdentitiesOnly=yes -i "vincentstudy.pem" ec2-user@18.135.100.77
ssh -i "vincentstudy.pem" ec2-user@172.16.20.10
>
```

## 小马部落(Discord)

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com

## 课程文件

https://github.com/komavideo/LearnAWS
