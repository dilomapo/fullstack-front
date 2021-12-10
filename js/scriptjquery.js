
$("#formulario").on('submit',function (e){        
    /*código JQuery */  
   
    let vNM  = $("#lbnm").val();
    let vAP  = $("#lbap").val();
    $("#lbnm").css("color","black");
    $("#lbap").css("color","black");    

    if($("#nm").val().length <1 ) { 
        vError = "Falta Nombre";
        $("#lbnm").css("color","red");
        console.log("Falta Nombre");          
        e.preventDefault();
    }
    if($("#ap").val().length <1)  { 
        vError = "Falta Apellido";
        $("#lbap").css("color","red");
        console.log("Falta Apellido");
        e.preventDefault();
    }    

    });