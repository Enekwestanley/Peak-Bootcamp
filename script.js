const speakerName = document.querySelectorAll('.speaker-name');
const speakerJob = document.querySelectorAll('.speaker-job');
const speakerDesc = document.querySelectorAll('.speaker-desc');
const speakerImage = document.querySelectorAll('speaker-image');

const speakersArray = [
  {
    name: 'Yochai Benckler',
    role: 'Ceo of at Zenith Bootcamp',
    description: 'Youchai Studied IT at Havard high school as a fullstack web developer ',
    photo: 'img/speaker1.jpeg',
  },
  {
    name: 'Kilnam Chon',
    role: 'Head front end web developer team at Zenith Bootcamp',
    description: 'Kilnam studied IT at Barclays High school as front end web developer.',
    photo:  'img/speaker3.jpg',
  },
  {
    name: 'SohYeong Noh',
    role: 'Head back end web developers team at Zenith Bootcamp',
    description: 'SohYeong studied IT at Havard High school as a back end web developer. ',
    photo:  'img/speaker1.jpeg',
  },
  {
    name: 'Lila Tretikov',
    role: 'Head technical team at Zenith Bootcamp',
    description: 'Lila studied IT at oakland High university as a fullstack web developer.',
    photo:  'img/speaker1.jpeg',
  },
  {
    name: 'Julie Leda',
    role: 'Technical team memeber at Zenith Bootcamp',
    description: 'Julie studied IT at Havard High school and a backend web developer. ',
    photo:  'img/speaker6.jpeg',
  },
  {
    name: 'Ryan Merkley',
    role: 'Technical team memeber at Zenith Bootcamp',
    description: 'Ryan studied IT at Havard High school as a front end developer. ',
    photo:  'img/speaker1.jpeg',
  },
];


function speakerCreation(speaker) {
  const speakers1 = document.createElement('li')
  speakers1.classList.add('speaker-group')
  speakers1.classList.add('speaker-group1')

  const img1 = document.createElement('img')
  img1.classList.add('speaker-image')
  img1.src = speaker.photo
  img1.alt = speaker.name
  speakers1.appendChild(img1)

  const info = document.createElement('div')
  info.classList.add('speaker-desc-holder')

  const name = document.createElement('h3')
  name.classList.add('speaker-name')
  name.innerText = speaker.name
  info.appendChild(name)
  
  const job = document.createElement('p')
  job.classList.add('speaker-job')
  job.innerText = speaker.role
  info.appendChild(job)

  const line = document.createElement('hr')
  line.classList.add('speaker-hr')
  info.appendChild(line)

  const lastP = document.createElement('p')
  lastP.classList.add('speaker-desc')
  lastP.innerText = speaker.description
  info.appendChild(lastP)
  
  speakers1.appendChild(info)
  return speakers1
}


function addspeaker() {
  const coverContainer = document.querySelector('.speakers')
  for (let i = 0; i < speakersArray.length; i += 2) {
   const universalList = document.createElement('ul') 
   universalList.classList.add('speakers-group')
   universalList.classList.add('group1-speakers')
   universalList.appendChild(speakerCreation(speakersArray[i]))
   universalList.appendChild(speakerCreation(speakersArray[i + 1]))
   coverContainer.appendChild(universalList)
  }
}

addspeaker()