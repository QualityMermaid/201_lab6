"use strict"
console.log("Using script for lab06")

// problem domain: Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach propective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's projile on their website. They need a better way.


// Each kitten's profile should have:
// - Name
// - random age assigned
// - a list of what they like
// - an Image
// - good with kids
// - good with dogs
// - good with other cats

//{} objects are inside these bracets. what makes them this veriable. Create a list of key value pairs
// key: value, key:value, key:value,
const cat = {
    name: "Bugsy",
    age: 8,
    interests: ["cuddling", "fresh catnip", "dreamies"],
    isGoodWithKids: true,
    isGoodWithDogs: true,
    isGoodWithCats: false,
    // number: function(){
    //     console.log(7);
    // },
    getAge: function(){
        // this.XXX is a keyword when used inside an object its referencing the object used, in this case cat, cat.age
        // console.log(this.age)
        this.age = randomAge(3, 11) + " months"
    }
};


// console.log(cat);
// console.log(cat["isGoodWithCats"]);

// updated the key value pairs of the object
// cat.age = 3
cat["name"] = ["Pip"]
// console.log(cat)

// added new key value pairs to the object
cat.hasClaws = true;
cat["breed"] = "Siamese"
// console.log(cat)

// invoke /call the method inside the function
// cat.number();

function randomAge(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

cat.getAge();
// console.log(cat);



// DOM Manipulation

// Get an element by its id and store it in a variable named parentElement
const parentElement = document.getElementById("kittenProfiles");
console.log(parentElement);

const article = document.createElement("article");
parentElement.appendChild(article);

const h3 = document.createElement("h3")
h3.textContent = cat.name;
article.appendChild(h3);

const p = document.createElement("p")

// two ways of creating text string below

// p.textContent = cat.name + " is adorable. She is " + cat.age + " old."
p.textContent = `${cat.name} is adorable! She is ${cat.age} old`
article.appendChild(p);

const ul = document.createElement("ul")
article.appendChild(ul);

// for (initialization, condition , after thought)
for (let i = 0; i < cat.interests.length; i++){
    const li = document.createElement("li")
    li.textContent = cat.interests[i];
    ul.appendChild(li)
};

const img = document.createElement("img");
img.setAttribute("src", "images/" + cat.name + ".jpg");
img.setAttribute("alt", cat.name + " Looking great");
article.appendChild(img);

