document.addEventListener('DOMContentLoaded', function(){
   navegacionFija(); 
   crearGaleria();
   resaltarEnlace();
   scrollNav();
})

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.info-festival')


    window.addEventListener('scroll', function(){
        // console.log('Diste this.scroll....') //Para probar si funciona (debe tirar el msj en consola)
        if (sobreFestival.getBoundingClientRect().bottom <1){
            header.classList.add('fixed')
        }
        else{
            header.classList.remove('fixed')
        }

    
    })
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    const cantImg = 16;

    for(let i =1; i <= cantImg; i++){
        const imagen = document.createElement('IMG');

        imagen.src = `img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galeria';
        // EVENT HANDLER
        imagen.onclick = function(){
            mostrarImg(i)
        }



        galeria.appendChild(imagen)


    }

}

function mostrarImg(i) {

    const imagen = document.createElement('IMG');
    imagen.src = `img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria';

    // generar moldal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    
    

    // BOTON Cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    // Agg a modal 
    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);
    //agg al HTML

    const body = document.querySelector('body');
    body.classList.add('over-flow-hidden');
    body.appendChild(modal);

}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    const body = document.querySelector('body');
    body.classList.remove('over-flow-hidden');

    setTimeout(()=> {
        modal?.remove();
    }, 500);

    
}

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacionPrincipal a');

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        });

        navLinks.forEach(link =>{
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        })
    })


    
}

function scrollNav(){
    const navLinks = document.querySelectorAll('navegacionPrincipal a');

    navLinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: 'smooth'});
            
        })
    })
}

