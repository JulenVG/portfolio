// Diccionary
const translations = {
  es: {
    home: "Inicio",
    work: "Proyectos",
    experience: "Experiencia",
    skills: "Destrezas",
    contact: "Contacto",
    selectedLanguage: "<img src='resources/icons/espana.png' alt='spain flag'>ES",
    welcomeMessage: "Hola, soy Julen",
    welcomeSubMessage: "un desarrollador web",
    welcomeSummary:"Bienvenido a mi portafolio, donde puedes encontrar información sobre mí y mis proyectos.",
  
    projectsHeader: "Estos son algunos de mis proyectos",
    gameHubDescription: "GameHub es una app web para gestionar y compartir tu colección de videojuegos, clasificarlos por estado y descubrir colecciones de otros usuarios.",
    shortBatDescription: "ShortBat automatiza el filtrado masivo de archivos Excel, buscando rabaciones de murciélagos en carpetas de forma rápida y eficiente.",
    mirrorBossDescription: "Mirror Boss Exit Doors es un mod para <i>The Binding of Isaac</i> que introduce una nueva mecánica para mejorar la calidad de vida, facilitando la salida del mundo espejo tras derrotar al jefe.",
    
    experienceHeader: "Experiencia",
    asacDescription: "Desarrollador Backend en el proyecto Xperta (C#, ASP.NET MVC, JavaScript, JQuery, SQL Server, Visual Studio) En este proyecto, una aplicación web diseñada para gestionar las incidencias recibidas por cualquier servicio, participé en la resolución de bugs, la implementación de nuevas funcionalidades y la corrección de problemas de accesibilidad, contribuyendo al desarrollo y mejora continua del producto. <br><b>El Jefe de Desarrollo</b> está dispuesto a ser un referente laboral en caso de que alguna empresa desee obtener referencias sobre mi desempeño.",
    llamesDescription: "En esta posición, gestioné el trabajo en el departamento PCI y realicé múltiples Memorias Técnicas de Diseño de Baja Tensión y diversos Proyectos Eléctricos. Además, me encargué del dibujo de planos planta y unifilares completos utilizando AutoCAD, fui responsable de las compras y supervisé el control y la verificación de las horas extra del personal de obra, contribuyendo al buen funcionamiento y organización de la empresa.",
    
    skillsHeader: "Destrezas",
    skillSectionLang: "Lenguajes",
    skillSectionOther: "Otros",
    
    contactHeader: "Mi información de contacto",
    contactThanks: "Gracias por visitar mi portafolio",
    footerMessage: "Este es mi portafolio personal. Todos los proyectos y detalles son reales y muestran mis habilidades y trabajo.",
    footerRights: "© Creado por <strong>Julen Vázquez Gayoso</strong>. Todos los derechos reservados.",
  },
  en: {
    home: "Home",
    work: "Work",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    selectedLanguage: "<img src='resources/icons/reino-unido.png' alt='uk flag'>EN",
    welcomeMessage: "Hey I am Julen",
    welcomeSubMessage: "a web developer",
    welcomeSummary: "Welcome to my portfolio where you can find information about me and my projects.",

    projectsHeader: "These are some of my projects",
    gameHubDescription: "GameHub is a web app to manage and share your video game collection, categorize them by status, and discover collections from other users.",
    shortBatDescription: "ShortBat automates the bulk filtering of Excel files, quickly and efficiently searching for bat recordings in folders.",
    mirrorBossDescription: "Mirror Boss Exit Doors is a mod for <i>The Binding of Isaac</i> that introduces a new mechanic to improve quality of life by making it easier to exit the mirror world after defeating the boss.",
    
    experienceHeader: "Experience",
    asacDescription: "Backend Developer in the Xperta project (C#, ASP.NET MVC, JavaScript, JQuery, SQL Server, Visual Studio). In this project, a web application designed to manage incidents received by any service, I participated in bug fixing, implementing new features, and correcting accessibility issues, contributing to the development and continuous improvement of the product. <br><b>The Development Manager</b> is willing to be a professional reference in case any company wishes to inquire about my performance.",
    llamesDescription: "At Electricidad Llames, I managed work in the PCI department and created multiple Low Voltage Design Technical Reports and various Electrical Projects. Additionally, I was responsible for drafting plant and single-line diagrams using AutoCAD, overseeing purchases, and supervising the control and verification of overtime hours for the field staff, contributing to the smooth operation and organization of the company.",
    
    skillsHeader: "Skills",
    skillSectionLang: "Languages",
    skillSectionOther: "Other",
    
    contactHeader: "My contact information",
    contactThanks: "Thank you for visiting my portfolio",
    footerMessage: "This is my personal portfolio. All projects and details are real and showcase my skills and work.",
    footerRights: "© Created by <strong>Julen Vazquez Gayoso</strong>. All rights reserved.",
  },
};

function toggleTheme() {
  const themeToggleButton = document.getElementById('theme-toggle').querySelector('button');
  const themeToggleImage = themeToggleButton.querySelector('img');
  const root = document.documentElement;

  if (themeToggleImage.src.includes('dark.png')) {
    // Switch to dark theme
    themeToggleImage.src = 'resources/icons/light.png';
    themeToggleImage.alt = 'Toggle light Theme';
    themeToggleImage.title = "Light mode"
    
    root.style.setProperty('--main-white', '#f0f0f0');
    root.style.setProperty('--main-green', '#177048');
    root.style.setProperty('--main-blue', '#031417');
    root.style.setProperty('--main-gray', '#303841');
  } else {
    // Switch to light theme
    themeToggleImage.src = 'resources/icons/dark.png';
    themeToggleImage.alt = 'Toggle dark Theme';
    themeToggleImage.title = "Dark mode"
    
    root.style.setProperty('--main-white', '#171b1f');
    root.style.setProperty('--main-green', '#28a745');
    root.style.setProperty('--main-blue', '#f0f0f0');
    root.style.setProperty('--main-gray', '#d1d9e0');
  }
}

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = document.querySelectorAll(".progress");
          progressBars.forEach((bar) => {
            const skillLevel = bar.getAttribute("data-skill-level");
            bar.style.width = `${skillLevel}%`;
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const skillsSection = document.querySelector("#skills");
  observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const javaSkillText = document.getElementById("learningSkill");
  const textStates = [
    "Java - Skill in progress  ",
    "Java - Skill in progress.  ",
    "Java - Skill in progress.. ",
    "Java - Skill in progress...",
  ];
  let currentStateIndex = 0;

  setInterval(() => {
    currentStateIndex = (currentStateIndex + 1) % textStates.length;
    javaSkillText.textContent = textStates[currentStateIndex];
  }, 500);
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("active");
});
