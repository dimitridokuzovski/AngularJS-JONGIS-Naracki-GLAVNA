angular.module("app.pages.login.services.login-service",[])
.factory("loginService",loginService)




function loginService (){
let clearService = function (user) {
    console.log("Cleaning password field");
    user.username = "";
}
return {
    clearService: clearService
};

}