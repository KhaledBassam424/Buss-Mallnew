'use strict';


let maximumClicks = 25;
let attempts = 0;

let leftImageElement = document.getElementById('leftImage');
let middleImageElement=document.getElementById('middleImage')
let rightImageElement = document.getElementById('rightImage');

let arrOfObjects = [];
function Products(name, source){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown =0;
   
    arrOfObjects.push(this);
}
new Products('bag','images/bag.jpg');
new Products('banana','images/banana.jpg');
new Products('bathroom','images/bathroom.jpg');
new Products('boots','images/boots.jpg');
new Products('breakfast','images/breakfast.jpg');
new Products('bubblegum','images/bubblegum.jpg');
new Products('chair','images/chair.jpg');
new Products('cthulhu','images/cthulhu.jpg');
new Products('dog-duck','images/dog-duck.jpg');
new Products('dragon','images/dragon.jpg');
new Products('pen','images/pen.jpg');
new Products('pet-sweep','images/pet-sweep.jpg');
new Products('scissors','images/scissors.jpg');
new Products('shark','images/shark.jpg');
new Products('sweep','images/sweep.png');
new Products('tauntaun','images/tauntaun.jpg');
new Products('unicorn','images/unicorn.jpg');
new Products('usb','images/usb.gif');
new Products('water-can','images/water-can.jpg');
new Products('wine-glass','images/wine-glass.jpg');
// console.log(arrOfObjects);
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
function renderThreeRandomImages(){
    leftImageIndex = generateRandomIndex(); 
    middleImageIndex=generateRandomIndex(); 
    rightImageIndex = generateRandomIndex(); 
                                                               

    
    while(leftImageIndex === rightImageIndex || leftImageIndex===middleImageIndex || middleImageIndex===rightImageIndex ){
        leftImageIndex = generateRandomIndex(); 
        rightImageIndex= generateRandomIndex();
    }


                                                  
    leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source); 
    middleImageElement.setAttribute('src', arrOfObjects[middleImageIndex].source );
    rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);

}                                       

renderThreeRandomImages();



function generateRandomIndex(){
                
     let randomIndex = Math.floor(Math.random() * arrOfObjects.length); 
     return randomIndex;
}


leftImageElement.addEventListener('click', handleClicking);
middleImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);
// id from the image
function handleClicking(event){
    attempts++;
   
    if(attempts <= maximumClicks){
        if(event.target.id === 'leftImage'){
            arrOfObjects[leftImageIndex].votes++;
            arrOfObjects[leftImageIndex].shown++;
            arrOfObjects[rightImageIndex].shown++;
            arrOfObjects[middleImageIndex].shown++;
            // console.log(arrOfObjects[leftImageIndex].votes);
        }else if(event.target.id === 'middleImage'){
            arrOfObjects[middleImageIndex].votes++;
            arrOfObjects[leftImageIndex].shown++;
            arrOfObjects[rightImageIndex].shown++;
            arrOfObjects[middleImageIndex].shown++;
        }
            else{
                arrOfObjects[rightImageIndex].votes++;
                arrOfObjects[leftImageIndex].shown++;
                arrOfObjects[rightImageIndex].shown++;
                arrOfObjects[middleImageIndex].shown++;
            }
            // console.log(arrOfObjects[rightImageIndex].votes);
        
        renderThreeRandomImages();
        console.log(arrOfObjects);
    }else{
        leftImageElement.removeEventListener('click', handleClicking);
        rightImageElement.removeEventListener('click', handleClicking);    
        middleImageElement.removeEventListener('click', handleClicking);
       
     
        }
        
    }
       
   

let button = document.getElementById('button');
button.addEventListener('click', displaylist)

function displaylist (event) {
if(attempts >= 25){
    let unorderdList = document.getElementById('unOrderdList');
    let li;
    for(let i = 0 ; i < arrOfObjects.length; i++){
        li = document.createElement('li');
        unorderdList.appendChild(li);
        li.textContent =  `${arrOfObjects[i].name} had ${arrOfObjects[i].votes} Votes and was displayed ${arrOfObjects[i].shown} times..`
        console.log(li.textContent)
}
button.removeEventListener('click', displaylist);     
}
}