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
speakerList.classList.add('speaker-list');
container.appendChild(speakerList);

const speaker1 = new Speakers(
  'images/speaker-1.png',
  'Quincy Ememandu',
  'hello my name is ebere nad i m here to help ypu',
  'hello my name is ebere nad i m here to help ypuhello my name is ebere nad i m here to help ypu',
);
const speaker2 = new Speakers(
  'images/speaker-2.png',
  'Quincy Ememandu',
  'hello my name is ebere nad i m here to help ypu',
  'hello my name is ebere nad i m here to help ypuhello my name is ebere nad i m here to help ypu',
);
const speaker3 = new Speakers(
  'images/speaker-3.png',
  'Quincy Ememandu',
  'hello my name is ebere nad i m here to help ypu',
  'hello my name is ebere nad i m here to help ypuhello my name is ebere nad i m here to help ypu',
);
const speaker4 = new Speakers(
  'images/speaker-4.png',
  'Quincy Ememandu',
  'hello my name is ebere nad i m here to help ypu',
  'hello my name is ebere nad i m here to help ypuhello my name is ebere nad i m here to help ypu',
);
const speaker5 = new Speakers(
  'images/speaker-5.png',
  'Quincy Ememandu',
  'hello my name is ebere nad i m here to help ypu',
  'hello my name is ebere nad i m here to help ypuhello my name is ebere nad i m here to help ypu',
);
const speaker6 = new Speakers(
  'images/speaker-6.png',
  'Quincy Ememandu',
  'hello my name is ebere nad i m here to help ypu',
  'hello my name is ebere nad i m here to help ypuhello my name is ebere nad i m here to help ypu',
);

const speakerArr = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];
// console.log(speakerArr);
function createSpeaker() {
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
}
window.onload = createSpeaker;
