const rootEndpoint = "http://localhost/mymovies-api/api.php/records";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const getAllMovies = () =>
  fetch(`${rootEndpoint}/movie/`, { headers })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.records)
    .catch(error => {
      console.log(error);
    });
