    // let meses = ['Enero', 'Febrero', 'Marzo'];
    // let contador = meses.length;
    // // console.log(contador);

    // // meses.forEach (mes => {
    // //    console.log(mes); 
       
    // // });
    // for (let i = 0;i < meses.length ; i++){
    //     console.log(meses[i]);
    // }

    let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // for (let i =0; i < n.length; i++){
    //     console.log(n[i]);

    // }

    // n.forEach(mes =>{
    //     console.log(mes);
    // });

    let button = document.getElementById("login")
    let nameUser = document.getElementById("name")
    let password = document.getElementById("password")


    button.addEventListener("click", () => {
        if(password.value.length !== 8 ){
            alert("La contraseña debe 8 Caracteres");
        } else if(nameUser.value.length !== 10){
            alert("El nombre debe tener 10 Caracteres");
        } else{
            alert("Datos Ingresados correctamente")
        }
});     
// function alerta(){
//     alert("HOLA");
// }