import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      <ul>
        {console.log(movie.genres)}
        {/* {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default Detail;
