import styles from "../../styles/home.module.css";
import Movie from "../../components/movie.tsx";
import { API_URL } from "../../constant.ts";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(API_URL).then((res) => res.json());
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map(
        (movie: { id: string; title: string; poster_path: string }) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        )
      )}
    </div>
  );
}
