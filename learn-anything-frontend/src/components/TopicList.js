import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopics } from '../api';

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const data = await fetchTopics();
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };
    getTopics();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <div key={topic._id} className="border p-4 rounded-lg shadow-md">
          <Link to={`/topics/${topic._id}`}>
            <h2 className="text-xl font-bold">{topic.name}</h2>
          </Link>
          <p>{topic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TopicList;