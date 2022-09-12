let proxyObj = {}
proxyObj['/'] = {
    //websocket
    ws:ture,
    //目标地址
    target:'http://localhost:8081',
    //发送请求host会被设置target
    changeOrigin:true,
    //避免重写路径
    pathRewrite:{
        '^/':'/'
    }
}



module.exports = {
    devServer:{
        host:'localhost',
        port:8083,
        poxy:proxyObj
    }    
}
// module.exports = {
//     // pabulicPath:process.env.NODE_ENV === 'production' ? '' : '',
//     devServer:{
//         host:'0.0.0.0',
//         port:'8083',
//         // https:false,
//         open:true,
//         //以上的ip和端口是我们本机的;下面为需要跨域的
//         proxy:{ //配置跨域
//             '/api':{
//                 target:'http://localhost:8081/',
//                 ws:true,
//                 changeOrigin:true,//允许跨域
//                 pathRewrite:{
//                     '^/api':''   //请求的时候使用这个api就可以
//                 }
//             }
//         }
//     }
// }