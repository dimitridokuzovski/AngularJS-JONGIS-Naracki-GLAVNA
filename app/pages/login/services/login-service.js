angular.module("app.pages.login.services.login-service",[])
.factory("loginService",loginService)




function loginService (){
let clearService = function (user) {
    console.log("Чистење на полето за код");
    user.username = "";
}
return {
    clearService: clearService
};

}