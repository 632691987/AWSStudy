为Apache HTTP建立多个虚拟主机
===========================

## 知识点

* 为了充分利用EC2资源，在一台EC2上搭建多个WEB网站

## 实战演习

>看图说话

+ 网站设计
  - 8080:中文你好
  - 8081:英文Helo
  - 8082:日文こんにちは
+ 建立网站目录
+ 设置Apache HTTPD对应网站目录
+ 动作确认

## 操作步骤

### 确认安全组设置

+ SG-WEB
  - 80
  - 8080
  - 8081
  - 8082

### 建立网站目录

```bash
# 中文网站
$ mkdir /var/www/html_cn
$ echo "<h1 style='color:blue'>你好</h1>" > /var/www/html_cn/index.html
# 英文网站
$ mkdir /var/www/html_en
$ echo "<h1 style='color:green'>Hello</h1>" > /var/www/html_en/index.html
# 日文网站
$ mkdir /var/www/html_jp
$ echo "<h1 style='color:red'>こんにちは</h1>" > /var/www/html_jp/index.html
# 权限设置
$ sudo chown -R ec2-user:apache /var/www
```

### 建立网站配置文件

```bash
$ cd /etc/httpd/conf.d
# 中文网站
$ sudo nano myweb_cn.conf
...
<VirtualHost *:8080>
    DocumentRoot /var/www/html_cn
    ServerName alb.deeplearnaws.ml
    ErrorLog logs/myweb_cn.error_log
    CustomLog logs/myweb_cn.access_log common
</VirtualHost>
...
# 英文网站
$ sudo nano myweb_en.conf
...
<VirtualHost *:8081>
    DocumentRoot /var/www/html_en
    ServerName alb.deeplearnaws.ml
    ErrorLog logs/myweb_en.error_log
    CustomLog logs/myweb_en.access_log common
</VirtualHost>
...
# 日文网站
$ sudo nano myweb_jp.conf
...
<VirtualHost *:8082>
    DocumentRoot /var/www/html_jp
    ServerName alb.deeplearnaws.ml
    ErrorLog logs/myweb_jp.error_log
    CustomLog logs/myweb_jp.access_log common
</VirtualHost>
...

##################################################
# 设置虚拟主机侦听端口
$ sudo nano /etc/httpd/conf/httpd.conf
...
Listen 8080
Listen 8081
Listen 8082
...
# Apache HTTPD 语法检测
$ sudo httpd -S
$ sudo apachectl configtest
# 重新启动Apache HTTPD服务
$ sudo systemctl restart httpd.service
# 端口确认
$ nmap 127.0.0.1
```

## 课程文件

+ 小马部落Discord专区共享

## 小马部落

https://discord.gg/VSKw72P

## 小马视频频道

http://komavideo.com
