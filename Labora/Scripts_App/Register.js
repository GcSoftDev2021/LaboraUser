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
        Swal.fire({
            //title: 'Sweet!',
            text: 'ok',
            imageUrl: '../../Resources/Images_App/Logo0.png',
            imageWidth: 200,
            imageHeight: 100,
            //imageAlt: 'Custom image',

        })
    }
}