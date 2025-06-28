const header = document.getElementById('header');
const homeSection = document.getElementById('home-section');
const projectName = document.getElementById('project-name');
const projectDescription = document.getElementById('project-description');
const projectCode = document.getElementById('project-code');
const projectImageLocation = document.getElementById('project-image-inner-border');
const nextProjectButton = document.getElementById('next-project');
const previousProjectButton = document.getElementById('previous-project');
const projectCount = document.getElementById("project-count");

const projects = [
    {
        name: "Note App",
        description: "Note-taking web application developed with C#, TypesSript, SQL, ASP.NET API, React, and Tailwind CSS",
        image: "assets/images/NoteApp.png",
        linkText: "View source code",
        link: "https://github.com/RalfsUpelnieks/Note-app"
    },
    {
        name: "Home Management App",
        description: "Residential property management web application developed with C#, TypesSript, SQL, ASP.NET API, Angular, and Bootstrap 5",
        image: "assets/images/HouseManagmentApp.png",
        linkText: "View source code",
        link: "https://github.com/RalfsUpelnieks/House-managment-app"
    },
    {
        name: "CityLife",
        description: "Life simulator developed using C# and Unity",
        image: "assets/images/CityLife.png",
    },
    {
        name: "Personal website",
        description: "Developed using pure HTML, CSS, and JavaScript. *Insert recursion joke",
        image: "assets/images/PersonalWebsite.png",
        linkText: "View source code",
        link: "https://github.com/RalfsUpelnieks/Personal-website"
    },
    {
        name: "To the moon",
        description: "Trading simulator developed using C++ and SFML",
        image: "assets/images/ToTheMoon.png",
        linkText: "View source code",
        link: "https://github.com/RalfsUpelnieks/To-the-moon"
    }
];

var selectedProject = 0;
var isAnimating = false;

const idName = "project-image-"

updateProjectElements();

projects.forEach((project, index) => {
    const img = document.createElement('img');

    img.className = 'project-image';
    if(index !== 0) {
        img.classList.add('right');
    }
    
    img.id = idName + index;
    img.src = project.image;
    img.alt = project.name;

    projectImageLocation.appendChild(img);
});


function updateProjectElements() {
    projectCount.textContent = selectedProject + 1 + "/" + projects.length
    projectName.textContent = projects[selectedProject].name;
    projectDescription.textContent = projects[selectedProject].description;

    if(projects[selectedProject].linkText && projects[selectedProject].link) {
        projectCode.textContent = projects[selectedProject].linkText;
        projectCode.href = projects[selectedProject].link;
        projectCode.classList.remove('display-none')
    } else {
        projectCode.classList.add('display-none');
    }

    nextProjectButton.classList.toggle('disabled', selectedProject + 1 >= projects.length);
    previousProjectButton.classList.toggle('disabled', selectedProject <= 0);
}

function NextProject() {
    if(selectedProject + 1 >= projects.length || isAnimating) {
        return
    }

    isAnimating = true;
    const oldProjcect = document.getElementById(idName + selectedProject);

    selectedProject += 1;

    const newProjcect = document.getElementById(idName + selectedProject);

    oldProjcect.classList.add('left');
    newProjcect.classList.remove('right');

    updateProjectElements();

    setTimeout(() => {
        isAnimating = false;
    }, 400);
}

function PreviousProject() {
    if (selectedProject <= 0 || isAnimating) {
        return
    }

    isAnimating = true;
    const oldProjcect = document.getElementById(idName + selectedProject);

    selectedProject -= 1;

    const newProjcect = document.getElementById(idName + selectedProject);

    oldProjcect.classList.add('right');
    newProjcect.classList.remove('left');

    updateProjectElements();

    setTimeout(() => {
        isAnimating = false;
    }, 400);
}

function toggleMenu() {
    const links = document.querySelector('#header');
    links.classList.toggle('active');
}

window.addEventListener('load', function() {
    setTimeout(function() {
        homeSection.classList.remove('hidden');
    }, 100);
});

window.addEventListener('scroll', function() {
    const scrollThreshold = homeSection.offsetHeight * 0.9;
    header.classList.toggle('alt', window.scrollY < scrollThreshold);
});