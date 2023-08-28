import React, { Component } from 'react'; // Importe a classe Component do React

import './posts.css';
import { PostCard } from '../postCard';
import { loadPosts } from '../functionsjs/loadposts';
import { Button } from '../Button';
import { InputBusca } from '../InputBusca';

export class Posts extends Component {

    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 8,
      searchValue:'',
    };
    async componentDidMount() {
      await this.loadPosts();
    }
    loadPosts = async () => {
      const { page, postsPerPage } = this.state;

      const postsPhotos = await loadPosts();
      this.setState({
        posts: postsPhotos.slice(page, postsPerPage),
        allPosts: postsPhotos,
      });
    };
    loadMorePosts = () => {
      const {
        page,
        postsPerPage,
        allPosts,
        posts
      } = this.state;
      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice( nextPage, nextPage + postsPerPage)
      posts.push( ...nextPosts );
      this.setState({ posts, page: nextPage })

      console.log( page, postsPerPage, nextPage, nextPage + postsPerPage)
    };
    handleChange = (e) => {
      const {value} = e.target;
      this.setState({ searchValue: value});
    }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filtroPosts = !!searchValue ? 
    allPosts.filter(post=>{
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    }) 
    : posts;
    
    return (
      <>
      <section className="container_section">
        
            <div className="posts_componentes">

                  {!!searchValue &&(
                    <h1 className='inputbusca'> Texto da busca: { searchValue } </h1>
                  )}

            </div>

            {/* COMPONENTE INPUT COM EXPORT FUNCAO */}

            <InputBusca 
              searchValue={searchValue} 
              handleChange={this.handleChange}
            />


            
            <div className="posts">

              {filtroPosts.length > 0 &&(

                filtroPosts.map((post) => (
                  <PostCard
                    title={post.title}
                    body={post.body}
                    key={post.id}
                    cover={post.cover}
                  />
                ))

              )}

              {filtroPosts.length === 0 &&(

              <div className="posts_componentes">

                  <p className='inputbusca'> Não foi encontrado posts com essa palavra</p>

              </div>

              )}



            </div>

            <div className="posts">

                  {/* COMPONENTE BOTAO COM EXPORT CLASS COMPONENTE */}

                  {!searchValue &&(
                    <Button text="carregar mais posts" 
                      onClick={this.loadMorePosts}
                      disabled={noMorePosts}
                    />
                  )}

            </div>

      </section>


      </>
    );
  }
}
