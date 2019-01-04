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
            courData:[],
            query:{
                page:1,
                rows:6
            },
            total:0,
            userId:'',
            isShow: true,
            isCenter: false,
            userPhoto: '',
        }
    },
    methods:{
        tuichu: function() {
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = "http://127.0.0.1/login.html";
        },
        shezhi:function(){
            window.location.href = "/student/curricular/user/13/personal.html";
        },
        login: function() {
            window.location.href = "http://127.0.0.1/login.html";
        },
      queryKc(){
          //查询课程
          axios({
              method:'get',
              url:'/api/student/studentrecord/'+this.userId,
              params:{
                  page:this.query.page,
                  rows:this.query.rows
              }
          }).then(res=>{
              res=res.data;
              for (let i = 0; i < res.rows.length; i++) {
                  let o=res.rows[i];
                  if(o.courPicurl==null || o.courPicurl==''){
                      o.courPicurl="../image/zwtp.jpg";
                  }else{

                  }
                  this.courData.push(o)
              }
              this.total=res.total;
          })
      }
    },
    mounted(){

        var roleNames = sessionStorage.getItem("roleNames");
        console.log(roleNames);
        if (roleNames != null && roleNames == ("学生")) {
            this.isShow = false;
            this.isCenter = true;
            this.userPhoto = sessionStorage.getItem("userPhoto");
        }


        //查询学生信息
        let id=sessionStorage.getItem("userid");
        this.userId=id;
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
        this.queryKc();


    }
}
let Component = Vue.extend(main);
let v=new Component().$mount('#app')