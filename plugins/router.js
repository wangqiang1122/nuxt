export default ({ app }) => {
    app.router.beforeEach((to,from,next)=>{
        console.log('全局组件进入校验'+to.path)
        next();
    })
}