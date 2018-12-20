var main = new Vue({

    el: "#gao",

    data: {
        form: "",
        sites: [
            {
                index: 1,
                score: 3,
                form: "A",
                rubric: '在HTML中插入JavaScript脚本片段,一般使用标记<!-- -->',
                answerA: "Spring ./......",
                answerB: "Spring ./......",
                answerC: "Spring ./......",
                answerD: "Spring ./......",
            },
            {
                index: 2,
                score: 1,
                form: "C",
                rubric: '在HTML中插入JavaScript脚本片段,一般使用标记<!-- -->',
                answerA: "Spring ./......",
                answerB: "Spring ./......",
                answerC: "Spring ./......",
                answerD: "Spring ./......",
            },
            {
                index: 3,
                score: 1,
                form: "B",
                rubric: '在HTML中插入JavaScript脚本片段,一般使用标记<!-- -->',
                answerA: "Spring ./......",
                answerB: "Spring ./......",
                answerC: "Spring ./......",
                answerD: "Spring ./......",
            },
        ],

    },

    methods: {
        query() {


            axios({
                method: 'post',
                url: '/api/exam//',
                params: {
                    teaId: userid,
                },

            }).then(res => {
                res = res.data;
                this.options3 = res.message;

            })
        },

    },


})





