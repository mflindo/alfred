function sendContact(){
    var name = $("#contactform #name").val();
    var email = $("#contactform #email").val();
    var msg = $("#contactform #msg").val();
    var html_datos;
    var html_final;

    if (validateText(name) && validateEmail(email)){
        html_datos = '<h2>Nueva Contacto vía Website<h3><h4>Datos Personales</h2><p>Nombre Cliente: ' +  name + '</p><p>Email: ' + email + '</p><p>Mensaje: ' + msg + '<p>';
        html_final = html_datos + '<br><h5>Sistema contacto de Rollos Alfred</h5>';

        sendMail(email, name, html_final);
        $("#result_msg").html("Gracias, su mensaje ha sido enviado.");
        $("#name").removeClass('required_field');
        $("#email").removeClass('required_field');
        $("#submit").css("display", "none");
        $("#contactForm :input").prop("disabled", true);
        
    }
    else{
        $("#result_msg").html("Error, rellene los campos obligatorios.");
        $("#name").addClass('required_field');
        $("#email").addClass('required_field');
        
    }

}

function sendMail(email, name, html_final){
    var dest = "rollosalfred@gmail.com"; /*Email destino para todos los formularios*/

    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
            'key': 'l4m_PTAo9F3YiCpkJ4zfyA', //API Key asiganada
            'message': {
              'from_email': email,
              "from_name": name,
              'to': [
                {
                  'email': dest, //Destinatario del correo
                  'name': 'Rollos Alfred Website', //Nombre del Remitente
                  'type': 'to'
                }
              ],
              'subject': 'Nuevo contacto vía website', //Titulo del correo
              'html': html_final
            }
        }
    }) 
}

function validateText(text){
    if (text == '') {
      return false;
    }
    else{
        return true;
    }
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);

}