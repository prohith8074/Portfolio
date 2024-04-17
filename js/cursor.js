// JavaScript for the cursor trail effect
document.addEventListener('mousemove', (e) => {
    const fireTrail = document.createElement('div');
    fireTrail.className = 'fire-trail';
    document.body.appendChild(fireTrail);
  
    // Set the position of the trail
    fireTrail.style.left = `${e.pageX}px`;
    fireTrail.style.top = `${e.pageY}px`;
  
    // Add animation properties
    fireTrail.style.animation = 'animateTrail 0.5s linear forwards';
  
    // Remove the element after animation
    setTimeout(() => {
      fireTrail.remove();
    }, 500);
  });
  
  // CSS for the fire trail animation
  @keyframes animateTrail {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
  
  /* Style for the fire trail elements */
  .fire-trail {
    position: absolute;
    border-radius: 50%;
    background: url('path-to-fire-animation.gif'); /* Replace with your fire animation gif */
    width: 20px; /* Adjust size as needed */
    height: 20px; /* Adjust size as needed */
    pointer-events: none;
    z-index: 10000;
  }
  