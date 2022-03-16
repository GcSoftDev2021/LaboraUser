function Register() {
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    let ConfirmPassword = $("#ConfirmPassword").val();

    debugger
    if (Email == "" || Email == null || Email == undefined) {        
        document.getElementById('Email').focus();   
        Swal.fire('', 'Por favor ingrese el Correo Electronico', 'warning');
    } else if (Password == "" || Password == null || Password == undefined) {
        document.getElementById('Password').focus();
        Swal.fire('', 'Por favor ingrese la Contraseña', 'warning');
    } else if (ConfirmPassword == "" || ConfirmPassword == null || ConfirmPassword == undefined) {
        document.getElementById('ConfirmPassword').focus();
        Swal.fire('', 'Por favor confirme la Contraseña', 'warning');
    } else if (Password != ConfirmPassword) {
        document.getElementById('ConfirmPassword').focus();
        Swal.fire('', 'Las contraseñas no son iguales por favor valide', 'warning');
    } else {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(Email)) {
            Swal.fire('', 'Correo OK', 'success');
        } else {
            document.getElementById('Email').focus();
            Swal.fire({
                icon: 'info',
                title: 'Mensaje del Sistema',                
                text: 'Por favor ingrese un Correo Electronico valido',
                //imageUrl: '../../Resources/Images_App/LogoAlert.png',
                //imageWidth: 200,
                //imageHeight: 50,
                //imageAlt: 'Custom image',
            })
        }
        
    }
}