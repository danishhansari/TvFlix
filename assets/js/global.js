// 'use strict'

// Add even on multiple element
const addEvenonElements = function(elements, eventType, callback){
    for(const elem of elements)elem.addEventListener(eventType,callback);
}

// Toggle search box in mobile device || small screen

const searchBox = document.querySelector("[search-box]");
const searchToggler = document.querySelector("[search-toggler]");
addEvenonElements(searchToggler,"click",function(){
    searchBox.classList.toggle("active");
})