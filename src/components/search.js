import React, {useEffect, useState} from 'react';
import SearchActorCard from "./partials/searchActorCard";
import Navigation from "./partials/nav";
import Pagination from "./partials/pagination";
import SearchAction from "../actions/searchAction";
import {connect} from "react-redux";
import {Fade} from "react-reveal";
import LoadingSpinner from "./partials/loadingSpinner";
import SearchMovieTvCard from "./partials/searchMovieTvCard";

const Search = ({match, search, searchKeywords, searching, searchSuccess, searchData, pageNo, searchFailure, searchError}) => {
  useEffect(() => {
    search()
    document.title=`MTB: search '${searchKeywords?searchKeywords:``}'`
  },[pageNo]);

  return (
    <div className="searchList">
      <Navigation />
      {!searching
        ? (<div className="container-fluid">
          {searchSuccess
            ? (<div className="container-fluid">
              <div>
                {searchData.page && searchData.results.length > 0
                  ? <div className="container-fluid">
                    {searchData.results.map(each => (
                      each.media_type === `person`
                        ?
                        <SearchActorCard personId={each.id} name={each.name} knownFor={each.known_for}
                                         department={each.known_for_department}
                                         posterPath={each.profile_path} />
                        : <SearchMovieTvCard mediaId={each.id} name={each.title || each.name}
                                             posterPath={each.poster_path} media={each.media_type}
                                             ratings={each.vote_average} date={each.release_date || each.first_air_date}
                                             overview={each.overview} />

                    ))}
                    <div className="my-4 py-4">
                      <Pagination totalPages={searchData.total_pages}
                                  media={match.params.query}
                                  pageId={match.params.pageId}
                                  pageType={`search`} />
                    </div>
                  </div>
                  : <div className="container InvalidKeywords">
                    <h3 className="text-white-50 text InvalidKeywordsText">
                      Search Keyword '<strong className="text-white">{searchKeywords}</strong>'Unavailable
                    </h3>
                  </div>
                }
              </div>
            </div>)
            : null}
          {searchFailure
            ? <div className="container text-center font-weight-bold">
              <div className="my-5 py-5 text-danger" style={{fontSize: "2rem"}}>
                {searchError.message}
              </div>
            </div>
            : null}
        </div>)
        : (<div className="container text-center" style={{padding: "10rem"}}>
          <Fade duration={400}>
            <LoadingSpinner />
          </Fade>
        </div>)
      }
    </div>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: () => dispatch(SearchAction(ownProps.match.params.query, ownProps.match.params.pageId))
  }
};

const mapStateToProps = (state,ownProps) => {
  return {
    searchKeywords: ownProps.match.params.query,
    searching: state.Search.isSearching,
    searchSuccess: state.Search.isSearchingSuccess,
    searchData: state.Search.searchDataFetch.res,
    pageNo: ownProps.match.params.pageId,
    searchFailure: state.Search.isSearchingFailure,
    searchError: state.Search.searchDataFetch.error,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);