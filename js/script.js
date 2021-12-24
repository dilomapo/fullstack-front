document.getElementById("formulario").addEventListener("submit", function(event){
    let vNM = document.getElementById("nm").value;
    let vAP = document.getElementById("ap").value;    
    let vlbnm = document.getElementById("lbnm");
    let vlbap = document.getElementById("lbap");
    
    vlbnm.style.color = "black";
    vlbap.style.color = "black";

    if(vNM=="")
    {
        vlbnm.style.color = "red";
        console.log("Falta nombre");
        event.preventDefault();
    }
    if(vAP=="")    
    {        
        vlbap.style.color = "red";
        event.preventDefault();
    }
});

document.getElementById("tam").addEventListener("change", function(event){
    let vTam = document.getElementById("tam").value;  
    console.log(vTam);
    resultado_tamano.text=""

    if(vTam=="S")
    {
        resultado_tamano.text="No Disponible"
        console.log("No Disponible");
        event.preventDefault();
    }
    else
    {
        resultado_tamano.text="Disponible"
        console.log("No Disponible");
        event.preventDefault();
    }
});
