const base = {
    get() {
        return {
            url : "http://localhost:8080/phpvd1h4/",
            name: "phpvd1h4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpvd1h4/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小程序校园跑腿"
        } 
    }
}
export default base
