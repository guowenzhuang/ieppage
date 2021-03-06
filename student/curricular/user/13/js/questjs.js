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
            userId:'',
            userName:'',
            activeTabValue:'zt',
            //主题
            themeData:[],
            themeQuery:{
                page:1,
                rows:6,
                total:0
            },
            //回复
            replyData:[],
            replyQuery:{
                page:1,
                rows:6,
                total:0
            },
            //评价
            evaluationData:[],
            evaluationQuery:{
                page:1,
                rows:6,
                total:0
            },
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
        //查询主题
        queryTheme(){
            axios({
                method:'get',
                url:'/api/bbs/post/queryPostByUserId',
                params:{
                    userId:this.userId,
                    page:this.themeQuery.page,
                    rows:this.themeQuery.rows,
                }
            }).then(res=>{
                res=res.data;
                this.themeQuery.total=res.total;
                this.themeData=res.rows;
            })
        },
        //查询回复
        queryReply(){
            axios({
                method:'get',
                url:'/api/bbs/reply/queryReplyByUserId',
                params:{
                    userId:this.userId,
                    page:this.replyQuery.page,
                    rows:this.replyQuery.rows,
                }
            }).then(res=>{
                res=res.data;
                this.replyQuery.total=res.total;
                this.replyData=res.rows;
            })
        },
        //查询评价
        queryEvaluation(){
            axios({
                method:'get',
                url:'/api/student/comment/queryCommentBySid',
                params:{
                    sid:this.userId,
                    page:this.evaluationQuery.page,
                    size:this.evaluationQuery.rows,
                }
            }).then(res=>{
                res=res.data;
                this.evaluationQuery.total=res.total;
                this.evaluationData=res.rows;
            })
        },
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
        this.userName=sessionStorage.getItem("username");
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
        this.queryTheme();
        this.queryReply();
        this.queryEvaluation();

    }
}
let Component = Vue.extend(main);
let v=new Component().$mount('#app')