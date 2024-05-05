document.addEventListener("DOMContentLoaded", function() {
    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var eventSelection = document.getElementById('event').value;
  
      // Validation
      var nameError = document.getElementById('nameError');
      var emailError = document.getElementById('emailError');
      var phoneError = document.getElementById('phoneError');
      var isValid = true;
  
      if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        isValid = false;
      } else {
        nameError.textContent = "";
      }
  
      if (!email.includes('@')) {
        emailError.textContent = "Invalid email format";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
  
      if (!phone.startsWith('08') || phone.length > 14) {
        phoneError.textContent = "Invalid phone number";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }
  
      // If form is valid, submit data
      if (isValid) {
        // Add AJAX POST here
      }
    });
  });
  
  const form = document.getElementById('registerForm');

form.addEventListener('submit', function(event) {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  const emailError = document.getElementById('emailError');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');

  if (!email.includes('@')) {
    emailError.style.display = 'block';
    event.preventDefault();
  } else {
    emailError.style.display = 'none';
  }

  if (name.length < 3) {
    nameError.style.display = 'block';
    event.preventDefault();
  } else {
    nameError.style.display = 'none';
  }

  if (!phone.match(/^08[0-9]{9,12}$/)) {
    phoneError.style.display = 'block';
    event.preventDefault();
  } else {
    phoneError.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Generate timeline events
  const timeline = document.getElementById('timeline');
  const events = [
    { date: '1 Januari 2024', title: 'Acara 1', description: 'Deskripsi acara 1.' },
    { date: '15 Februari 2024', title: 'Acara 2', description: 'Deskripsi acara 2.' },
    { date: '1 Maret 2024', title: 'Acara 3', description: 'Deskripsi acara 3.' }
  ];

  events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event');
    eventElement.innerHTML = `
      <h3>${event.date}</h3>
      <h4>${event.title}</h4>
      <p>${event.description}</p>
    `;
    timeline.appendChild(eventElement);
  });

  // Initialize carousel
  const carousel = document.querySelector('.carousel');
  let currentIndex = 0;
  const images = carousel.querySelectorAll('img');
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  // Show the first image initially
  showImage(currentIndex);

  // Set interval for carousel
  setInterval(nextImage, 5000);
});
