import React, {useEffect} from 'react';
import "../assets/mediaList.sass"
import Navigation from "./partials/nav";
import MediaCard from "./partials/mediaCard";
import Pagination from "./partials/pagination";
import MatchParamsWithUrlType from "./partials/matchParamsWith"
import {connect} from "react-redux";
import {Fade, Zoom} from "react-reveal";
import LoadingSpinner from "./partials/loadingSpinner";

const MediaList = (props) => {
  useEffect(() => {
    props.fetchUrlData()
  });

  return (
    <div className="mediaList">
      <Navigation />
      {props.mediaData
        ? props.mediaData.results
          ?
          (<div>
            <div className="list m-5 d-flex flex-wrap justify-content-around">
              {props.mediaData.results.map(media => (
                <div className="m-5">
                  <Zoom duration={400}>
                    <MediaCard
                      mediaId={media.id}
                      mediaType={props.match.params.media}
                      posterPath={media.poster_path || media.profile_path}
                      ratingValue={media.vote_average}
                      year={(media.release_date || media.first_air_date)}
                      title={media.title || media.name}
                      overview={media.overview} />
                  </Zoom>
                </div>
              ))}
            </div>
            <div className="pb-4">
              <Pagination pageType={`media_list`}
                          totalPages={props.mediaData.total_pages}
                          media={props.match.params.media}
                          generalType={props.match.params.generalType}
                          pageId={props.match.params.pageId} />
            </div>
          </div>)
          : null
        : (
          <div className="container text-center py-5">
            <Fade duration={400}>
              <LoadingSpinner />
            </Fade>
          </div>
        )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUrlData: () => dispatch(MatchParamsWithUrlType(ownProps.match.params.media, ownProps.match.params.generalType, ownProps.match.params.pageId)),
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    mediaData: state[ownProps.match.params.media.replace(/^./, ownProps.match.params.media[0].toUpperCase())][ownProps.match.params.generalType],
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);