const input=document.getElementById('number-input');
const result=document.getElementById('result');

function handelclickbutton(el) {
    const value = el.innerText;
    const currentExp = input.value;
    input.value=currentExp + value;

    if (['+', '-', '*', '/'].includes(value)) return;
    try {
        result.value = eval(input.value); 
    } catch (e) {
        result.value = 'Error';  
    }
}

  function reset(){
    input.value="";
    result.value="";
}



