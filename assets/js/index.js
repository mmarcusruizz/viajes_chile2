import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'


  
// Get the card elements
const cards = document.querySelectorAll('.card');

// Function to update the card layout on resize
function updateCardLayout() {
  cards.forEach(card => {
    const cardRow = card.querySelector('.row');
    const col4 = cardRow.querySelector('.col-4');
    const image = col4.querySelector('img'); // Get the image element

    // Check if the screen width is less than 768px (typical tablet breakpoint)
    if (window.innerWidth < 768) {
      // Replace col-4 with col-12
      col4.classList.remove('col-4');
      col4.classList.add('col-12');
    } else {
      // Restore col-4 class if it's larger than 768px
      // **Important: Add the classes back to the original elements**
      col4.classList.remove('col-12');
      col4.classList.add('col-4');

      // **Trigger image re-render**
      image.src = image.src; // This will force the image to re-render
    }
  });
}

// Call the function initially
updateCardLayout();

// Add an event listener for window resize
window.addEventListener('resize', updateCardLayout);
