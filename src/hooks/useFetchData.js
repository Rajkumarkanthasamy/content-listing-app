import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (page) => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
        setData(prev => [...prev, ...response.data.page['content-items'].content]);
        if (response.data.page['content-items'].content.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  return { data, hasMore };
};

export default useFetchData;
