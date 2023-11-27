//selecting popup-overlay and popup-box
var popup = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopup = document.getElementById("addpop")
addpopup.addEventListener("click",function(){
    popup.style.display="block"
    popupbox.style.display="block"
  
})
//select cancel
var cancelpop = document.getElementById("cancel-book")
 cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    popupbox.style.display="none"
 })
 //select container
 var contain=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitle=document.getElementById("book-title")
 var bookauthor=document.getElementById("book-author")
 var bookdes=document.getElementById("book-des")
 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdes.value}
    </p>
    <button onclick="deletebook(event)">Delete</button>`
    contain.append(div)
    popup.style.display="none"
    popupbox.style.display="none"
 })
 //delete box
 function deletebook(event){
    event.target.parentElement.remove()
 }