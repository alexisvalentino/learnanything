import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResourceForm from '../components/ResourceForm';

const TopicPage = ({ match }) => {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/topics/${match.params.id}`);
        setTopic(response.data);
      } catch (error) {
        console.error('Error fetching topic:', error);
      }
    };
    fetchTopic();
  }, [match.params.id]);

  if (!topic) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{topic.name}</h1>
      <p>{topic.description}</p>

      <h2 className="text-2xl font-bold mt-8">Resources</h2>
      <ul>
        {topic.resources.map((resource) => (
          <li key={resource._id} className="mt-2">
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {resource.title}
            </a>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">Add a New Resource</h2>
      <ResourceForm topicId={match.params.id} />
    </div>
  );
};

export default TopicPage;