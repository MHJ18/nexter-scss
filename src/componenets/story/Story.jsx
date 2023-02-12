import React from "react";
import "./story.scss";
import StoryContent from "./StoryContent";
const Story = () => {
  return (
    <>
      <div className="main">
        <img src="story-1.jpeg" alt="" className="img-1" />
        <img src="story-2.jpeg" alt="" className="img-2" />
      </div>
      <StoryContent />
    </>
  );
};

export default Story;
