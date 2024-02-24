/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
  
    wasExpensive() {
      return this.budget > 100000000;
    }
  }
  
  const avengers = new Movie('Avengers: Endgame', 'Anthony Russo, Joe Russo', 356000000);
  // console.log(avengers);
  // console.log(avengers.wasExpensive()); 
  
  const indieFilm = new Movie('Indie Film', 'Independent Director', 5000000);
  // console.log(indieFilm);
  // console.log(indieFilm.wasExpensive()); 
  