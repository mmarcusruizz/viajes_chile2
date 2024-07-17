import "../../node_modules/jquery/dist/jquery.js";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


// fondo para el navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-bg');
    } else {
        navbar.classList.remove('navbar-bg');
    }
});

  // Smooth scrolling para los links del navbar //
  $('.navbar-nav .nav-link').on('click', function(event) { //detecta clicks en el nav
    var target = $(this).attr('href'); // obtiene el href del link
    if ($(target).length) { // si el target existe
      event.preventDefault(); // evita el comportamiento por defecto
      $('html, body').animate({ // anima el scroll hacia el target
        scrollTop: $(target).offset().top -90 //define hacia donde va el scroll
      }, 100); // velocidad en ms de la animación
    }
  });


// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Alert function
function alert1() {
    // Código html que se muestra en la alerta
    const alertHtml = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>¡Muy bien!</strong> Tu mensaje ha sido enviado correctamente, revisa tu bandeja de entrada para revisar nuestra respuesta.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  
    // Append (adjunta) el código al div.alertcontainer
    $("#alertContainer").append(alertHtml);
  
    // Después de 5 segundos el mensaje desaparece
    setTimeout(() => {
      $("#alertContainer .alert").remove(); // Remove the alert from the DOM
    }, 5000); // 5000 milliseconds (5 seconds)
  }
  
  // Click en el botón (como es type=button en vez de submit tuve que cambiarlo)
  $("#enviarBtn").click(function() {
    alert1();
  });