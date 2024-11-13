export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return fetch(URL).then((res) => res.json());
}

export default async function Home() {
  const movies = await getMovies();
  return <h1>Hello!{JSON.stringify(movies)}</h1>;
}
