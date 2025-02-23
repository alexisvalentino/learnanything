import React from 'react';
import TopicList from '../components/TopicList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Learn Anything</h1>
      <TopicList />
    </div>
  );
};

export default Home;