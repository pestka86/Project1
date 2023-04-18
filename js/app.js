"use strict";

let picturesContainer = document.getElementById("pic-container");
//let picturesContainer = document.querySelector("section");
let resultButton = document.getElementById("results");
//let resultButton = document.querySelector("section + button");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 25;

const state = {
  allPicturesArray: [],
};

function Pictures(name, src, views = 0, clicks = 0) {
  this.name = name;
  this.src = src;
  this.views = views;
  this.clicks = clicks;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allPicturesArray.length);
}

function renderPictures() {
  let pictures1 = getRandomNumber();
  let pictures2 = getRandomNumber();
  let pictures3 = getRandomNumber();
  while (
    pictures1 === pictures2 ||
    pictures1 === pictures3 ||
    pictures2 === pictures3
  ) {
    pictures2 = getRandomNumber();
    pictures3 = getRandomNumber();
  }

  image1.src = state.allPicturesArray[pictures1].src;
  image2.src = state.allPicturesArray[pictures2].src;
  image3.src = state.allPicturesArray[pictures3].src;
  image1.alt = state.allPicturesArray[pictures1].name;
  image2.alt - state.allPicturesArray[pictures2].name;
  image3.alt - state.allPicturesArray[pictures3].name;
  state.allPicturesArray[pictures1].views++;
  state.allPicturesArray[pictures2].views++;
  state.allPicturesArray[pictures3].views++;
}

function handlePicturesClicks(event) {
  if (event.target === picturesContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickPictures = event.target.alt;
  for (let i = 0; i < state.allPicturesArray.length; i++) {
    if (clickPictures === state.allPicturesArray[i].name) {
      state.allPicturesArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    picturesContainer.removeEventListener("click", handlePicturesClicks);
    resultButton.addEventListener("click", renderChart);
    picturesContainer.className = "no-voting";
  } else {
    renderPictures();
  }
}

function renderChart() {
  const labelArray = [];
  const clicksArray = [];
  const viewsArray = [];

  for (let i = 0; i < state.allPicturesArray.length; i++) {
    let thisPictures = state.allPicturesArray[i];
    labelArray.push(thisPictures.name);
    clicksArray.push(thisPictures.clicks);
    viewsArray.push(thisPictures.views);
  }

  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "Views",
        data: viewsArray,
        backgroundColor: "rgb(131, 225, 131)",
      },
      {
        label: "Clicks",
        data: clicksArray,

        backgroundColor: "rgb(50, 90, 52)",
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      indexAxis: "y",
    },
  };
  const canvasChart = document.getElementById("myChart");
  new Chart(canvasChart, config);

  //renderChart();
}

let one = new Pictures("one", "./atributes/img1.jpg");
let two = new Pictures("two", "./atributes/img2.jpg");
let three = new Pictures("three", "./atributes/img3.jpg");
let four = new Pictures("four", "./atributes/img4.jpg");
let five = new Pictures("five", "./atributes/img5.jpg");
let six = new Pictures("six", "./atributes/img6.jpg");
let seven = new Pictures("seven", "./atributes/img7.jpg");
let eight = new Pictures("eight", "./atributes/img8.jpg");
let nine = new Pictures("nine", "./atributes/img9.jpg");
let ten = new Pictures("ten", "./atributes/img10.jpg");
let eleven = new Pictures("eleven", "./atributes/img11.jpg");
let twelve = new Pictures("twelve", "./atributes/img12.jpg");
let thirteen = new Pictures("thirteen", "./atributes/img13.jpg");
let fourteen = new Pictures("fourteen", "./atributes/img14.jpg");
let fiveteen = new Pictures("fiveteen", "./atributes/img15.jpg");
let sixteen = new Pictures("sixteen", "./atributes/img16.jpg");
let seventeen = new Pictures("seventeen", "./atributes/img17.jpg");
let eighteen = new Pictures("eighteen", "./atributes/img18.jpg");
let nineteen = new Pictures("nineteen", "./atributes/img19.jpg");
let twenty = new Pictures("twenty", "./atributes/img20.jpg");
let twentyone = new Pictures("twentyone", "./atributes/img21.jpg");

state.allPicturesArray.push(
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fiveteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyone
);

renderPictures();

picturesContainer.addEventListener("click", handlePicturesClicks);
