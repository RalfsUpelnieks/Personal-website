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
        id: "project-image-1",
        name: "To the moon",
        description: "Trading simulator developed using C++ and SFML",
        image: "assets/images/ToTheMoon.png",
        code: "https://github.com/RalfsUpelnieks/To-the-moon"
    },
    {
        id: "project-image-2",
        name: "CityLife",
        description: "Life simulator developed using C# and Unity",
        image: "assets/images/CityLife.png",
    },
    {
        id: "project-image-3",
        name: "NoteApp",
        description: "Note-taking web application developed with C#, TypesSript, SQL, ASP.NET api, React and Tailwind CSS",
        image: "assets/images/NoteApp.png",
        code: "https://github.com/RalfsUpelnieks/Note-app"
    },
];

var selectedProject = 0;
var isAnimating = false;

updateProjectElements();

projects.forEach((project, index) => {
    const img = document.createElement('img');

    img.className = 'project-image';
    if(index !== 0) {
        img.classList.add('right');
    }
    
    img.id = project.id;
    img.src = project.image;
    img.alt = project.name;

    projectImageLocation.appendChild(img);
});


function updateProjectElements() {
    projectCount.textContent = selectedProject + 1 + "/" + projects.length
    projectName.textContent = projects[selectedProject].name;
    projectDescription.textContent = projects[selectedProject].description;

    if(projects[selectedProject].code) {
        projectCode.href = projects[selectedProject].code;
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
    const oldProjcect = document.getElementById(projects[selectedProject].id);

    selectedProject += 1;

    const newProjcect = document.getElementById(projects[selectedProject].id);

    oldProjcect.classList.add('left');
    newProjcect.classList.remove('right');

    updateProjectElements();

    setTimeout(() => {
        isAnimating = false;
    }, 1000);
}

function PreviousProject() {
    if (selectedProject <= 0 || isAnimating) {
        return
    }

    isAnimating = true;
    const oldProjcect = document.getElementById(projects[selectedProject].id);

    selectedProject -= 1;

    const newProjcect = document.getElementById(projects[selectedProject].id);

    oldProjcect.classList.add('right');
    newProjcect.classList.remove('left');

    updateProjectElements();

    setTimeout(() => {
        isAnimating = false;
    }, 1000);
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