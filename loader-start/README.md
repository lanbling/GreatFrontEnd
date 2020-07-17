# 执行步骤



## 安装依赖（额外加了几个loader和plugin）

```bash
npm install
```



## 本地开启服务运行，在3000端口

```bash
npm run dev
```

浏览器访问

```
http://localhost:3000
```



## 打包文件

```bash
npm run build
```



## 未解决问题

![image-20200717174629904](http://image.lanbling.com/md/image-20200717174629904.png)

当图片使用了url-loader之后，如何把他们输入到指定的文件夹，像file-loader那样指定outputPath?



## 注意事项

安装太慢，可以使用淘宝镜像

- 设置淘宝镜像

  ```bash
  npm config set registry https://registry.npm.taobao.org
  ```

- 查看是否成功

  ```bash
  npm config get registry
  ```

- 移除淘宝镜像

  ```bash
  npm config set registry https://registry.npmjs.org
  ```

