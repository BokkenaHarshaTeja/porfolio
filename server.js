// SendMail function
function SendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_tuapz7d", "template_kj9jdtg", params)
        .then(function(res) {
            alert("Success! " + res.status);
            document.getElementById("contactForm").reset(); // Reset the form after sending
        })
        .catch(function(error) {
            alert("Failed to send message. Please try again.");
            console.error("Error:", error);
        });
}

// Attach the SendMail function to the form submission
document.getElementById("contactForm").addEventListener("submit", SendMail);

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current navigation link
const sections = document.querySelectorAll('div[id]');
const navLinks = document.querySelectorAll('.nav');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
            link.classList.add('active');
        }
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    // Close menu when a nav link is clicked (on mobile)
    const links = navLinks.querySelectorAll('.nav');
    links.forEach(link => {
      link.onclick = () => {
        navLinks.classList.remove('active');
      };
    });
  }

const certificates = [
{
  src: "./images/wed-devops-certificate.jpg",
  title: "Web Development",
  description: `The Complete 2024 Web Development Bootcamp Udemy
Instructor: Dr. Angela Yu
Completion Date: December 8, 2024

Successfully completed a comprehensive full-stack web development course covering both front-end and back-end technologies. Key areas of focus included:

Front-End: HTML5, CSS3, JavaScript, Bootstrap, and React

Back-End: Node.js, Express.js, MongoDB, and RESTful APIs

Hands-on Projects: Designed and deployed multiple dynamic, responsive web applications

This certification reflects my strong foundation in modern web development practices and readiness to build real-world full-stack solutions.`
},
{
  src: "./images/internship.jpg",
  title: "Web Development Internship  Intrainz",
  description: `Completed a 2-month internship at Intrainz, gaining practical experience in front-end and full-stack web development.

Key Projects:
- Calculator Website  Developed a fully functional calculator using HTML, CSS, and JavaScript.
- Validation Form  Designed and implemented a dynamic form with real-world validation logic.

Highlights:
- Gained hands-on experience with modern web development tools and practices.
- Awarded Internship Completion Certificate, Industrial Certification, and a Letter of Recommendation.
- Improved skills in UI/UX design, debugging, and collaborative development.

This internship strengthened my foundation in building responsive, user-friendly web applications.`
},
{
  src: "./images/cisco.jpg",
  title: "Python Essentials  Cisco Networking Academy",
  description: `Completed the Python Essentials course offered by Cisco NetAcad, gaining a strong foundation in core Python programming concepts.
Topics Covered:
• Variables and Data Types
• Control Flow and Looping Constructs
• Functions and Modular Programming
• Object-Oriented Programming Principles
This certification has strengthened my problem-solving skills and laid a solid base for future work in AI, Machine Learning, and Web Development.`
}
,
{
  src: "./images/industrial certificate.jpg",
  title: "Web Development Internship  Intrainz",
  description: `Successfully completed a 2-month internship at Intrainz, gaining hands-on experience in web development and enhancing both technical and professional skills.

Projects Accomplished:
• Minor Project  Developed a fully functional calculator website.
• Major Project  Designed and implemented a robust validation form for real-world applications.

Key Highlights:
• Gained expertise in modern web development technologies and practices.
• Earned an Internship Completion Certificate and an Industrial Program Certificate, recognizing participation in an intensive, industry-aligned training.
• Received a Letter of Recommendation for dedication and contributions.
• Strengthened skills in problem-solving, UI/UX design, and real-world project execution.

This internship and the accompanying industrial training have been transformative in preparing for real-world challenges and professional opportunities.`
}
,
{
  src: "./images/virtual intenship.jpg",
  title: "Android Developer Internship  Indian Edu Program with Google",
  description: `Completed a 10-week virtual internship as an Android Developer (September  June 2024), supported by the Indian Edu Program in collaboration with Google for Developers and certified by AICTE.
Key Highlights:
• Gained hands-on experience in designing, developing, and optimizing Android applications.
• Enhanced technical skills in mobile app development and Android architecture.
• Participated in a nationally recognized program focused on skill development and innovation.

This internship strengthened my passion for technology and prepared me to build impactful, real-world mobile solutions.`
},
{
  src: "./images/Workshop.jpg",
  title: "Generative AI Skill Workshop",
  description: `Successfully completed a Generative AI (GenAI) Skill Workshop led by Mr. Ram Koushik. The workshop combined theoretical concepts with hands-on implementation in a hybrid format.

Workshop Format:
• 2-day offline + 3-day online sessions, structured to be interactive and beginner-friendly.

Key Topics Covered:
• Fundamentals of Machine Learning and Deep Learning.
• Introduction to Large Language Models (LLMs) and Transformers.
• Understanding the working of tools like ChatGPT.

Hands-on Experience:
• Built a custom GPT using Ollama.
• Developed and integrated personalized chat models into websites via APIs.

This workshop provided both foundational knowledge and practical skills, empowering me to build real-world GenAI applications.`
}

];

document.querySelectorAll('.certification-card').forEach((card, index) => {
card.addEventListener('click', () => {
    document.getElementById('modalImage').src = certificates[index].src;
    document.getElementById('modalDescription').innerHTML = `<h3>${certificates[index].title}</h3><p>${certificates[index].description}</p>`;
    document.getElementById('certificateModal').style.display = 'flex';
});
});

function closeModal(event) {
event.stopPropagation(); // Prevent event from bubbling to parent
document.getElementById('certificateModal').style.display = 'none';
}

function overlayClose(event) {
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDescription');
if (!modalImage.contains(event.target) && !modalDesc.contains(event.target)) {
    document.getElementById('certificateModal').style.display = 'none';
}
}

// Optional: Escape key support
document.addEventListener('keydown', function (e) {
if (e.key === "Escape") {
    document.getElementById('certificateModal').style.display = 'none';
}
});
