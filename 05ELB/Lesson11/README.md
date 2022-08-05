建立新的目标组，更新ALB侦听
=======================

## 知识点

* 为虚拟主机建立目标组
* 更新ALB修改目标组

## 实战演习

>看图说话

+ 建立8080目标组，监听EC2-8080端口
  - Name: TG-ALB-WEB-CN
+ 更新ALB侦听80，转发到TG-ALB-WEB-CN
+ 动作确认
+ 建立其他目标组
  - 监听EC2-8081端口
    * Name: TG-ALB-WEB-EN
  - 监听EC2-8082端口
    * Name: TG-ALB-WEB-JP

## 课程文件

+ 小马部落Discord专区共享

## 小马部落

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com
