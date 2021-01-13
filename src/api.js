// Base Urls
const baseUrl = `https://api.themoviedb.org/3/`;
const config = "configuration";
const apiFirst = "?";
const apiSec = "&";
const api = `api_key=`;
//const api = `api_key=${process.env.API_KEY}`;
const imageBaseUrl = "http://image.tmdb.org/t/p/";
const imageBaseSecureUrl = "https://image.tmdb.org/t/p/";
// paths
//  movie
//  tv
const tvAirToday = "tv/airing_today";
const tvOnAir = "tv/on_the_air";
const tvPopular = "tv/popular";
const tvTopRated = "tv/top_rated";
//   people
const peoplePopular = "person/popular";

// urls
// getImage : Will return as a string an url with the correct format to get the image, after being provided with the size ( selected by the image sizing below) and Image file name
export const getImage = (size, image) => {
  return `${imageBaseSecureUrl}${size}/${image}`;
};

export const getPopularMovies = `${baseUrl}discover/movie?sort_by=popularity.desc${apiSec}${api}`;
// Tv
export const getTvAirToday = `${baseUrl}${tvAirToday}${apiFirst}${api}`;
export const getTvOnAir = `${baseUrl}${tvOnAir}${apiFirst}${api}`;
export const getPopularTv = `${baseUrl}${tvPopular}${apiFirst}${api}`;
export const getTopRatedTv = `${baseUrl}${tvTopRated}${apiFirst}${api}`;
// people
export const getPopularPeople = `${baseUrl}${peoplePopular}${apiFirst}${api}`;
// Image Sizing
export const backdrop_sizes = ["w300", "w780", "w1280", "original"];
export const logo_sizes = [
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original",
];
export const poster_sizes = [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original",
];
export const profile_sizes = ["w45", "w185", "h632", "original"];
export const still_sizes = ["w92", "w185", "w300", "original"];
export const change_keys = [
  "adult",
  "air_date",
  "also_known_as",
  "alternative_titles",
  "biography",
  "birthday",
  "budget",
  "cast",
  "certifications",
  "character_names",
  "created_by",
  "crew",
  "deathday",
  "episode",
  "episode_number",
  "episode_run_time",
  "freebase_id",
  "freebase_mid",
  "general",
  "genres",
  "guest_stars",
  "homepage",
  "images",
  "imdb_id",
  "languages",
  "name",
  "network",
  "origin_country",
  "original_name",
  "original_title",
  "overview",
  "parts",
  "place_of_birth",
  "plot_keywords",
  "production_code",
  "production_companies",
  "production_countries",
  "releases",
  "revenue",
  "runtime",
  "season",
  "season_number",
  "season_regular",
  "spoken_languages",
  "status",
  "tagline",
  "title",
  "translations",
  "tvdb_id",
  "tvrage_id",
  "type",
  "video",
  "videos",
];
