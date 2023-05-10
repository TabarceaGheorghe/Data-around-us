let favMovies = [
    {
        title: "Ant-Man and the Wasp:Quantumania",
        year: 2023,
        rating: 6.4,
        description: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
        directors: ["Peyton Reed"],
        writers: ["François Truffaut", "Jean-Luc Godard", "Claude Chabrol"],
        stars: ['Jean-Paul Belmondo', 'Jean Seberg','Daniel Boulanger'],
        genres: ["Aventure,Action"]
    },
    {
        title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
        year: 2010,
        rating: 6.3,
        description: "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader. Along the way they encounter dragons, dwarves, merfolk, and a band of lost warriors before reaching the edge of the world.",
        directors: ["Michael Apted"],
        writers: ['Michael Apted','Andrew Adamson','Philip Steuer'],
        stars: ['Georgie Henley','Skandar Keynes','Ben Barnes','Will Poulter','Tilda Swinton'],
        genres: ['Aventure','Romance']
    },
    {
        title: "Venom: Let There Be Carnage",
        year: 2021,
        rating: 5.9,
        description: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
        directors: ["Andy Serkis"],
        writers: ["Andy Serkis"],
        stars: ['Tom Hardy','Michelle Williams','Naomie Harris','Reid Scott','Stephen Graham','Woody Harrelson'],
        genres: ["Comedy", "Crime", "Drama"] },
    {
        title: "Dead Man",
        year: 1995,
        rating: 7.5,
        description: "On the run after murdering a man, accountant William Blake encounters a strange aboriginal American man named Nobody who prepares him for his journey into the spiritual world.",
        directors: ["Jim Jarmusch"],
        writers: ["Jim Jarmusch"],
        stars: ['Johnny Depp','Gary Farmer','Crispin Glover'],
        genres: ['Adventure','Drama','Fantasy']
    }
]
console.log(favMovies[0].title);
console.log(favMovies[1].year);
console.log(favMovies[2].rating);
console.log(favMovies[3].description);

console.log("The first movie's title is: " + favMovies[0].title);
console.log("The second movie's release year is: "+ favMovies[1].year);
console.log("The third movie's IMDB rating is: "+ favMovies[2].rating);
console.log("The fourth movie's short description is: "+ favMovies[3].description);

console.log("The first movie's lead director is: " + favMovies[0].directors[0]);
console.log("The second movie's lead writer is: "+ favMovies[1].writers[0]);
console.log("The third movie's lead star is: "+ favMovies[2].stars[0]);
console.log("The fourth movie's main genre is: "+ favMovies[3].genres[0]);

let averageRating = (favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating) / 4;
console.log("The average rating is: " + averageRating);

let averageAge = (2023 - favMovies[0].year + 2023 - favMovies[1].year + 2023 - favMovies[2].year + 2023 - favMovies[3].year) / 4;
console.log("The average age is: " + averageAge);