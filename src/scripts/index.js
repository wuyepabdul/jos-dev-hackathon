const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navMenu = document.querySelector('.nav-menu');
const mainContainer = document.querySelector('.main-container');
const footer = document.querySelector('.footer-section');

function openMenu() {
  menu.style.display = 'block';
  document.body.style.position = 'relative';
  navMenu.style.display = 'none';
  mainContainer.style.display = 'none';
  footer.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  document.body.style.position = 'absolute';
  navMenu.style.display = 'block';
  mainContainer.style.display = 'block';
  footer.style.display = 'grid';
}

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

const mainProgram = [
  {
    title: 'Introduction',
    description:
      'Listen to the speakers from various countries about the message of sharing and opening',
    icon: 'fa-door-open',
  },
  {
    title: 'Lecture',
    description:
      'Listen to the speakers from various countries about the message of sharing and opening',
    icon: 'fa-chalkboard-teacher',
  },
  {
    title: 'Challenges',
    description:
      'Listen to the speakers from various countries about the message of sharing and opening',
    icon: 'fa-laptop-code',
  },
  {
    title: 'Hackathon',
    description:
      'Listen to the speakers from various countries about the message of sharing and opening',
    icon: 'fa-file-powerpoint',
  },
  {
    title: 'Results',
    description:
      'Listen to the speakers from various countries about the message of sharing and opening',
    icon: 'fa-poll',
  },
];

let progamMarkup = ``;

mainProgram.forEach((program) => {
  progamMarkup += `<article class="program-card align-center">
    <div class="program-card-icon"><i class= "fas ${program.icon}"></i></div>
    <div class="title"><h4> ${program.title} </h4></div>
    <div class="program-card-text">
      <p>${program.description}
      </p>
    </div>
  </article>`;
});
document.getElementById('program-container').innerHTML = progamMarkup;

const allSpeakers = [
  {
    name: 'Simon Lalong',
    title: 'Governor, Plateau State',
    image: './src/images/Simon-Lalong.jpg',
    imageAlt: 'lalongs picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },

  {
    name: 'Daser David',
    title: 'DG, PICTDA',
    image: './src/images/Daser-David.jpg',
    imageAlt: 'dasers picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Bomkam Wuyep',
    title: 'DG, PLASMIDA',
    image: './src/images/bomkam.jpg',
    imageAlt: 'bomkams picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Yohanna Izam',
    title: 'VC Plateau State University',
    image: './src/images/Professor-Yohanna-Izam.jpg',
    imageAlt: 'yohanna izams picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Bashir Sheidu',
    title: 'CEO Farmers Market',
    image: './src/images/Bash.jpeg',
    imageAlt: 'bashirs picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Yusuph Dilas',
    title: 'CEO Urbanstudent.ng',
    image: './src/images/joseph-dilas.jpeg',
    imageAlt: 'dilas picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },

  {
    name: 'Daser David',
    title: 'DG, PICTDA',
    image: './src/images/Daser-David.jpg',
    imageAlt: 'dasers picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Bomkam Wuyep',
    title: 'DG, PLASMIDA',
    image: './src/images/bomkam.jpg',
    imageAlt: 'bomkams picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
];

let markup = ``;

allSpeakers.forEach((speaker) => {
  markup += `<article class="featured-speakers-card">
    <div class="speaker-img">
      <img src=${speaker.image} alt=${speaker.imageAlt} />
    </div>
    <div class="featured-text">
      <h4>${speaker.name}</h4>
      <i>${speaker.title}</i>
      <hr />
      <p>
        ${speaker.description}
      </p>
    </div>
    </article>`;
});

document.getElementById('featured-speakers-container').innerHTML = markup;

const moreSpeakersContainer = document.querySelector('.get-more');
const moreSpeakers = document.querySelector('.more');
const allSpeakersContainer = document.querySelector('.all-speakers');
const featuredSpeakersContainer = document.querySelector(
  '.featured-speakers-container'
);
let speakersMarkup = ``;

function loadFeaturedSpeakers() {
  allSpeakers.forEach((speaker) => {
    speakersMarkup += `<article class="featured-speakers-card">
        <div class="speaker-img">
          <img src=${speaker.image} alt=${speaker.imageAlt} />
        </div>
        <div class="featured-text">
          <h4>${speaker.name}</h4>
          <i>${speaker.title}</i>
          <hr />
          <p>
            ${speaker.description}
          </p>
        </div>
        </article>`;
  });
  document.getElementById('all-speakers-container').innerHTML =
    speakersMarkup;
  moreSpeakersContainer.style.display = 'none';
  featuredSpeakersContainer.style.display="none";
}

moreSpeakers.addEventListener('click', loadFeaturedSpeakers);
