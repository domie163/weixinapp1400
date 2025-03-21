const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm04gz3/",
            name: "ssm04gz3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm04gz3/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "订餐系统设计小程序"
        } 
    }
}
export default base
