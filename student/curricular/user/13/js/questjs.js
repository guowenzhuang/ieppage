axios.defaults.headers.common['Authorization'] = "bearer " + sessionStorage.getItem("access_token");
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
let main={
    data(){
        return{
            //当前登录的学生
            active:{
                //头像:url
                photo:'../../img/user/portrait.jpg',
                loginName:''
            },
            activeTabValue:''
        }
    },
    methods:{

    },
    mounted(){
        //查询学生信息
        let id=sessionStorage.getItem("userid");
        axios({
            method:'get',
            url:'/api/student/stu/'+id
        }).then(res=>{
            res=res.data.message;
            this.active.loginName=res.loginName;
            if(res.photo!=null && res.photo!=''){
                this.active.photo=res.photo
            }
        })


    }
}
let Component = Vue.extend(main);
let v=new Component().$mount('#app')