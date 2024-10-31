import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Utility/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //Stores list of movies fetched from the API.
  const [trailerUrl, setTrailerUrl] = useState(""); //Stores URL of  YouTube trailer
  const [selectedMovie, setSelectedMovie] = useState(null); //movie clicked by the user to show in the modal.
  const [modalVisible, setModalVisible] = useState(false); // Tracks the modal window is visible or not.
  const [trailerAvailable, setTrailerAvailable] = useState(true); //  Tracks  trailer is available for the selected movie.
  const [playerHeight, setPlayerHeight] = useState(getInitialHeight()); // Stores the height for the YouTube player .
  const base_url = "https://image.tmdb.org/t/p/original";

  // Determine the initial height of the YouTube player.
  function getInitialHeight() {
    return window.innerWidth > 768 ? "390" : "290";
  }

  // handle window resize events and update player height.
  useEffect(() => {
    const handleResize = () => {
      setPlayerHeight(getInitialHeight()); // Update height dynamically based on new screen size.
    };

    window.addEventListener("resize", handleResize); // event listener for screen resizing.
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount.
  }, []); // Runs only once during component mounts.

  //Fetching Movie using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };
    fetchData();
  }, [fetchUrl]); //exuted when the fetchUrl changes

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true); // Open the modal
    setTrailerUrl("");
    setTrailerAvailable(true);
  };

  const handlePlayTrailerClick = () => {
    movieTrailer(
      selectedMovie?.title ||
        selectedMovie?.name ||
        selectedMovie?.original_name
    ) //call a package movie-trailer,  to find a YouTube trailer URL.
      .then((url) => {
        //console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        //console.log(urlParams);
        setTrailerUrl(urlParams.get("v"));
        //console.log(urlParams.get("v"));
        setTrailerAvailable(true); // Trailer is available
      })

      .catch(() => {
        setTrailerAvailable(false); // Trailer not available
      });
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedMovie(null);
    setTrailerUrl("");
  };

  const opts = {
    height: playerHeight,
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-plays the trailer when loaded.
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies && movies.length > 0
          ? movies.map((movie) =>
              movie.backdrop_path !== null || movie.poster_path !== null ? (
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow
                      ? movie.poster_path
                      : movie.backdrop_path || movie.poster_path
                  }`}
                  onClick={() => handlePosterClick(movie)}
                />
              ) : null
            )
          : null}
      </div>
      {/* Modal Window */}
      {modalVisible && selectedMovie && (
        <div className="modal__backdrop" onClick={closeModal}>
          <div
            className="modal__content"
            onClick={(event) => event.stopPropagation()} // Prevent modal close on content click.
            style={{
              backgroundImage: `url(${base_url}${selectedMovie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>

            {/* YouTube trailer */}

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            <div className="modal__details">
              <h2>{selectedMovie.title || selectedMovie.name}</h2>
              {trailerUrl ? (
                <p className="playing">Playing Trailer...</p>
              ) : (
                <p>{selectedMovie.overview}</p>
              )}

              {/* Conditionally render the Play Trailer button or "Trailer not available" message */}
              {!trailerUrl && trailerAvailable && (
                <button
                  className="modal__button"
                  onClick={handlePlayTrailerClick}
                >
                  Play Trailer
                </button>
              )}
              {!trailerUrl && !trailerAvailable && (
                <p
                  className="modal__message no_trailer"
                  style={{ color: "white" }}
                >
                  We couldn't find a Trailer.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;
