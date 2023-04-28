var textarea = document.querySelector("#textarea")
var counter = document.querySelector("#counter")

textarea.addEventListener("input",function(){
    var count =textarea.value.length
    counter.innerHTML=count + " Charcters"
})