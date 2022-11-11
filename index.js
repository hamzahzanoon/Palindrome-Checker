const inputs = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterInput;


button.addEventListener("click" , () => {
  
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display ="block";
    if(filterInput != reverseInput) {
         return infoTxt.innerText = `No, '${inputs.value}'is a Palindrome!`;
    }
    infoTxt.innerText = `Yes, '${infoTxt.value}'is a Palindrome!`
    
})

inputs.addEventListener("keyup" , () => {
   filterInput = inputs.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
   if(filterInput) {
    return button.classList.add("active");
   }
   button.classList.remove("active");
})