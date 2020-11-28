import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  const [visibleStory, toggleVisibleStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const findStory = findStoryById(story.id);
    const profileData = getUserHandler(story.userId);

    setSelectedProfile(profileData);
    setSelectedStory(findStory);
    toggleVisibleStory(!visibleStory);
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          <h1>stories</h1>
        </div>
      </section>

      {visibleStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          onClose={() => toggleVisibleStory(!visibleStory)}
        />
        )}
    </React.Fragment>
  );
};

export default Stories;
