# Ashknight - Mid Bot Developer Portfolio

A dynamic GitHub Pages portfolio website showcasing my work as a Mid Bot Developer specializing in JavaScript.

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Dynamic Content**: JavaScript-powered interactive elements
- **Theme Toggle**: Switch between dark and light modes
- **Animated Stats**: Count-up animations for statistics
- **Typewriter Effect**: Dynamic text animation in hero section
- **Project Filtering**: Filter projects by category
- **Animated Skill Bars**: Visual representation of technical skills
- **Contact Form**: Interactive contact form with validation
- **Smooth Scrolling**: Smooth navigation between sections

## Project Structure

```
myTheme/V1/
├── Assets/
│   └── background.png        # Background image
├── _config.yml               # Jekyll configuration
├── index.html                # Main HTML file
├── style.css                 # Stylesheet
├── script.js                 # JavaScript functionality
└── README.md                 # This file
```

## Setup Instructions

1. **Clone or Download** the repository to your local machine
2. **Upload to GitHub**:
   - Create a new repository named `username.github.io` (replace `username` with your GitHub username)
   - Upload all files to the repository
3. **Customize Content**:
   - Update `_config.yml` with your personal information
   - Replace `Assets/background.png` with your own background image
   - Modify `index.html`, `style.css`, and `script.js` as needed
4. **GitHub Pages** will automatically deploy your site at `https://username.github.io`

## Customization

### Update Personal Information
Edit the `_config.yml` file to update:
- Name, role, and location
- Social media links
- Site title and description

### Change Colors
Modify CSS variables in `style.css`:
```css
:root {
    --primary-color: #5865F2;
    --secondary-color: #57F287;
    --dark-color: #1e1e2e;
    --light-color: #f8f9fa;
}
```

### Add Projects
Update the `projects` array in `script.js`:
```javascript
const projects = [
    {
        id: 1,
        title: "Project Name",
        description: "Project description",
        type: "category", // discord, automation, or chatbot
        technologies: ["Tech 1", "Tech 2"],
        status: "completed" // or "in-progress"
    }
];
```

### Update Skills
Edit the skills section in `index.html` to reflect your actual skills and proficiency levels.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins & Roboto Mono)

## License

This project is open source and available under the MIT License.

## Contact

- **Name**: Ashknight
- **Role**: Mid Bot Developer
- **GitHub**: [Qinshiro](https://github.com/Qinshiro)
- **Discord**: [Join Server](https://discord.gg/WkGYZYZ3Sn)
- **Email**: gtpsash@gmail.com
