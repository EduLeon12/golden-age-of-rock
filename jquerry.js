$("#about").click(function showIntro() {
    $("#intro").removeClass("invisible").addClass("visible py-8");
    $("#introA").addClass("container py-8 px-6 mx-auto");
    $("#introB").addClass("uppercase tracking-wide no-underline hover:no-underline font-bold text-white text-xl mb-8");
    $("#introC").addClass("mt-8 mb-8");
});

$("#viewCart").click(function openCart(){
    document.getElementById("myCart").style.width = "100%";
});

$("#closeCart").click(function closeCart() {
    document.getElementById("myCart").style.width = "0%";
});

$(":button").click(function showText(){
    $("#viewcartText").removeClass("invisible").addClass("visible");
});

$("#viewcartText").click(function openCart(){
    document.getElementById("myCart").style.width = "100%";
});

$("#loginbtn").click(function openLogin(){
    document.getElementById("login").style.width = "100%";
});

$("#closeLogin").click(function closeLogin() {
    document.getElementById("login").style.width = "0%";
});

$("#closeLogIn").click(function closeLogin() {
    document.getElementById("login").style.width = "0%";
});

$("#signUpBtn").click(function openSignUpForm(){
    document.getElementById("login").style.width = "0%"
    document.getElementById("signUpForm").style.height = "100%";
});




