/*
* @Author: Marte
* @Date:   2017-06-26 18:50:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-29 14:55:35
*/

'use strict';
/*可以用来创建一个HTTP服务器*/
var http = require('http');
/*创建一个服务*/
var server = http.createServer(function(request,response){
 var requestUrl = request.url;
 switch(requestUrl){
    case '/signin':
    // 请求登录页面
     signin(request,response);
     break;
    case '/post':
    // 提交表单
    post(request,response);
    break;
    default:
    response.writeHead(404{});
    response.end();
    break;
 }
});
// /*启动服务*/
// server.listen(8080,function(error){
//     console.log('成功监听8080端口')
// });

// function singnin(request,response){
//  console.log('请求登录页面')
//  response.end();
// }
// function post(request,response){
//  console.log('请求提交表单')
//  response.end();
// }