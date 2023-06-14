import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              year={m.year}
              coverImg={m.medium_cover_image}
              title={m.title}
              summary={m.summary}
              genres={m.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
