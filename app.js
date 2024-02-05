
const addNotes=document.getElementById("btn");
const page=document.getElementById("text");
const parentElement=document.querySelector("#box");
const theme=document.getElementById("theme");
const body=document.querySelector("body");
const header=document.querySelector("h1");
const lightTheme=document.getElementById("theme2");
const resetButton=document.getElementById("reset");

addNotes.addEventListener("click",()=>{

addNotes.style.display="block";
    let blankPage=document.createElement("p");
    blankPage.classList.add('text');
    blankPage.setAttribute("contenteditable","true");
    parentElement.appendChild(blankPage);


    
   let deleteBtn=document.createElement("button");
   deleteBtn.classList.add("delete");
   deleteBtn.innerText="DELETE";
   parentElement.appendChild(deleteBtn);

   
    deleteBtn.addEventListener("click",()=>{
    blankPage.style.display="none";
    deleteBtn.style.display="none";
    
    });

});



theme.addEventListener("click",()=>{
    body.style.backgroundColor="black";
    theme.style.color="black";
    theme.style.border="3px solid white";
    theme.style.backgroundColor="white";
        
        
    lightTheme.style.backgroundColor="black";
    lightTheme.style.border="3px solid white";
    lightTheme.style.color="white";
    

    addNotes.style.backgroundColor="black";
    addNotes.style.color="white";
    addNotes.style.border="3px solid white";

    resetButton.style.backgroundColor="black";
    resetButton.style.border="3px solid white";
    resetButton.style.color="white";

});
    
lightTheme.addEventListener("click",()=>{

body.style.backgroundColor="white";
theme.style.backgroundColor="black";
theme.style.color="white";


lightTheme.style.color="black";
lightTheme.style.backgroundColor="white";
lightTheme.style.border="3px solid black";



addNotes.style.backgroundColor="black";
addNotes.style.color="white";
   
resetButton.style.backgroundColor="black";
resetButton.style.border="3px solid black";
resetButton.style.color="white";

});


resetButton.addEventListener("click",()=>{

body.style.backgroundColor="#30197d";
if(!theme.classList.contains("theme")){
    theme.classList.add("theme");
}

if(!lightTheme.classList.contains("theme2")){
    theme.classList.addd("theme2");
    theme.classList.add("hover");
}

if(!addNotes.classList.contains("btn")){
    addNotes.classList.add("btn");
    addNotes.classList.add("hover");
}

header.style.Color="pink";
header.style.textShadow="0 0 30px";
if(header.classList.contains("lightTheme || theme")){
    header.classList.remove("lightTheme || theme");
}
});











