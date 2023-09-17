let total =document.getElementById("screenn");

let calcu=(e)=>{
    total.value+=e;
}

let result=()=>{
    try{
        total.value =eval(total.value);
    }
    catch(error)
    {
        total.value='Error';
    }
}

function AC() {
    total.value=" ";
}

function DEL() {
    total.value = total.value.slice(0, -1);
}
