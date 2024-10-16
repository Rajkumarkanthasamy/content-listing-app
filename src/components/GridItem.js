import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GridItem = ({ item }) => {
  var imageLink = item['poster-image']
  return (
    <div className="grid-item">
      <LazyLoadImage
        src={`https://test.create.diagnal.com/images/${imageLink}`}
        alt={item.name}
        effect="blur"
        className="grid-image"
      />
      <p>{item.name}</p>
    </div>
  );
};

export default GridItem;
