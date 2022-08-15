let id=(id)=>document.getElementById(id);

let form= id('form'),
    email=id('email'),
    seen=id('seen')
    slash=id('slash'),
    error=document.getElementsByClassName('error'),
    password=id('password');

form.addEventListener("submit",(e)=>{
        e.preventDefault();
        engine(email,0,'Email cannot be empty')
        engine(password,1,'Password cannot be empty')
});

let engine=(id,serial,message)=>{
        if(id.value.trim()===""){
            error[serial].innerHTML = message;
            setEmpty(id);
        }
        else{
            error[serial].innerHTML = ""
            setRemove(id);
        }
}

function setEmpty(Element){
    Element.classList.add('empty');
    
}
function setRemove(Element){
    Element.classList.remove('empty');
    
}
slash.style.visibility='hidden'
seen.addEventListener('click',toggle)

function toggle(){
    if(password.type==='password'){
        
        password.type='text'
        slash.style.visibility='visible'
        seen.style.visibility='hidden'
    }
   else{
       toggleSlash()
   }
}
slash.addEventListener('click',toggle)
function toggleSlash(){
    password.type='password';
    slash.style.visibility='hidden';
    seen.style.visibility='visible';
}
