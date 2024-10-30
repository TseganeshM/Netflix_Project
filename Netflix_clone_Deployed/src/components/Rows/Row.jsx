import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../Utility/axios";
import "./Row.css";
import { height } from "@mui/system";

function Row({ fetchUrl, title, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseImg = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(fetchUrl);
        //   console.log(response);
        const data = response.data;

        setMovies(() => data.results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [fetchUrl]);

  //   console.log(movies);

  const handleTrailer = function (movie) {
    const name = movie?.name || movie?.title || movie?.original_name;

    //  if (trailerUrl) setTrailerUrl('');

    (async () => {
      try {
        const url = await movieTrailer(name);
        //  console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        //  console.log(new URL(url));

        console.log(urlParams.get("v"));
        setTrailerUrl(() => (trailerUrl ? "" : urlParams.get("v")));
      } catch (err) {
        console.error(err);
      }
    })();
  };

  //   console.log(trailerUrl);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <section className="row__section mt-5">
        <h2>{title}</h2>
        <div className="row">
          {movies?.map((movie) => (
            <div className="row__col" key={movie.id}>
              <div
                style={{ cursor: "pointer" }}
                className="div-img"
                onClick={() => handleTrailer(movie)}
              >
                <img
                  src={`${baseImg}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name || movie.title}
                  className={`row__posture${
                    isLarge ? " row__posture--large" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
      </section>
    </>
  );
}

export default Row;
