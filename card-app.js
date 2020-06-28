var cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function docReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function colorDecider(arr, colorArr) {
  var colorMapping = {
    1: "gothic",
    2: "jellyBean",
    3: "blueWood",
    4: "jellyBean",
    5: "blueWood",
    6: "silver",
    7: "silver",
    8: "gothic",
    9: "blueWood",
  };
  var keys = Object.keys(colorMapping);
  var val = Object.values(colorMapping);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < keys.length; j++) {
      if (+keys[j] === arr[i]) {
        colorArr.push(val[j]);
      }
    }
  }
  return colorArr;
}

function changeColor(colorArr) {
  var el = document.getElementsByClassName("numberCard");
  for (var i = 0; i < el.length; i++) {
    el[i].className = "numberCard " + colorArr[i];
  }
}

docReady(function () {
  var colorArr = [];
  var arr = cardNumber;
  var elem = document.getElementsByTagName("h1");
  for (i = 0; i < elem.length; i++) {
    elem[i].innerText = arr[i];
  }
  colorArr = colorDecider(arr, colorArr);
  changeColor(colorArr);
});

function shuffleLogic(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffle() {
  var colorArr = [];
  var arr = cardNumber;
  arr = shuffleLogic(arr);
  var elem = document.getElementsByTagName("h1");
  for (i = 0; i < elem.length; i++) {
    elem[i].innerText = arr[i];
  }
  colorArr = colorDecider(arr, colorArr);
  changeColor(colorArr);
}

function sort() {
  var colorArr = [];
  var arr = cardNumber;
  arr.sort();
  for (i = 1; i < 10; i++) {
    var elem = document.getElementsByTagName("h1");
    for (i = 0; i < elem.length; i++) {
      elem[i].innerText = arr[i];
    }
  }
  colorArr = colorDecider(arr, colorArr);
  changeColor(colorArr);
}
