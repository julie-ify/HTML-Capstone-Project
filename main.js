class Speakers {
  constructor(img, name, title, description) {
    this.img = img;
    this.name = name;
    this.title = title;
    this.description = description;
  }
}

const container = document.getElementById('feature-wrapper');
const speakerList = document.createElement('ul');
const reatSpeaker = document.createElement('div');
const addMore = document.createElement('div');
const addBtn = document.createElement('button');
const seeLess = document.createElement('div');
const seeLessBtn = document.createElement('button');
addBtn.innerText = 'See More';
addMore.appendChild(addBtn);
addBtn.classList.add('add-more');
seeLessBtn.innerText = 'See Less';
seeLess.appendChild(seeLessBtn);
seeLessBtn.classList.add('see-less');
reatSpeaker.classList.add('rest-spearker');
speakerList.classList.add('speaker-list');
container.appendChild(speakerList);
container.appendChild(reatSpeaker);

const speaker1 = new Speakers(
  'images/speaker-1.png',
  'Quincy Ememandu',
  'Proffesional Internet Marketer and Digital marketer',
  'Quincy has been in digital market industry for 10 years and has been invited to speak on conferences all over the world.',
);
const speaker2 = new Speakers(
  'images/speaker-2.png',
  'Teddy Livingstone',
  'Professional Ruby on rail developer',
  'Teddy has been in software industry for 7 years and has been invited to speak on conferences all over the world.',
);
const speaker3 = new Speakers(
  'images/speaker-3.png',
  'Freedom Dozie',
  'Professional Business manager and retired software developer',
  'Freedom has been in software industry for 7 years and has been invited to speak on conferences all over the world.',
);
const speaker4 = new Speakers(
  'images/speaker-4.png',
  'Emily Suarez',
  'Professional Community Manager',
  'Emily has been a community manager for 7 years and has been invited to speak on conferences all over the world.',
);
const speaker5 = new Speakers(
  'images/speaker-5.png',
  'Mary Ruben',
  'Professional JavaScript and React developer',
  'has been a developer for 7 years and has been invited to speak on conferences all over the world.',
);
const speaker6 = new Speakers(
  'images/speaker-6.png',
  'Julie May',
  'Professional Full stack Software Developer',
  'has been a developer for 7 years and has been invited to speak on conferences all over the world.',
);

const speakerArr = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];

const fullSpeaker = () => {
  speakerList.innerHTML = '';
  for (let i = 0; i < speakerArr.length; i += 1) {
    const list = document.createElement('li');
    list.classList.add('speaker-item');
    const img = document.createElement('img');
    img.setAttribute('src', speakerArr[i].img);
    const name = document.createElement('h4');
    name.textContent = speakerArr[i].name;
    const italics = document.createElement('i');
    italics.textContent = speakerArr[i].title;
    const title = document.createElement('p');
    title.classList.add('colored-text');
    title.appendChild(italics);
    const description = document.createElement('p');
    description.textContent = speakerArr[i].description;
    const div1 = document.createElement('div');
    const hr = document.createElement('hr');
    title.appendChild(hr);
    const div2 = document.createElement('div');
    div1.appendChild(img);
    div2.appendChild(name);
    div2.appendChild(title);
    div2.appendChild(description);
    list.appendChild(div1);
    list.appendChild(div2);
    speakerList.appendChild(list);
  }
};

const renderSpeaker = () => {
  speakerList.innerHTML = '';
  const firstHalfSpeaker = speakerArr.slice(0, 3);
  for (let i = 0; i < firstHalfSpeaker.length; i += 1) {
    const list = document.createElement('li');
    list.classList.add('speaker-item');
    const img = document.createElement('img');
    img.setAttribute('src', firstHalfSpeaker[i].img);
    const name = document.createElement('h4');
    name.textContent = firstHalfSpeaker[i].name;
    const italics = document.createElement('i');
    italics.textContent = firstHalfSpeaker[i].title;
    const title = document.createElement('p');
    title.classList.add('colored-text');
    title.appendChild(italics);
    const description = document.createElement('p');
    description.textContent = firstHalfSpeaker[i].description;
    const div1 = document.createElement('div');
    const hr = document.createElement('hr');
    title.appendChild(hr);
    const div2 = document.createElement('div');
    div1.appendChild(img);
    div2.appendChild(name);
    div2.appendChild(title);
    div2.appendChild(description);
    list.appendChild(div1);
    list.appendChild(div2);
    speakerList.appendChild(list);
  }
  speakerList.appendChild(addMore);
};

const renderRestSpeaker = () => {
  addMore.addEventListener('click', () => {
    const secondHalfSpeaker = speakerArr.slice(3);
    for (let i = 0; i < secondHalfSpeaker.length; i += 1) {
      const list2 = document.createElement('li');
      list2.classList.add('speaker-item');
      list2.classList.add('list2');
      const img = document.createElement('img');
      img.setAttribute('src', secondHalfSpeaker[i].img);
      const name = document.createElement('h4');
      name.textContent = secondHalfSpeaker[i].name;
      const italics = document.createElement('i');
      italics.textContent = secondHalfSpeaker[i].title;
      const title = document.createElement('p');
      title.classList.add('colored-text');
      title.appendChild(italics);
      const description = document.createElement('p');
      description.textContent = secondHalfSpeaker[i].description;
      const div1 = document.createElement('div');
      const hr = document.createElement('hr');
      title.appendChild(hr);
      const div2 = document.createElement('div');
      div1.appendChild(img);
      div2.appendChild(name);
      div2.appendChild(title);
      div2.appendChild(description);
      list2.appendChild(div1);
      list2.appendChild(div2);
      speakerList.appendChild(list2);
      speakerList.appendChild(seeLess);
    }

    addMore.style.display = 'none';

    seeLess.addEventListener('click', () => {
      speakerList.innerHTML = '';
      renderSpeaker();
      addMore.style.display = 'flex';
    });
  });
};

window.addEventListener('load', () => {
  renderSpeaker();
  renderRestSpeaker();
});


const smallDevice = window.matchMedia("(min-width: 900px)");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    fullSpeaker()
  }
  else {
    renderSpeaker()
  }
}

// Run it initially
handleDeviceChange(smallDevice);