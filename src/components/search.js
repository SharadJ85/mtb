import React from 'react';
import SearchActorCard from "./partials/searchActorCard";
import SearchMovieTvCard from "./partials/searchMovieTvCard";
import Navigation from "./partials/nav";
import Pagination from "./partials/pagination";

const searchKeywordValid=true;
const searchResult=`tv`;


//Temp data
const searchCharacters=`Brad`

// const typeOf=(searchResult)=>{
//   switch(searchResult){
//   case 'actor':return <SearchActorCard/>;
//   case ('movie'||'tv'):return  <SearchMovieTvCard/>;
//   default : return  <div className="container InvalidKeywords">
//                          <h3 className="text-white text InvalidKeywordsText">Search Keyword <br>'<strong>{searchCharacters}</strong>'</br>Unavailable</h3></div>
//   }
// };
const Search=()=> {
    return (
        <div className="searchList">
          <Navigation />
          <div>
            {
              //typeOf(searchResult)
              searchKeywordValid
              ? searchResult===`actor`
                ? <SearchActorCard/>
                : <SearchMovieTvCard/>
              : <div className="container InvalidKeywords">
                <h3 className="text-white text InvalidKeywordsText">Search Keyword <br>'<strong>{searchCharacters}</strong>'</br>Unavailable</h3>
                </div>
            }
          </div>
          <div className="my-4 py-4">
            <Pagination/>
          </div>
        </div>
    );
};

export default Search;