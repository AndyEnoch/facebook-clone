import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://media.giphy.com/media/KG5NcXFCICFJY5wGu6/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                title="Andy Enoch"
            /> 
            <Story 
                image="https://media.giphy.com/media/ZCU3YxmmD8lh6savbB/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                title="Andy Enoch"
            /> 
            <Story 
                image="https://media.giphy.com/media/QEekimBnmVLGw/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                title="Andy Enoch"
            /> 
            <Story 
                image="https://media.giphy.com/media/KG5NcXFCICFJY5wGu6/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                title="Andy Enoch"
            /> 
            <Story 
                image="https://media.giphy.com/media/KG5NcXFCICFJY5wGu6/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                title="Andy Enoch"
            /> 
            {/* <Story 
                image="https://media.giphy.com/media/KG5NcXFCICFJY5wGu6/giphy.gif"
                profileSrc="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg"
                title="Andy Enoch"
            />  */}
        </div>
    )
}

export default StoryReel
