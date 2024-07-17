import "../../node_modules/jquery/dist/jquery.js";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';





// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Alert function
function alert1() {
    // Create the alert HTML
    const alertHtml = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>¡Éxito!</strong> Tu mensaje ha sido enviado correctamente.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  
    // Append the alert to the alert container
    $("#alertContainer").append(alertHtml);
  
    // Optionally, set a timeout to automatically close the alert after a few seconds
    setTimeout(() => {
      $("#alertContainer .alert").remove(); // Remove the alert from the DOM
    }, 3000); // 3000 milliseconds (3 seconds)
  }
  
  // Event listener for the button
  $("#enviarBtn").click(function() {
    alert1();
  });