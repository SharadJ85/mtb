/**
 * TmdbUrl contains the default API url for 'The Movie DataBase' site
 * @UrlMethods
 * @method baseURL: default URL
 * @method genre: type:- | 0: movie| 1: tv
 * @method mediaType: type:- | movie | tv_show | person
 * @method generalFeatures: type:- | popular | now_playing | top_rated | 3: upcoming | 4: airing_today | 5: on_the_air
 * @method movieID: movie ID number
 * @method apiKey: user API ky to access the TMDB database
 * @method page: generalFeatures(0) page number
 */

export default class TmdbApiUrl {
  /**
   * returns baseURL=https://api.themoviedb.org/3/
   */
   baseURL() {
    return "https://api.themoviedb.org/3/";
  }

  /**
   * returns imageURL="http://image.tmdb.org/t/p/(-type-)"
   * @param imageSize | 0: original | 1: w500
   */
   imageURL(imageSize) {
    const size = ["original", "w500","w780"];
    return `http://image.tmdb.org/t/p/${size[imageSize]}`;
  }

  /**
   * returns searchURL="https://api.themoviedb.org/3/search/(-type-)"
   * @param type | 0: multi |
   */
  searchURL(type) {
    const types= ["multi"];
    return `https://api.themoviedb.org/3/search/${types[type]}`;
  }

  /**
   * returns genre list
   * @param type | 0: genre/movie/list | 1: genre/tv/list
   */
  genres(type) {
    const genre = ["genre/movie/list", "genre/tv/list"];
    return genre[type]
  }

  /**
   * returns type
   * @param type | 0: movie | 1: tv | 2: person
   */
  mediaType(type) {
    const media = ["movie", "tv", "person"];
    return media[type]
  }

  /**
   * returns type
   * @param type | 0: upcoming | 1: now_playing | 2: top_rated | 3: popular | 4: airing_today | 5: on_the_air
   */
  generalFeatures(type) {
    const feature= ["upcoming", "now_playing", "top_rated", "popular", "airing_today", "on_the_air"];
    return feature[type];
  }

  /**
   * returns "?api_key=(--the user API_KEY stored in ".env" file--)"
   */
   apiKey() {
    return ("?api_key=" + process.env.REACT_APP_API_KEY);
  }

  /**
   * returns "&page=${pageNo}"
   * @param pageNo
   */
   page(pageNo) {
    return (`&page=${pageNo}`);
  }
}