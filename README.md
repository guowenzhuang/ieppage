智慧教学平台前端页面
----------
目录结构        介绍                      

    bbs         论坛页面                  
    demo        demo页面 登录案列         
    exam        考试页面                  
    js          存放js文件  
    student     学生页面                 
    teacher     老师页面                   
    login.html   登录页                   
    README.md    项目介绍                

## 前端项目需要运行在nginx上
配置反向代理

    location /api {
                proxy_pass   http://127.0.0.1:8060;
            }
    location /oauth {
                proxy_pass   http://127.0.0.1:8060;
            }

## 启动项目之前
1. 下载nginx
2. 配置nginx反向代理(上面已介绍)
3. 从github上拉取项目  (使用github Desktop/WebStorm/HbuilderX)
4. 把项目放入到 nginx/html/ 文件内
## 启动项目:
1. 启动nginx
2. 访问login页面



