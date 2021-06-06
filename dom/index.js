let a = document.querySelector('body');
let b = document.querySelector('h1');
let c = document.querySelector('p');
let arrLink = document.querySelectorAll('a');
let divFontSize = document.querySelector('div');




let firstSite = prompt("Enter first site", "Google");
let secondSite = prompt("Enter first site", "deepl");
let thirdSite = prompt("Enter first site", "flashscore");
for(let i=0;i<arrLink.length;i++){
    arrLink[i].target = '_blank';
    arrLink[0].textContent = firstSite;
    arrLink[0].href = `http://www.${firstSite}.com`;

    arrLink[1].textContent = secondSite;
    arrLink[1].href = `http://www.${secondSite}.com`;

    arrLink[2].textContent = thirdSite;
    arrLink[2].href = `http://www.${thirdSite}.com`;
}


 let bg = prompt('You can change background, write color ', 'red');
let fontF = prompt('You can change font family, write font ', 'arial');
let h1Position = prompt('You can change position h1, write center/end/start ', 'end');
let bgParagraph = prompt('You can change background paragraph write color', 'blue');
let colorLink = prompt('You can change color link, write color', 'yellow');

let colorDiv = prompt('You can change color link, write color', 'darkred');
let fontSizeDiv = prompt('You can change font size div, write font size ', '22px');
let fontWeightDiv =  prompt('You can change font weight, write font ', 'bold');
a.style.background = bg;
a.style.fontFamily = fontF;
b.style.textAlign =h1Position ;
c.style.background =bgParagraph ;
c.style.padding = '10px';

for (const elem of arrLink) {
    elem.style.color = colorLink;
 }

divFontSize.setAttribute('style', `color:${colorDiv}; font-size:${fontSizeDiv}; font-weight:${fontWeightDiv}`);