import { useEffect, useState } from "react";
import axios from "../../Utility/axios";
import requests from "../../Utility/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(requests.fetchNetflixOriginals);
        console.log(result);
        const data = result.data;

        setMovie(
          () => data.results[Math.floor(Math.random() * data.results?.length)]
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  console.log(movie);

  function truncate(str, num) {
    return str?.length > num ? str.slice(0, num - 1) + "...." : str;
  }

  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="banner__content">
          {" "}
          <h2 className="banner__title">{movie?.name}</h2>
          <p className="banner__dec">{truncate(movie?.overview, 150)}</p>
          <button className="button btn bg-light">Play</button>
          <button className="button btn bg-dark text-light ms-4">MyList</button>
        </div>
      </section>
    </>
  );
}

export default Banner;
