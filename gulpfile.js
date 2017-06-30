/**
 * gulp 主文件，用于注册任务
* @Author: Marte
* @Date:   2017-06-27 09:07:28
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-29 15:39:43
*/

'use strict';
//1.less编译 压缩 合并
//2.js 合并压缩 混淆
//3.img复制
//4.HTML压缩
//


 //在gulpfile中先载入gulp包，因为这个包提供了一些API
 var gulp = require('gulp');
 var less = require('gulp-less');
 var cssnano = require('gulp-cssnano');
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
  var htmlmin = require('gulp-htmlmin');
//1.less编译 压缩 合并

gulp.task('style',function(){
  // 这里是在执行style任务时
 gulp.src('src/*.less')
 .pipe(less())
 .pipe(cssnano())
 .pipe(gulp.dest('dist/css'));
});


//2.js 合并压缩 混淆
 gulp.task('script',function(){
 gulp.src('src/*.js')
 .pipe(concat('all.js'))
 .pipe(uglify())
 .pipe(gulp.dest('dist/script'));
 });

 // 图片复制
  gulp.task('image',function(){
    gulp.src('images/*.*')
    .pipe(gulp.dest('dist/images'))
  });

  // html的处理
  gulp.task('html',function(){
    gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComment:true}))
    .pipe(gulp.dest('dist'))
  })