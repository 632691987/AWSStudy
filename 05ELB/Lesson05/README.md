建立ALB，注册目标组
=================

## 知识点

* 建立ALB负载均衡器，注册目标组

## 实战演习

>看图说话

+ 建立负载均衡器安全组
+ 建立负载均衡器
+ 指定目标组
+ 确认ALB动作

## 操作步骤

### 建立负载均衡器安全组

+ Name
  - Vincent-alb-sg
+ PORT
  - 80
  - 443

### 建立负载均衡器 - ALB

+ Name
  - Vincent-ALB-WEB
+ 模式
  - 面向 internet
+ 侦听器
  - HTTP:80
+ 可用区
  - ap-northeast-1a
  - ap-northeast-1c
+ 安全组
  - SG-ALB
+ 目标组
  - TG-ALB-WEB-80

## 课程文件

+ 小马部落Discord专区共享

## 小马部落

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com
