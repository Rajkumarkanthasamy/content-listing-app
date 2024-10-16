import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import GridItem from './GridItem';
import useFetchData from '../hooks/useFetchData';

const Grid = ({ searchTerm }) => {
  const [page, setPage] = useState(1);
  const { data, hasMore } = useFetchData(page);

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <InfiniteScroll
      dataLength={filteredData.length}
      next={() => setPage(prev => prev + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more content to display</p>}
    >
      <div className="grid-container">
        {filteredData.map(item => (
          <GridItem key={item.id} item={item} imglink={item['poster-image']} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Grid;
