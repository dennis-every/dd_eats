const properties = [
  {
    name: 'Data Dashboard Healthcare',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
    only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: './Images/Cards/Mask_4.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live_version: 'https://covid19.who.int/',
    source: 'https://github.com/dfsalam',
    image_pop: './Images/Cards/pop1.png',
  },

  {
    name: 'Website portfolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './Images/Cards/Mask_3-6.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live_version: 'https://covid19.who.int/',
    source: 'https://github.com/dfsalam',
    image_pop: './Images/Cards/pop1.png',
  },

  {
    name: 'Profesional Art Printing Data More',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    image: './Images/Cards/Mask_4.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live_version: 'https://covid19.who.int/',
    source: 'https://github.com/dfsalam',
    image_pop: './Images/Cards/pop1.png',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    image: './Images/Cards/Mask_4.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live_version: 'https://covid19.who.int/',
    source: 'https://github.com/dfsalam',
    image_pop: './Images/Cards/pop1.png',
  },

  {
    name: 'Website portfolio',
    description: `A daily selection of privately personalized reads; 
      no accounts or sign-ups required. has been the industry's standard`,
    image: './Images/Cards/Mask_3-6.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live_version: 'https://covid19.who.int/',
    source: 'https://github.com/dfsalam',
    image_pop: './Images/Cards/pop1.png',
  },

  {
    name: 'Profesional Art Printing Data More',
    description: `A daily selection of privately personalized reads; 
      no accounts or sign-ups required. has been the industry's standard`,
    image: './Images/Cards/Mask_4.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    live_version: 'https://covid19.who.int/',
    source: 'https://github.com/dfsalam',
    image_pop: './Images/Cards/pop1.png',
  },
];
let count = 1;
properties.forEach((element) => {
  const container = document.querySelector('.middle-section');

  const section = document.createElement('section');
  section.classList.add('card');
  section.setAttribute('id', count);
  count += 1;

  section.style.backgroundImage = `url(${element.image})`;

  const title = document.createElement('h1');
  title.classList.add('card-title');
  title.innerHTML = element.name;

  const paragraph = document.createElement('p');
  paragraph.innerHTML = element.description;

  paragraph.classList.add('card-paragraph');

  const uList = document.createElement('ul');
  uList.classList.add('card-stack');
  container.appendChild(section);
  section.appendChild(title);
  section.appendChild(paragraph);
  section.appendChild(uList);
  const tech = element.technologies;
  tech.forEach((tech) => {
    const li = document.createElement('li');
    li.classList.add('card-stack-li');
    li.innerHTML = tech;
    uList.appendChild(li);
  });

  const btn = document.createElement('button');
  btn.classList.add('see--project--btn');
  btn.innerHTML = 'See project';
  section.appendChild(btn);
});

/* Popup window open and close */
const btn = document.querySelectorAll('.see--project--btn');

const closeIcon = document.querySelector('.popup--close');

const popup = document.querySelector('.popup');

function display() {
  popup.classList.add('display--block');
  popup.classList.remove('display--none');
}

function closePop() {
  popup.classList.add('display--none');
  const popupLanguages = document.querySelector('.popup--languages');
  popupLanguages.innerHTML = '';
  document.querySelector('body').classList.remove('block-scroll');
}

btn.forEach((e) => {
  let parent = '';
  e.addEventListener('click', () => {
    display();
    document.querySelector('body').classList.add('block-scroll');

    parent = e.parentElement;
    const number = parent.getAttribute('id') - 1;

    document.querySelector('.popup--name').innerHTML = properties[number].name;
    const popupLanguages = document.querySelector('.popup--languages');
    const tech = properties[number].technologies;
    tech.forEach((tech) => {
      const li = document.createElement('li');
      li.classList.add('works-stack-li');
      li.innerHTML = tech;
      popupLanguages.appendChild(li);
    });

    const seeLive = document.querySelector('.popup--seelive');
    const seeSource = document.querySelector('.popup--seesource');
    seeLive.setAttribute('href', properties[number].live_version);
    seeSource.setAttribute('href', properties[number].source);

    document.querySelector('.popup--paragraph').innerHTML = properties[number].description;
    document.querySelector('.popup--image').setAttribute('src', properties[number].image_pop);
  });
});

closeIcon.addEventListener('click', closePop);
