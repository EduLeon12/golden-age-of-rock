$("#about").click(function showIntro() {
    $("#intro").removeClass("invisible").addClass("visible py-8");
    $("#introA").addClass("container py-8 px-6 mx-auto");
    $("#introB").addClass("uppercase tracking-wide no-underline hover:no-underline font-bold text-white text-xl mb-8");
    $("#introC").addClass("mt-8 mb-8");
});
$("#viewCart").click(function openCart(){
    document.getElementById("myCart").style.width = "50%";
});
$("#closeCart").click(function closeCart() {
    document.getElementById("myCart").style.width = "0%";
});
$(":button").click(function showText(){
    $("#viewcartText").removeClass("invisible").addClass("visible");
});
$("#viewcartText").click(function openCart(){
    document.getElementById("myCart").style.width = "50%";
});
$("#loginbtn").click(function openLogin(){
    document.getElementById("login").style.width = "100%";
});
$("#closeLogin").click(function closeLogin() {
    document.getElementById("login").style.width = "0%";
});
$("#signUpBtn").click(function openSignUpForm(){
    document.getElementById("login").style.width = "0%"
    document.getElementById("signUpForm").style.height = "100%";
});
$("#closeSignup").click(function closeSignUp(){
    document.getElementById("signUpForm").style.height = "0%";
});
$("#checkout").click(function openCheckout(){
    document.getElementById("checkoutForm").style.width= "100%";
    document.getElementById("myCart").style.width = "0%"; 
});
$("#confirmPurchase").click(function closeCheckout(){
    document.getElementById("checkoutForm").style.height= "0%";
});
$("#createAccount").click(function createAcount() { 
        const fullName = $("#fullName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        const subscription = "false";
        if ($("#subscription").is(":checked")){
           const subscription = "true";
        }   
         if (password === confirmPassword && fullName != "" && email != "" && password != "" && confirmPassword != "" ){
            const accounData = {
                nameAcc: fullName,
                emailAcc: email,
                passwordAcc: password,
                isSubscribed: subscription
            }           
            localStorage.setItem('account', JSON.stringify(accounData));   
            document.getElementById("signUpForm").style.height = "0%";  
            document.getElementById("accCreationSucc").style.width = "100%";  
            $("#nameofUser").html(accounData.nameAcc);   
            $("#userName").removeClass("invisible");
            $("#userName").html(accounData.nameAcc);           
        } else {
            $("#passwordMatch").removeClass("invisible");   
    }    
});
$("#logIntoAcc").on("click", () =>{
  let checkAcc = JSON.parse(localStorage.getItem("account"));
  const emailLogAttempt = $("#emailLogin").val();
  const passLogin = $("#passLogin").val();
  const welcomeName = checkAcc.nameAcc;    
  if (checkAcc === null || checkAcc.emailAcc !== emailLogAttempt ) {
      ($("#loginUnsuc")).removeClass("invisible")
  } else {
      if (checkAcc.emailAcc === emailLogAttempt && checkAcc.passwordAcc !== passLogin ){
        $("#loginUnsuc").removeClass("invisible")
        $("#loginUnsuc").html("Incorrect password")
      } else {       
          if (checkAcc.emailAcc === emailLogAttempt && checkAcc.passwordAcc === passLogin ){ 
        document.getElementById("login").style.width = "0%";
        $("#userName").removeClass("invisible");
        $("#userName").html(welcomeName);
        $("#loginUnsuc").addClass("invisible")
        }
      } 
  } 
})
$("#gotoshopAccSuccess").click(function gotoShop() {  
document.getElementById("accCreationSucc").style.width = "0%";  
});
$("#closeCheckout").click(function closeCheckout() {
    document.getElementById("checkoutForm").style.height = "0%";
});
$("#seePassword").click(function showPassword(){
    if ($("#seePassword").is(":checked")){
    ($("#signUpPassword").prop('type','text'))
    }  else {
    ($("#signUpPassword").prop('type','password'))
    }
});
$("#showTracks").click(function opentrackList(){
    document.getElementById("tracks").style.width = "35%"; 
});   
$("#closeTracklist").click(function closeTop20List(){
    document.getElementById("tracks").style.width = "0%";
});
$("#searchBtn").hover(function searchIconColor(){
    $("#searchIcon").removeClass("text-gray-800").addClass("text-gray-600");
});
$("#searchBtn").mouseleave(function searchIconColor(){
    $("#searchIcon").removeClass("text-gray-600").addClass("text-gray-800");
});
$("#trackPreview").click(function rotateminiDisc(){
    $("trackImage").addclass("miniDisc");
});
$("#emptyCart").click(function closeCart() {
    document.getElementById("myCart").style.width = "0%";
});
$(function shownbmitems(){
    $("#nbmCartItems").html(function nbmitems(){
        const items = myShoppingCart.getTotalProducts();
        return items
    })
})
$("#emptyCartbtn").click(function emptycart(){
    sessionStorage.clear("cart");
    window.location.reload();
})
$(document).ready(function load(){ 
    if ( myShoppingCart.getTotalProducts() > 0){
        $("#checkout").removeClass("invisible");
        $("#miniCarttotalprice").removeClass("invisible");
        $("#totaltext").removeClass("invisible");
        $("#dolarSign").removeClass("invisible");
        $("#emptyCartbtn").removeClass("invisible");
        $("#emptyCart").addClass("invisible");
        $("#miniCartText").addClass("invisible");
        $("#miniCarttotalprice").text( 
            function totalprice(){
            const price = myShoppingCart.getTotalAmount();
            return price
            })    
        }   
})  




