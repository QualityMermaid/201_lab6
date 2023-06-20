"use strict";
console.log("YOu are here")

// Constructor Function, a "Factory" for creating object instances.
// instanciate (create) the object name with a captalised first letter.

function Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats, imgFileName){
    this.name = name;
    // this.age = 0;
    this.interests = interests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;
    this.imageUrl = "images/" + imgFileName;
    this.age = this.generateAge()
    this.render();
    
}

// this is read top to bottom
Kitten.prototype.generateAge = function(){
    return randomAge(3, 12) + " months";
}

Kitten.prototype.meow = function(){
    console.log(this.name + " says MEOW")
}

Kitten.prototype.render = function(){
    // get the container for our kitten profile cards
    const containerElement = document.getElementById("kittenProfiles");

    const article = document.createElement("article");
    containerElement.appendChild(article);

    // add the article heading
    const h3 = document.createElement("h3")
    h3.textContent = this.name
    article.appendChild(h3)

    // add a bio with kitten age

    const p = document.createElement("p")
    p.textContent = `${this.name} is adorable and is ${this.age} old`
    article.appendChild(p)

    // add interests in an unordered list
    const ul = document.createElement("ul");
    article.appendChild(ul)

    for(let i = 0; i < this.interests.length; i++){
        const li=document.createElement("li")
        li.textContent = this.interests[i]
        ul.appendChild(li)
    }

    // add a table to display what the kitten is good with
    const table = document.createElement("table")
    article.appendChild(table);

    // add the header row

    const headerRow = document.createElement("tr")
    table.appendChild(headerRow);

    // add the table header cell
    const kidsHeaderCell = document.createElement("th")
    kidsHeaderCell.textContent = "Kids";
    headerRow.appendChild(kidsHeaderCell);

    const dogsHeaderCell = document.createElement("th")
    dogsHeaderCell.textContent = "Dogs";
    headerRow.appendChild(dogsHeaderCell);

    const catsHeaderCell = document.createElement("th")
    catsHeaderCell.textContent = "Cats";
    headerRow.appendChild(catsHeaderCell);

    // add the data rows
    const dataRow = document.createElement("tr")
    table.appendChild(dataRow)

    // add data cell
    const kidsData = document.createElement("td")
    kidsData.textContent = this.isGoodWithKids;
    dataRow.appendChild(kidsData);

    const dogsData = document.createElement("td")
    dogsData.textContent = this.isGoodWithDogs;
    dataRow.appendChild(dogsData);

    const catsData = document.createElement("td")
    catsData.textContent = this.isGoodWithCats;
    dataRow.appendChild(catsData);

    // add the cats image
    const image = document.createElement("img")
    image.setAttribute("src", this.imageUrl)
    image.setAttribute("alt", `${this.name} profile slot.`)
    article.appendChild(image)
}

// this will be hoisted to the top and run
function randomAge(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const pip = new Kitten("pip", ["cuddling", "chasing string", "catnip"], true, false, true, "pip.jpg");


const ginger = new Kitten("giner", ["sipping milk", "chasing cars", "sun napping"], true, true, false, "ginger.jpg" )

const bugsy = new Kitten("bugsy", ["dreamies", "chasing mice", "napping"], true, true, false, "bugsy.jpg" )


console.log(ginger);
console.log(pip);
console.log(bugsy);
// bugsy.render();
// bugsy.meow();