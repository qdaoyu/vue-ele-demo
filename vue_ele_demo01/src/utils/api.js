//拦截器
import axios from "axios";
import { Message } from "element-ui";
import router from '../router'
//响应拦截器
axios.interceptors.response.use(success=>{
    //业务逻辑错误
    if(success.status && success.status == 200){
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403){
            Message.error({Message:success.data.message});
            return ;
        }
        if (success.data.Message){
            Message.success({Message:success.data.message})
        }
    }
    return success.data
},error=>{
    if (error.response.code == 504 || error.response.code == 404){
        Message.error({Message:'服务器被吃了'})
    }else if(error.response.code == 403){
        Message.error({message:'权限不足，请联系管理员'})
    }else if(error.response.code == 401){
        Message.error({Message:'尚未登录！'});
        router.replace('/') //push也可以
        
    }else{
        if (error.response.data.message){
            Message.error({message:'未知错误！'});
        }
    }
    return ;
});


let base = "";
//传送json格式的post请求
export const postRequest = (url , params)=>{
    return axios({
        method : 'post',
        url:`${base}${url}`,
        data:params
    })
}