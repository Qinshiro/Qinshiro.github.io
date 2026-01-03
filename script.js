// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');
const currentYear = document.getElementById('current-year');
const typewriterText = document.getElementById('typewriter-text');
const projectsContainer = document.getElementById('projects-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Projects Data
const projects = [
    {
        id: 1,
        title: "Discord Music Bot",
        description: "Advanced music bot with playlist support, queue management, and multiple audio sources. Features include volume control, equalizer, and lyric integration.",
        type: "discord",
        technologies: ["Node.js", "Discord.js", "FFmpeg", "YouTube API", "Lavalink"],
        status: "completed"
    },
    {
        id: 2,
        title: "Server Automation Bot",
        description: "Comprehensive automation bot for Discord server management. Includes auto-moderation, leveling system, welcome messages, and custom commands.",
        type: "automation",
        technologies: ["JavaScript", "MongoDB", "Discord.js", "Express.js"],
        status: "completed"
    },
    {
        id: 3,
        title: "Multi-purpose Discord Bot",
        description: "Feature-rich bot with 100+ commands including moderation, utilities, games, and API integrations. Serves over 5000 users across multiple servers.",
        type: "discord",
        technologies: ["Node.js", "Discord.js", "REST API", "SQLite", "Canvas"],
        status: "completed"
    },
    {
        id: 4,
        title: "AI Chatbot Integration",
        description: "Intelligent chatbot using natural language processing for customer service automation. Integrates with multiple messaging platforms.",
        type: "chatbot",
        technologies: ["Python", "TensorFlow", "FastAPI", "WebSocket", "Redis"],
        status: "in-progress"
    },
    {
        id: 5,
        title: "Social Media Automation",
        description: "Bot for automating social media tasks including content posting, engagement tracking, and analytics reporting.",
        type: "automation",
        technologies: ["JavaScript", "Puppeteer", "Twitter API", "Instagram API", "MongoDB"],
        status: "completed"
    },
    {
        id: 6,
        title: "E-commerce Discord Bot",
        description: "Custom bot for Discord-based e-commerce communities. Features product listings, shopping carts, and secure payment integration.",
        type: "discord",
        technologies: ["Node.js", "Stripe API", "MongoDB", "Discord.js", "React"],
        status: "in-progress"
    }
];

// Typewriter Effect
const typewriterStrings = [
    "Mid Bot Developer",
    "JavaScript Specialist",
    "Discord Bot Developer",
    "Automation Expert",
    "Chatbot Creator"
];

let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterSpeed = 100;

function typeWriterEffect() {
    const currentString = typewriterStrings[typewriterIndex];
    
    if (!isDeleting && charIndex <= currentString.length) {
        typewriterText.textContent = currentString.substring(0, charIndex);
        charIndex++;
        typewriterSpeed = 100;
    } else if (isDeleting && charIndex >= 0) {
        typewriterText.textContent = currentString.substring(0, charIndex);
        charIndex--;
        typewriterSpeed = 50;
    }
    
    if (!isDeleting && charIndex === currentString.length + 1) {
        isDeleting = true;
        typewriterSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === -1) {
        isDeleting = false;
        typewriterIndex = (typewriterIndex + 1) % typewriterStrings.length;
        typewriterSpeed = 500; // Pause before starting new word
    }
    
    setTimeout(typeWriterEffect, typewriterSpeed);
}

// Animate Stats Counter
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + "+";
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + "+";
            }
        }, 20);
    });
}

// Render Projects
function renderProjects(filter = 'all') {
    projectsContainer.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.type === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-type', project.type);
        
        let statusBadge = '';
        if (project.status === 'in-progress') {
            statusBadge = '<span class="project-type" style="background: rgba(255, 189, 46, 0.2); color: #ffbd2e;">In Progress</span>';
        } else {
            statusBadge = '<span class="project-type">Completed</span>';
        }
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                ${statusBadge}
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Filter Projects
function setupProjectFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter projects
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

// Animate Skill Bars
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = `${level}%`;
    });
}

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

// Back to Top Button
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Update active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Handle Contact Form Submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate form submission
    showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send the data to a server here
    console.log('Contact form submitted:', { name, email, subject, message });
}

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Set current year in footer
function setCurrentYear() {
    currentYear.textContent = new Date().getFullYear();
}

// Initialize all animations and interactions
function init() {
    // Set current year
    setCurrentYear();
    
    // Check for saved theme
    checkSavedTheme();
    
    // Start typewriter effect
    typeWriterEffect();
    
    // Render projects
    renderProjects();
    
    // Setup project filters
    setupProjectFilters();
    
    // Animate skill bars on scroll
    const skillsSection = document.querySelector('.skills-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Setup event listeners
    themeToggle.addEventListener('click', toggleTheme);
    menuToggle.addEventListener('click', toggleMobileMenu);
    backToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', () => {
        toggleBackToTop();
        updateActiveNavLink();
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Setup smooth scroll
    setupSmoothScroll();
    
    // Initialize back to top button visibility
    toggleBackToTop();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
