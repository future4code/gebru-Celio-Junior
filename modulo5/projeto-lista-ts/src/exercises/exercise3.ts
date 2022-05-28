enum GENRE {
  ACTION="ação",
  DRAMA="drama",
  COMEDY="comédia",
  ROMANCE="romance",
  HORROR="terror"
}

type Movie = {
  name: string,
  releaseYear: number,
  genre: GENRE,
  score?: number
}

const exercise3 = (name: string, releaseYear: number, genre: GENRE, score?: number): Movie => {

  const movieInfo: Movie = {
    name,
    releaseYear,
    genre,
    score
  }

  return movieInfo

}

console.log(exercise3('Os miseráveis', 2012, GENRE.DRAMA, 9.3))