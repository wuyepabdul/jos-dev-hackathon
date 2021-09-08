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

const featuredSpeakers = [
  {
    name: 'Simon Lalong',
    title: 'Governor, Plateau State',
    image: './images/Simon-Lalong.jpg',
    imageAlt: 'lalongs picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },

  {
    name: 'Daser David',
    title: 'DG, PICTDA',
    image: './images/Daser-David.jpg',
    imageAlt: 'dasers picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Bomkam Wuyep',
    title: 'DG, PLASMIDA',
    image: './images/bomkam.jpg',
    imageAlt: 'bomkams picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Yohanna Izam',
    title: 'VC Plateau State University',
    image: './images/Professor-Yohanna-Izam.jpg',
    imageAlt: 'yohanna izams picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Bashir Sheidu',
    title: 'CEO Farmers Market',
    image: './images/Bash.jpeg',
    imageAlt: 'bashirs picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
  {
    name: 'Yusuph Dilas',
    title: 'CEO Urbanstudent.ng',
    image: './images/joseph-dilas.jpeg',
    imageAlt: 'dilas picture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,corporis provi',
  },
];

let markup = ``;

featuredSpeakers.forEach((speaker) => {
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
