const ContentTitle = document.querySelector(".content__title");
const googleClass = document.querySelector(".sign-google");
const contentLable = document.querySelectorAll(".label");
const ContentText = document.querySelector(".content__text");
const LogoText = document.querySelector(".content__logo-text");
const ForFree = document.querySelector(".for-free");
const mainContainer = document.querySelector(".content");
const subId = document.querySelector("#sub");
const CheTbox = document.querySelector(".chetbox");
const contentsimg = document.querySelector(".content-img");
const logo = document.querySelector(".content__logo");

function sign(){
    LogoText.classList.add("color-write");
    ContentTitle.innerHTML="Create new account";
    ContentTitle.classList.add("color-write");
    ContentText.innerHTML="Give us some your information to get free access to fieldy";
    ContentText.classList.add("color-write2");
    contentsimg.classList.add("content-img2");
    ForFree.innerHTML="Already have an account?" + " " + "<button type='button' id='sing' onclick='signIn()'> Sign in</button>";
    //ForFree.classList.toggle("color-write2");
    const buttonClass = document.querySelector("#sing");
    buttonClass.textContent="sing in";
    buttonClass.classList.add("color-write");
    const contentClass = document.querySelector("#myform");
    mainContainer.classList.add("content-black");
    let axali = document.createElement("div");
    axali.innerHTML =  "<label for='fname' class='color-write'>Full Name:</label> <br> <br> <input type='text' id='fname' placeholder='Full Name' name='fname' />";
    contentClass.prepend(axali);
    googleClass.innerHTML='<img src="img/search.png" alt="">Sign up with google';
    subId.value = subId.innerHTML="Create account";
    googleClass.classList.add("color-write2");
    CheTbox.classList.add("displayNone");
    for(value of contentLable){
        value.classList.add("color-write")
    }
    logo.classList.add("color-write2");
}
function signIn(){
    ContentTitle.innerHTML="Welcome back";
    ContentTitle.classList.toggle("color-write");
    ForFree.innerHTML="Already have an account?" + " " + "<button type='button' id='sing' onclick='sign()'> Sign up of free</button>";
    const buttonClass = document.querySelector("#sing");
    buttonClass.classList.remove("color-write");
    const labelformClass = document.querySelector("#labelform");
    mainContainer.classList.remove("content-black");
    labelformClass.previousElementSibling.remove()
    subId.value = subId.innerHTML="Sign in";
    googleClass.classList.remove("color-write2");
    googleClass.innerHTML='<img src="img/search.png" alt="">Sign in with google';
    for(value of contentLable){
        value.classList.remove("color-write")
    }
    CheTbox.classList.remove("displayNone");
    LogoText.classList.remove("color-write");
    contentsimg.classList.remove("content-img2");
    logo.classList.remove("color-write2");
    ContentText.classList.remove("color-write2");
    //subId.outerHTML='<input type="submit" value="sing in" id="sub2">';
}
