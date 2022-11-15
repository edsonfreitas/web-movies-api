import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Movie, MovieList} from "./styles";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);
  const [termo, setTermo] =useState('')
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Filmes em cartaz</h1>
      <div>
        <input type="text" onChange={e => setTermo(e.target.value)}     placeholder="Informe o filme" className="pesquisa" /> 
      </div>
      <MovieList>
        {movies.filter(obj => obj.title.toLowerCase().includes(termo)).map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
