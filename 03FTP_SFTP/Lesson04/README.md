添加 SFTP 用户
=============

## 实战演习/说明讲解

+ 建立 RSA 密钥对
+ 建立 S3 存储桶
+ 建立 SFTP 用户

## 参考网站

https://docs.aws.amazon.com/zh_cn/transfer/latest/userguide/key-management.html

## 操作步骤

### 建立 RSA 密钥对

```bash
# 声称密钥对(MacOS、Linux 或 UNIX)
$ ssh-keygen -P "" -m PEM -f deeplearnaws-sftp-key
# 查看公钥
$ cat deeplearnaws-sftp-key.pub
# 查看私钥
$ cat deeplearnaws-sftp-key
```

### 建立 S3 存储桶

+ Name
  - deeplearnaws-sftp-s3-files

### 建立 SFTP 用户

+ 用户名
  - lcadmin
+ 角色
  - deeplearnaws-sftp-s3-fullaccess-role
+ SSH 公钥
  - _上面发行的公钥_
+ 标签
  - Name: lcadmin

## 小马部落

https://discord.gg/VSKw72P

## 课程文件

+ 小马部落Discord专区共享(三级会员)

## 小马视频频道

https://komavideo.com

## 深学AWS

https://deeplearnaws.com
