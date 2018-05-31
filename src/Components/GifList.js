import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
import NoGifs from "./NoGifs";

const GifList = props => { 

  const results = props.data;

  const gifs = results.length > 0 ?
    results.map(gif =>
      <Gif key={gif.id} url={gif.images.fixed_height.url} />
    )
    :
    <NoGifs/>;

  return (
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
};

GifList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GifList;
