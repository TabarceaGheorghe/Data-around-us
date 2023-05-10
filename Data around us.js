let title = "20.000 de leghe sub mari";
console.log(title);
let author = "Jules Verne";
console.log(author);
let year = 1869;
console.log(year);
let isNewerThan2000=false;
console.log(isNewerThan2000);
let age = 2023 - year;
console.log(age);
let characters = ['Pierre','Aronax','Conseil','Nemo','Anderson'];
console.log(characters);
console.log (characters[1]);
console.log (characters[0]);
let favoriteBook = {
    title:"20.000 de leghe sub mari",
    author:"Jules Verne",
    year:1869,
    isNewerThan2000: false,
    characters:['Pierre','Aronax','Conseil','Nemo','Anderson']
    }
    console.log(favoriteBook);
    console.log(favoriteBook.title);
    console.log(favoriteBook.year);
    console.log(favoriteBook.characters[0])
    let favoriteBooks = [{
        title:"20.000 de leghe sub mari",
        author:"Jules Verne",
        year:1869,
        isNewerThan2000: false,
        characters:['Pierre','Aronax','Conseil','Nemo','Anderson'] 
    },{
        title:"Enders Game",
        author:"Orson Scott Card",
        year:1985,
        isNewerThan2000:false,
        characters: ['Ender Wiggin','Valentine Wiggin','Bean,Petra Arkaniaan','Jane']
}
]
console.log(favoriteBooks[1].title);
console.log(favoriteBooks[1].characters[0]);
console.log(favoriteBooks[0].year - favoriteBooks[1].year)
