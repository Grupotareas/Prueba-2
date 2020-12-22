function validar() {
    let Rut = document.getElementById("txtRut").value;

    {if (jTeNamextField.getText("txtRut").length()== limite)
 
        e.consume(8);
   
    }
 
    
    let Digito = document.getElementById("txtDig").value;
    if (Digito > "10") 
    else if (Digito= "k")
    else if (Digito= "K")
    else (Digito < "9")  
    {
        alert("El Digito Verificador ingresado no corresponde")
    }
    

    let Nombre = document.getElementById("txtNombre").value;

    {if (jTeNamextField.getText("txtNombre").length()== limite)
 
        e.consume(50);
        alert("El Nombre ingresado excede limite")
    }
    

    let Apellido = document.getElementById("txtApellido").value;

    {if (jTeNamextField.getText("txtApellido").length()== limite)
 
        e.consume(50);
        alert("El Apellido ingresado excede limite")
    }

    let Direccion = document.getElementById("txtDireccion").value;

    {if (jTeNamextField.getText("txtDireccion").length()== limite)
 
        e.consume(100);
        alert("La Dirección ingresada excede limite")
    }

    let Marca = document.getElementById("txtMarca").value;

    {if (jTeNamextField.getText("txtMarca").length()== limite)
 
        e.consume(20);
        alert("La Marca ingresada no corresponde")
    }

    let Modelo = document.getElementById("txtModelo").value;

    {if (jTeNamextField.getText("txtModelo").length()== limite)
 
        e.consume(20);
        alert("El modelo ingresado no corresponde")
    }

    let Año = document.getElementById("txtAño").value;

    {if (jTeNamextField.getText("txtAño").length()== limite)
 
        e.consume(4);
        alert("Ingresar Año Valdio")
    }


    }
}


