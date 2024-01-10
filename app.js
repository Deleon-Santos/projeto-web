"use strict"
//nesse trecho e cogigo voce esta usando o metodo toggler para alternar para aclasse darck\\
 const switcher= document.querySelector(".btn");
 switcher.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme")});
    
    var classeName=document.body.className;
    if(classeName=="ligt-theme")
        {this.textContent="Dark";}
            
    else{
        this.textContent="light";}
        console.log("current class name:"+className);


