let fact=document.querySelector("#fact");
let factText=document.querySelector("#facttext");
let numInput=document.querySelector("#numberinput");
numInput.addEventListener("input",getFactAjax);
function getFactAjax(){
    let number=numInput.value;
    let xhr=new XMLHttpRequest();
    xhr.open('GET',"http://numbersapi.com/"+number);
    xhr.onload=function(){
        if(this.status==200 &&number!=" "){
            fact.style.display='block';
            factText.innerText=this.responseText;
        }
    }
    xhr.send();
}