//$(item).hide(300);
function permissionshow() {
    $("[permissionValue]").each((index,item)=>{
        let permissionValue=$(item).attr('permissionValue');
        axios({
            meethod:'get',
            url:'/api/admin/permission/judgePermission',
            params:{
                value:permissionValue
            }
        }).then(res=>{
            if(res.data.success==false){
                $(item).hide(500);
            }
        })
    })
}