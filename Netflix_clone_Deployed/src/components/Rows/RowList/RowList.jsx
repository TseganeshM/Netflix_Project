import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utility/requests";

function RowList() {
  return (
    <>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentary} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default RowList;
