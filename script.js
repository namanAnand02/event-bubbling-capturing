const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

// child.addEventListener("click", ()=>{
//     console.log("child clicked");
    
// }, false)
// parent.addEventListener("click", ()=>{
//     console.log("parent clicked");
    
// }, false)
// grandparent.addEventListener("click", ()=>{
//     console.log("grandparent clicked");
    
// }, false)

// even when we click on child--> all of them eventually gets triggered : thats the concepf of bubbling 
// o/p flow : when the child is clicked 

// inside out ---> event bubbling 

/*

child clicked
parent clicked
grandparent clicked

*/


// ************** event capturing *************



/// event capturing ---> opp of bubbling 
// outward to inward 

// if a child gets called: 
// o/p flow will be : 

/*
grandparent called
parent called 
child called 
*/


// to set capturing to any addEventListener, we add true to them as third argument 

// addEventListener(eventType, callbackFun, capture T/F)

// by default, capture is always false, or can say bubbling is always true.

// child.addEventListener("click", ()=>{
//     console.log("child clicked");
    
// }, true)
// parent.addEventListener("click", ()=>{
//     console.log("parent clicked");
    
// }, true)
// grandparent.addEventListener("click", ()=>{
//     console.log("grandparent clicked");
    
// }, true)