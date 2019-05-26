var body = document.body;

var mainDiv = document.createElement("div");
mainDiv.setAttribute('id', 'main');
content1.appendChild(mainDiv);

var breakWhite30 = document.createElement("div");
breakWhite30.setAttribute('style', 'height: 30px');

var mainTitle = document.createElement("h3");
var mainTitleText = document.createTextNode("What is your Colour?")
mainTitle.appendChild(mainTitleText);
content1.appendChild(mainTitle);
content1.appendChild(breakWhite30);

var yourColour = document.createElement("div");
yourColour.setAttribute('id', 'customizeColor');
yourColour.setAttribute('style', 'height: 220px; width: 100%; background-color: #aaaaaa; border-radius: 110px')
content1.appendChild(yourColour);

var breakWhite20 = document.createElement("div");
breakWhite20.setAttribute('style', 'height: 30px');
content1.appendChild(breakWhite20);

var redButton = document.createElement("button");
redButton.setAttribute('style', 'height: 50px; width: 100%; background-color: #ff0000; border-radius: 25px')
redButton.setAttribute('onclick', 'toRed()');
content1.appendChild(redButton);

function toRed() {
    customizeColor.style.backgroundColor = '#ff0000';
  }

var greenButton = document.createElement("button");
greenButton.setAttribute('style', 'height: 50px; width: 100%; background-color: #00ff00; border-radius: 25px')
greenButton.setAttribute('onclick', 'toGreen()');
content1.appendChild(greenButton);

function toGreen() {
    customizeColor.style.backgroundColor = '#00ff00';
  }

var blueButton = document.createElement("button");
blueButton.setAttribute('style', 'height: 50px; width: 100%; background-color: #0000ff; border-radius: 25px')
blueButton.setAttribute('onclick', 'toBlue()');
content1.appendChild(blueButton);

function toBlue() {
    customizeColor.style.backgroundColor = '#0000ff';
  }

var blackButton = document.createElement("button");
blackButton.setAttribute('style', 'height: 50px; width: 100%; background-color: #000000; border-radius: 25px')
blackButton.setAttribute('onclick', 'toBlack()');
content1.appendChild(blackButton);

function toBlack() {
    customizeColor.style.backgroundColor = '#000000';
  }

  function required()
    {
    var empt = document.forms["form1"]["pesan"].value;
    if (empt == "")
    {
    alert("Pesan tidak boleh kosong");
    return false;
    }
    else 
    {
    alert('Pesan sudah diterima');
    return true; 
    }
  }