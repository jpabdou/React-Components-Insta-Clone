/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  const [search, setSearch] = useState("")
  const [liked, setLiked] = useState([])
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
    if (liked.filter(element=> element === postId)>0) {
      const newPosts = posts.map(post=> (post.id === postId) ? {...post, likes: post.likes-1} : post)
      setPosts(newPosts)
      const removeId= (liked.find(element=>element===postId))
      const newLiked = liked.splice(removeId,1)
      setLiked([...newLiked])
    } else {
      const newPosts = posts.map(post=> (post.id === postId) ? {...post, likes: post.likes+1} : post)
      setPosts(newPosts)
      liked.push(postId)
      setLiked([...liked])

    }

    
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
  };

  const searchCall = evt => {
    setSearch(evt.target.value)
  }

  const getPosts = () => {
    const result = posts.filter(entry=> entry.username.includes(search))
    return result
  }


  return (
    <div className='App'>
      <SearchBar searchCall={searchCall}/>
      <Posts likePost={likePost} posts={getPosts()}/>
    </div>
  );
};

export default App;
