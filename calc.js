let num = document.querySelectorAll(".num");
let equl = document.querySelector(".btn-equl");
let del = document.querySelector(".btn-del");
let clear = document.querySelector(".btn-clear");
let form = document.querySelector("input");
console.log(form);

num.forEach(function(e){
    e.addEventListener("click" , ()=>{
       // form.value+=e.target.num;
        console.log( form.value += e.dataset.num);
    });
});

equl.addEventListener("click" , ()=>{
    if(form.value == ""){

        null;

    }else{

        let answer=eval(form.value);
        form.value=answer;
    }
});

del.addEventListener("click" , ( )=>{
    
    let answer = form.value.slice(0 , -1);
    form.value = answer;
});

clear.addEventListener("click" , ( )=>{
    
    form.value = "";
});