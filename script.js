// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const projectsContainer = document.getElementById('projects-container');
const currentYear = document.getElementById('current-year');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Typing Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
window.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    const originalText = typingText.innerHTML;
    const textToType = "Hi, I'm a <span class='highlight'>Bot Developer</span>";
    
    // Clear the text and start typing effect
    typingText.innerHTML = '';
    setTimeout(() => {
        typeWriter(typingText, textToType, 80);
    }, 500);
    
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Load projects from config (in a real scenario, this would fetch from _config.yml)
    loadProjects();
    
    // Set contact info from config
    setContactInfo();
});

// Load Projects
function loadProjects() {
    // In a real Jekyll site, these would come from _config.yml
    // For this static example, we'll use a hardcoded array
    const projects = [
        {
            name: "AI Customer Support Bot",
            description: "NLP-powered customer service assistant that handles common inquiries, provides product information, and escalates complex issues to human agents.",
            tech: ["Python", "TensorFlow", "Dialogflow", "FastAPI"],
            icon: "fas fa-headset"
        },
        {
            name: "Discord Community Moderator",
            description: "Automated moderation bot for Discord servers with features like spam detection, auto-moderation, and engagement tools.",
            tech: ["Node.js", "Discord.js", "MongoDB", "Redis"],
            icon: "fas fa-shield-alt"
        },
        {
            name: "Telegram Crypto Tracker",
            description: "Cryptocurrency price tracking bot that provides real-time alerts, portfolio tracking, and market analysis.",
            tech: ["Python", "Telegram API", "Binance API", "PostgreSQL"],
            icon: "fas fa-chart-line"
        },
        {
            name: "Slack Workflow Automator",
            description: "Bot that automates routine tasks in Slack, integrates with third-party services, and streamlines team workflows.",
            tech: ["JavaScript", "Slack API", "AWS Lambda", "Zapier"],
            icon: "fab fa-slack"
        },
        {
            name: "Twitter Sentiment Analyzer",
            description: "AI bot that analyzes sentiment of tweets about specific topics and generates daily reports.",
            tech: ["Python", "Twitter API", "NLTK", "Pandas"],
            icon: "fab fa-twitter"
        },
        {
            name: "Multi-platform Chat Assistant",
            description: "Unified chatbot that works across WhatsApp, Messenger, and Telegram with a single admin dashboard.",
            tech: ["Node.js", "React", "Socket.io", "MySQL"],
            icon: "fas fa-comments"
        }
    ];
    
    // Clear loading message
    projectsContainer.innerHTML = '';
    
    // Create project cards
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Create random color for project icon background
        const colors = ['#2d5af1', '#6c63ff', '#ff6b8b', '#28a745', '#ffbd2e', '#17a2b8'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-color: ${randomColor};">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Set contact information
function setContactInfo() {
    // In a real Jekyll site, these would come from _config.yml
    document.getElementById('contact-email').textContent = 'your.email@example.com';
    document.getElementById('github-username').textContent = 'yourusername';
}

// Contact Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // In a real implementation, this would send data to a server
    // For this example, we'll just show a success message
    showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = '';
    formMessage.classList.add(type);
    formMessage.style.display = 'block';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-level');
            skillBars.forEach(bar => {
                // Reset width to trigger animation
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document
