import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import api from '../../services/api';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id);
  
  useEffect(() => {
    api('users')
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    api(`users/${users[usersFetched].id}/posts`)
      .then((res) => res.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, usersFetched]);

  useEffect(() => {
    api('stories')
      .then((res) => res.json())
      .then(data => {
        setStories(data);
      });
  }, [users]);
  
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <img style={{ opacity: 0.005, width: 100, height: 100 }} src="https://i.imgur.com/7olp7rx.jpg" />
    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && (
        <img style={{ width: 300, height: 300}} src="https://media2.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/source.gif" />
      )}

      {users.length !== usersFetched
        ? (<Loading />)
        : (
          <Posts
            posts={posts}
            getUserHandler={getUserPostById}
          />)
      }
    </div>
    </div>
    </>
  );
};

export default FeedRoute;
