import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddPost from "./Pages/AddPost";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import PostPage from "./Pages/PostPage";
import api from "./data/api";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await api.get('/')
        console.log(res.data);
        setBlogs(res.data);
      }
      catch {console.log('Error getting blogs.')}
    }
    getBlogs();
  }, [])

  useEffect(() => {
    if(loading){
      add();
    }
    setLoading(false);
  }, [blogs])
  
  const add = () => {
    try {
      api.put('/', blogs).then(res=> {
        return res
      }).finally(() => setLoading(true))
    } catch (e) {
      console.log(e);
    }
  }
  

  const addPost = async (newPost) => {
    const newId = blogs.length +1;
    let newNew = {...newPost}
    newNew.id = newId.toString();
    setBlogs(prevBlogs => [...prevBlogs, newNew]);
    setLoading(true);
    console.log(newPost);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home blogs={blogs}/>}/>
          <Route path="/add-post" element= { <AddPost blogs={blogs} addPost={addPost}/> }/>
          <Route path="/:id" element={ <PostPage blogs={blogs}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// [
  // {
  //     "id":1,
  //     "imageURL": "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     "title":"parrots",
  //     "author":"Cicero",
  //     "content":"Mauris quam ipsum, facilisis ac luctus quis, laoreet et ante. Maecenas commodo egestas est eu rutrum. Sed in tellus porttitor, commodo urna nec, feugiat elit. Nunc et ultricies sem, ac scelerisque ex. Mauris ullamcorper odio nec lorem commodo, a euismod dolor volutpat. Mauris id cursus dolor. Nullam bibendum suscipit dolor eget rutrum. Donec dignissim massa metus, facilisis ornare magna consequat vitae. Ut faucibus eget neque id aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non mi tempor, commodo quam sed, dictum ligula. Sed non orci ullamcorper, vestibulum elit a, varius magna. Donec aliquet posuere eros, non dapibus quam. Vivamus pellentesque tempor ipsum, id varius eros viverra dignissim. Duis sodales fringilla nunc lacinia vulputate."
  // },
  // {
  //     "id":2,
  //     "imageURL": "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     "title":"chameleon",
  //     "author":"Cicero",
  //     "content":"Mauris quam ipsum, facilisis ac luctus quis, laoreet et ante. Maecenas commodo egestas est eu rutrum. Sed in tellus porttitor, commodo urna nec, feugiat elit. Nunc et ultricies sem, ac scelerisque ex. Mauris ullamcorper odio nec lorem commodo, a euismod dolor volutpat. Mauris id cursus dolor. Nullam bibendum suscipit dolor eget rutrum. Donec dignissim massa metus, facilisis ornare magna consequat vitae. Ut faucibus eget neque id aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non mi tempor, commodo quam sed, dictum ligula. Sed non orci ullamcorper, vestibulum elit a, varius magna. Donec aliquet posuere eros, non dapibus quam. Vivamus pellentesque tempor ipsum, id varius eros viverra dignissim. Duis sodales fringilla nunc lacinia vulputate."
  // }
// ]