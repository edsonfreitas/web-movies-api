import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Movie, MovieList, Slider } from "./styles";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);
  const [termo, setTermo] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_SECRET_KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  if (!movies || !movies.length) return null;

  return (
    <Container>
      <h1>Filmes em cartaz</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setTermo(e.target.value.toLowerCase())}
          placeholder="Informe o filme"
          className="pesquisa"
        />
      </div>
      <Carousel>
        <Slider className="carousel" ref={carousel}>
          {movies.map((movie) => {
            return (
              <Movie key={movie.id}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Movie>
            );
          })}
        </Slider>
        <section>
          <button class="rotate" onClick={handleLeftClick}>
            <img src="./img/arrow-right.png" />
          </button>
          <button onClick={handleRightClick}>
            <img src="./img/arrow-right.png" />
          </button>
        </section>
      </Carousel>
      <MovieList>
        {movies
          .filter((obj) => obj.title.toLowerCase().includes(termo))
          .map((movie) => {
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
