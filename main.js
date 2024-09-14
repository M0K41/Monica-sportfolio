document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector(".intro-text h1");
  const textArray = [
    "Hello👋. I'm Monica",
    "Special Needs Teacher",
    "Fashion Designer",
    "Web Developer",
    "UI/UX Designer",
    "Graphic Designer"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let colorChange = ['#FF5733', '#33FF57', '#3357FF', '#F333FF']; // Colors for each text

  function type() {
    const currentText = textArray[textIndex];
    const currentColor = colorChange[textIndex % colorChange.length];
    
    // Toggle between typing and deleting
    if (!isDeleting) {
      textElement.innerHTML = `<span style="color: ${currentColor}">${currentText.slice(0, charIndex + 1)}</span>`;
      charIndex++;
      
      // If complete word is typed, start deleting after a delay
      if (charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 4000;  // Delay before starting to delete
      }
    } else {
      textElement.innerHTML = `<span style="color: ${currentColor}">${currentText.slice(0, charIndex - 1)}</span>`;
      charIndex--;
      
      // If word is fully deleted, move to the next word
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Loop through array
        typingSpeed = 300;  // Delay before starting next word
      }
    }

    setTimeout(type, typingSpeed);
  }

  // Start the typing effect
  type();
});
