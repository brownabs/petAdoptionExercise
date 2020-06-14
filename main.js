//build animals objects
//make sure images are working
const animals = [
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    TypeOfPet: "dino",
    imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    TypeOfPet: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    TypeOfPet: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    TypeOfPet: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    TypeOfPet: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    TypeOfPet: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    TypeOfPet: "dino",
    imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
  },
  {
    name: "Sassy",
    color: "Poop-Colored",
    specialSkill: "Adept at talking self and others out of fights.",
    TypeOfPet: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    TypeOfPet: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    TypeOfPet: "dino",
    imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    TypeOfPet: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    TypeOfPet: "dog",
    imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    TypeOfPet: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    TypeOfPet: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    name: "Smokey",
    color: "Poop-Colored",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    TypeOfPet: "dino",
    imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    TypeOfPet: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    TypeOfPet: "dog",
    imageUrl: "/images/dog1.jpeg"
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    TypeOfPet: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    TypeOfPet: "dino",
    imageUrl: "/images/longneck3.jpg"
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    TypeOfPet: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    TypeOfPet: "dog",
    imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    TypeOfPet: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    TypeOfPet: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    TypeOfPet: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    TypeOfPet: "dino",
    imageUrl: "/images/longneck.jpg"  }
];

//printToDom function, will require one argument (two arguments: div id and what text to print)

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};


//function to add event listeners to html
const buttonEvents = () => {
  document.getElementById('All').addEventListener('click', buttonClick);
  document.getElementById('dog').addEventListener('click', buttonClick);
  document.getElementById('cat').addEventListener('click', buttonClick);
  document.getElementById('dino').addEventListener('click', buttonClick);
};

//function to build animals, requires one argument what type of selected animals to build

const buildAnimals = (animals) => {
  let domString = "";
  for (i = 0; i < animals.length; i++) {
    domString += `<div class="individualAnimalCard">`;
    domString += `<h3>${animals[i].name}</h3>`;
    domString += `<img src=${animals[i].imageUrl} class="animalImage"></img>`;
    domString += `<h7>Color: ${animals[i].color}</h7>`;
    domString += `<h7>Special Skill: ${animals[i].specialSkill}</h7>`;
    domString += `<h7 id="TypeOfPet">Type of Pet: ${animals[i].TypeOfPet}</h7>`;
    domString += `</div>`;
  }
  printToDom('animals', domString)
};

// loop over animals array
  // if values of instructor key is the same as buttonId - keep that object
  // once we have all the animals for that instructor 
  const buttonClick = (e) => {
    const buttonId = e.target.id;
    //console.log('you clicked a button', e.target.id);
    const selectedAnimals = [];
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].TypeOfPet === buttonId) {
        selectedAnimals.push(animals[i]);
      }
    }
  
    if (buttonId === 'All') {
      buildAnimals(animals);
    } else {
      console.log("selected animal")
      buildAnimals(selectedAnimals);
    }
  };

  //trying to figure out how to only display this for initial entry onto site and for home button
  /*const buildHomePage = () => {
    let domString = '';
    domString +=`<section>`
    domString += `<h3>Welcome to Safe Haven</h3>`
    domString += `<p>
     We pride ourselves on finding the best home that all animals deserve. Please check out our animals and fill out an application with us. Thank you!
    </p>`
    domString += `</section>`
    printToDom('home', domString)
    }*/


const init = () => {
 // buildHomePage();
  buttonEvents();
};

init();
