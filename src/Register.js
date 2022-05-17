import React  from "react";
import axios from "axios";
import swal from 'sweetalert';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';

function Register (){

    const getCP = async () =>{
        try {

            let formData = new FormData();
            formData.append("cp", 54040);
            const url = "http://api.masksoftco.mx/direcciones/codigo-postal";

            let result = await axios({
                url,
                method: 'POST',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            if(result.data){
                let objectRes = result.data;
                for(let i=0; i<objectRes.length; i++){
                    console.log(objectRes[i].colonia);
                }
                toastr.success("Información consultada", "correcto")
            }else{
                swal("Opps!", "Código postal incorrecto", "error");
            }


            console.log(result)
            console.log(result.data)
            


           // return (res.data ? res.data : false);
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="content">
            <button onClick={getCP}>Obtener</button>
        </div>
    );

}
export default Register;