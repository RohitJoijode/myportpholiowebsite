'use strict';





/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});






//////////////////////////////////////////////////HERE ADDED BY ROHIT JOIJODE


// document.getElementById("selectBtn").addEventListener("click", function() {
  // document.getElementById("fileInput").click();
// });

// document.getElementById("fileInput").addEventListener("change", function(e) {
  // const file = e.target.files[0];
  // if (file) {
    // const url = URL.createObjectURL(file);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = file.name || "Rohit Joijode Resume.pdf";
    // a.click();
    // URL.revokeObjectURL(url); // Free memory
  // }
// });


// function downloadCV() {
  // // Path to your CV file
  // const fileUrl = '~/Download_CV_Folder/Rohit Joijode Resume.pdf';
  // // Suggested filename for download
  // const fileName = 'Rohit Joijode Resume.pdf';
  
  // // Create an invisible anchor element
  // const link = document.createElement('a');
  // link.href = fileUrl;
  // link.download = fileName;
  
  // // Append to body, trigger click, then remove
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
// }
// jQuery version


function downloadCV() {
  // Direct path from root (no ~)
  const fileUrl = '/Download_CV_Folder/Rohit Joijode Resume.pdf';
  const fileName = 'Rohit_Joijode_Resume.pdf';
  
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function typeWriter() {
  const nameElement = document.getElementById('animated-name');
  const fullName = "Rohit Joijode";
  let i = 0;
  
  // Clear any existing content
  nameElement.textContent = '';
  
  function type() {
    if (i < fullName.length) {
      nameElement.textContent += fullName.charAt(i);
      i++;
      setTimeout(type, 150); // Adjust speed (milliseconds) as needed
    }
  }
  
  // Start the typing animation
  type();
}

// Start animation when page loads
window.addEventListener('DOMContentLoaded', typeWriter);

// Or start on scroll/click if preferred
// window.addEventListener('scroll', typeWriter);
// document.addEventListener('click', typeWriter);

function typeWriterWithCursor() {
  const nameElement = document.getElementById('animated-name');
  const fullName = "Rohit Joijode";
  let i = 0;
  
  // Add cursor element
  nameElement.innerHTML = '<span class="cursor">|</span>';
  
  function type() {
    if (i < fullName.length) {
      // Insert character before cursor
      const currentText = nameElement.innerHTML;
      nameElement.innerHTML = currentText.replace(
        '<span class="cursor">|</span>',
        fullName.charAt(i) + '<span class="cursor">|</span>'
      );
      i++;
      setTimeout(type, 150);
    } else {
      // Remove cursor when done
      nameElement.innerHTML = fullName;
    }
  }
  
  type();
}

// Add this CSS for cursor effect
/*
.cursor {
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
*/