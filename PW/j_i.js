function myFunction(){
    window.location.href="/Project/index1.html";
}
 
function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validation(){
    var returnval=true;
    var name=document.forms['myForm']['fname'].value;
    console.log(name);
    
    
    if(name.length==" "||name.length==null){
        seterror("f_name","**Field can not be empty.");
        returnval=false;
    }
    return returnval;
    
}