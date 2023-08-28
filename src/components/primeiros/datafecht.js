import './App.css';
import { Component } from 'react';


///https://jsonplaceholder.typicode.com/

class App extends Component{

    state = {
      posts:[]
    };

    componentDidMount(){

      this.loadPosts()

    }

    loadPosts = async()=>{
      const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
      const postPhotos = fetch('https://jsonplaceholder.typicode.com/photos');
      const [posts, photos] = await Promise.all([postResponse, postPhotos])
      const postsJson = await posts.json()
      const photosJson = await photos.json()

      const postsPhotos = postsJson.map( (post, index)=>{

        return { ...post, cover:photosJson[index].url }

      })

      this.setState({ posts: postsPhotos })
    }


  render(){
    const { posts } = this.state;
      return (
        <section className='container_section'>
      <div className="posts">

          {posts.map( post => (
            <div key={post.id} className='post_content'>
              <img src={post.cover} alt={post.title} />
              <h3> { post.title } </h3>
              <p> { post.body } </p>
            </div>
          ))}

        </div>
        </section>

      );
  }
}


export default App;
