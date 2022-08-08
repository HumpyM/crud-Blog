import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const getstoredData = () => {
    const storeddata = localStorage.getItem("data")
    if(storeddata){
      return JSON.parse(storeddata);
    }
    else{
        localStorage.setItem("data", JSON.stringify([]))
        return []
    }
  }

  const [blogs, setData] = useState(() => getstoredData());

  const addProduct = () => {
    // let blogcopy = [...blogs];
    // blogcopy.push({title: "Good Blog"})
    // localStorage.setItem("data", JSON.stringify(blogcopy));
    // window.location.reload();
    navigate('/createblog');
  }
  
  
  return (
    <div className="App">
      <button onClick={addProduct}>Add Blog</button>
      {blogs.length!==0 && (blogs.map((blog) => {
        return(
          <div>
            {blog.title}
          </div>
        );
        }))
      }
    </div>
  );
}

export default Home;