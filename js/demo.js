
function getValues(){
    try {
        var num1 = document.getElementById("first").value;
        var num2 = document.getElementById("second").value;
        if(num1 > 0 && num2 > 0){
            var result = parseInt(num1) + parseInt(num2);
            alert("El resultado es: " + result);
        }else{
            alert("Todos los campos son obligatorios");
        }
        
    
    } catch (error) {
        alert(error);
    }
}