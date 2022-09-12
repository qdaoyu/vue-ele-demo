<template>
    <div>
        <el-form ref="loginForm" :rules="rules" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换二维码"
                    style="width:250px;margin-right:5px"></el-input>
                <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>
            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            captchaUrl: "/captcha?time=" + new Date(),
            loginForm: {
                username: "qiudaoyu",
                password: "123",
                code: ""
            },
            checked: true,
            rules: {
                username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
                password: [{ required: true, message: "请输入密码", trigger: 'blur' }],
                code: [{ required: true, message: "请输入验证码", trigger: 'blur' }],
            }
        }
    },
    methods: {
        submitLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$message.success("登录成功");
                } else {
                    this.$message.error("请输入所有字段!");
                    return false;
                }
            });
        },
        updateCaptcha(){
            this.captchaUrl = '/captcha?time' + new Date();
        }

    }
}

</script>
  
<style scoped>
.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: rgb(255, 255, 255);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cacac6;
    text-align: left;
}

.loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
}

.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}
</style>
  