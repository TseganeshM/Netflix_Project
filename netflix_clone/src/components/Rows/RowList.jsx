import requests from "../../../utils/requests";
import Row from "./Row";

const rowOptions = [
  {
    url: requests.fetchNetflixOriginals,
    type: "Netflix Originals",
    isLarge: true,
  },
  {
    url: requests.fetchTrending,
    type: "Trending",
  },
  {
    url: requests.fetchTopRatedMovies,
    type: "Top Rated",
  },
  {
    url: requests.fetchActionMovies,
    type: "Action Movies",
  },
  {
    url: requests.fetchComedy,
    type: "Comedy",
  },
  {
    url: requests.fetchHorror,
    type: "Horror Movies",
  },
  {
    url: requests.fetchRomance,
    type: "Romance Movies",
  },
  {
    url: requests.fetchDocumentary,
    type: "Documentary Movies",
  },
  {
    url: requests.fetchTvShow,
    type: "Tv Show",
  },
];

function RowList() {
  return (
    <>
      {rowOptions.map((detail) => (
        <Row
          key={detail.type}
          fetchUrl={detail.url}
          title={detail.type}
          isLarge={detail.isLarge}
        />
      ))}
    </>
  );
}

export default RowList;
