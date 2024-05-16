import shaw from "./assets/shaw.mp4"
import godfather from "./assets/godfather.mp4"
import darknight from "./assets/darknight.mp4"
import pulp from "./assets/pulp.mp4"
import schnidler from "./assets/schnidler.mp4"
import forrest from "./assets/forrest.mp4"
import inception from "./assets/inception.mp4"
import matrix from "./assets/matrix.mp4"
import silence from "./assets/silence.mp4"
import lord from "./assets/lord.mp4"


const movies = [
    {
        name: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        maker: "Frank Darabont",
        category: "Drama",
        rating: 9.3,
        video: shaw

    },
    {
        name: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        maker: "Francis Ford Coppola",
        category: "Crime",
        rating: 9.2,
        video: godfather

    },
    {
        name: "The Dark Knight",
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        maker: "Christopher Nolan",
        category: "Action",
        rating: 9.0,
        video: darknight

    },
    {
        name: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        maker: "Quentin Tarantino",
        category: "Crime",
        rating: 8.9,
        video: pulp

    },
    {
        name: "Schindler's List",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        maker: "Steven Spielberg",
        category: "Biography",
        rating: 8.9,
        video: schnidler

    },
    {
        name: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        maker: "Robert Zemeckis",
        category: "Drama",
        rating: 8.8,
        video: forrest

    },
    {
        name: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        maker: "Christopher Nolan",
        category: "Action",
        rating: 8.8,
        video: inception

    },
    {
        name: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        maker: "The Wachowskis",
        category: "Action",
        rating: 8.7,
        video: matrix

    },
    {
        name: "The Silence of the Lambs",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        maker: "Jonathan Demme",
        category: "Crime",
        rating: 8.6,
        video: silence

    },
    {
        name: "The Lord of the Rings: The Return of the King",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        maker: "Peter Jackson",
        category: "Adventure",
        rating: 8.9,
        video: lord

    }
];
export default movies;