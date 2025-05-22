
const lower = document.querySelector(" .lowerCase"), 
upper = document.querySelector(" .upperCase"), 
camel = document.querySelector(" .camelCase"), 
pascal = document.querySelector(" .pascalCase"), 
snake = document.querySelector(" .snakeCase"),
kebab = document.querySelector(" .kebabCase"),
trim = document.querySelector(" .trimCase");

let input = document.querySelector(" #entry"), 
string;

input.addEventListener("input", function(event){
    const string = input.value;
    lowercase(string);
    uppercase(string);
    camelcase(string);
    pascalcase(string);
    snakecase(string);
    kebabcase(string);
    trimcase(string);
});

function lowercase(text){
    lower.innerText = text.toLowerCase();
}

function uppercase(text){
    upper.innerText = text.toUpperCase();
}

function camelcase(text){
    let array = text.trim().split(" ");
    let result = array[0] ? array[0].toLowerCase() : "";
    for (let i = 1; i < array.length; ++i) {
        if (array[i].length > 0)
            result += array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    }
    camel.innerText = result;
}

function pascalcase(text){
    let array2 = text.trim().split(" ");
    let result2 = "";
    for (let i = 0; i < array2.length; ++i) {
        if (array2[i].length > 0)
            result2 += array2[i][0].toUpperCase() + array2[i].slice(1).toLowerCase();
    }
    pascal.innerText = result2;
}

function snakecase(text){
    snake.innerText = text.replaceAll(" ", "_");
}

function kebabcase(text){
    kebab.innerText = text.replaceAll(" ", "-");
}

function trimcase(text){
    trim.innerText = text.replaceAll(" ", "");
}