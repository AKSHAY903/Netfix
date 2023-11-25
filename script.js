//Variables

const signInBtn = document.querySelector(".signInBtn");
const frontPage = document.querySelector(".front-Page");
const navbar = document.querySelector(".navbar");
const heroSectionText = document.querySelector(".heroText");
const SecondPage = document.querySelector(".Second-Page");
const containerOfSecond = document.querySelector(".containerOfSecond-Page");
const ThirdPage = document.querySelector(".third-Page");
const containerOfThirdPage = document.querySelector(".containerOfThird-Page");
const fourthPage = document.querySelector(".fourth-Page");
const containerOfFourthPage = document.querySelector(".containerOfFourth-Page");
const fifthPage = document.querySelector(".fifth-Page");
const containerOfFifthPage = document.querySelector(".containerOfFifth-Page");
const SecondLastPage = document.querySelector(".SecondLast-Page");
const containerOfSecondLastPage = document.querySelector(".containerOfSecondLast-Page");
const footerSection = document.querySelector(".footer-Section");
const footContainer = document.querySelector(".footContainer");
const SignInForm = document.querySelector(".SignInBtn2");

//Initial Display


//Open Form function
function openSignInForm(){
   heroSectionText.classList.remove("heroText");
   heroSectionText.classList.add("SignInBtn2");
}
//Add Listener on Sign In Button
signInBtn.addEventListener("click", function(){
  openSignInForm();
});
