建立目标组，注册EC2实例
====================

## 知识点

* 为负载均衡器建立目标组
* 将ec2实例分配给目标组

## 实战演习

>看图说话

## 操作步骤

### 建立目标组

+ 基于EC2实例
+ Name
  - TG-ALB-WEB-80
+ HTTP
  - 80
+ VPC
  - komavideo-vpc
+ 协议版本
  - HTTP1
+ 运行状况检查
  - HTTP /
+ 注册目标
  - ec2-for-alb-01
  - ec2-for-alb-02
+ 粘性
  - 负载均衡器生成的 Cookie

## 课程文件

+ 小马部落Discord专区共享

## 小马部落

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com
