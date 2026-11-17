
// =====================================
// 1. MOBILE NAVIGATION
// =====================================

// Select the menu button
const menuToggle = document.getElementById("menuToggle");

// Select the navigation links
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Check whether the menu is open
    const isOpen = navLinks.classList.contains("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the menu icon
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// =====================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// =====================================

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// =====================================
// 3. AUTOMATIC COPYRIGHT YEAR
// =====================================

const yearElement = document.getElementById("year");

// Get the current year automatically
const currentYear = new Date().getFullYear();

// Display the year in the footer
yearElement.textContent = currentYear;


// =====================================
// 4. CONTACT FORM
// =====================================

// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the message below the form
const formNote = document.getElementById("formNote");


// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent the default form submission
    event.preventDefault();


    // Collect the visitor's information
    const visitorName = document.getElementById("name").value.trim();

    const visitorEmail = document.getElementById("email").value.trim();

    const visitorSubject = document.getElementById("subject").value.trim();

    const visitorMessage = document.getElementById("message").value.trim();


    // Check that the required fields are not empty
    if (!visitorName || !visitorEmail || !visitorMessage) {

        formNote.textContent = "Please complete all required fields.";

        return;

    }


    // Your actual professional email goes here
    const yourEmail = "YOUR-EMAIL@example.com";


    // Prepare the email subject
    const emailSubject = visitorSubject || "Portfolio Enquiry";


    // Prepare the email message
    const emailBody =
        "Name: " + visitorName + "\n" +
        "Email: " + visitorEmail + "\n\n" +
        "Message:\n" + visitorMessage;


    // Create the email link
    const mailtoLink =
        "mailto:" + yourEmail +
        "?subject=" + encodeURIComponent(emailSubject) +
        "&body=" + encodeURIComponent(emailBody);


    // Inform the visitor
    formNote.textContent =
        "Opening your email application to complete your message...";


    // Open the visitor's email application
    window.location.href = mailtoLink;

});
