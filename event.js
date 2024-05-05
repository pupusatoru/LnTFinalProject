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
  