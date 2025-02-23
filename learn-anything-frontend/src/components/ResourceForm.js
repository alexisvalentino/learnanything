import React, { useState } from 'react';
import { addResource } from '../api';

const ResourceForm = ({ topicId }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resourceData = { title, url, description, topic: topicId };
      await addResource(resourceData);
      alert('Resource added successfully!');
      setTitle('');
      setUrl('');
      setDescription('');
    } catch (error) {
      console.error('Error adding resource:', error);
      alert('Failed to add resource');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <button type="submit" className="bg-green-500 text-white p-2 w-full">
        Add Resource
      </button>
    </form>
  );
};

export default ResourceForm;