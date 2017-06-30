/*
* @Author: Marte
* @Date:   2017-06-25 20:54:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-29 14:26:06
*/

'use strict';
/*可以用来创建一个HTTP服务器*/
var http = require('http');
/*创建一个服务*/
var server = http.createServer(function(request,response){
    console.log(request.url);
    /*处理请求和响应*/
response.writeHead(200,{
    'Content-Type':'text/html',//告诉客户端我给你的额是HTML
    'key1':'value1'
});
/*往响应体中放数据(只能是字符)*/
response.write('<h1>HAHAHA</h1>');
response.end();/*结束了*/
});
/*启动服务*/
server.listen(8080,function(error){
    console.log('成功监听8080端口')
})



/*此处代码为gulpfile里面的*/

// 此处代码都是由node执行
// 载入gulp模块
 var gulp = require('gulp');
 var less = require('gulp-less');
 //注册一个任务
  gulp.task('copy',function(){
  // 当gulp 执行这个say任务是会自动执行该函数
console .log('hello world');

//合并 压缩 之类的操作
// 复制文件
      gulp.src('src/index.html').pipe(gulp.dest('dist/'))//将此处需要操作传递进去

    });
    gulp.task('dist',function(){
    // gulp.watch('src/index.html',['copy']);
     gulp.watch('styles/*.less',['style']);
    });

    var cssnano = require('gulp-cssnano');
    gulp.task('style',function(){
      gulp.src('styles/*.less')
      .pipe(less())
      .pipe(cssnano())
      .pipe(gulp.dest('dist/css/'));
   });

var browserSync = require('browser-sync').create();


gulp.task('serve', function() {

    browserSync.init({
        server:{
            baseDir:"./"
        }
    });
});

