import React, { Component } from 'react';

import SinglePost from './blogs/SinglePost';

export default class Blog extends Component {


  constructor() {
    super();
    this.state = { 
      posts: [],
      isLoading: true,
      totalPost: 0,
      displayPost:0
    };
  }

  async componentDidMount() {

    const url = "https://public-api.wordpress.com/rest/v1.1/sites/dotcomdotbd.wordpress.com/posts/";
    
    const response = await fetch(url);
    const json = await response.json();

   

    this.setState({ 
        posts: json.posts,
        isLoading: false,
        totalPost: json.found,
        displayPost: this.state.displayPost +  json.posts.length  
    });

  }


  render() {
    return (

      
      <section className="py-12 px-4 text-left">
                          
      <div className="mx-auto">        
        <h3 className="uppercase text-xl mb-4 text-right text-gray-700 font-heading font-bold">Writings</h3>
        <hr/>
        <div className="ml-2">

          { this.state.isLoading  ? ( <div className=" text-center font-bold my-10 mx-6"> Loading... </div> ) :
            ( this.state.posts.map((post, index) => {
              return <SinglePost post= { post } key= { index }/>
            }))
          }

          { this.state.displayPost < this.state.totalPost ? (
          <div className="text-center mt-4">
              <a href="//" className="font-semibold bg-indigo-400 hover:bg-indigo-600 text-gray-800 shadow-md py-3 px-10">Load More</a>
          </div>) : ''}
        </div>
      </div>
   
    </section>
    );
  }
}
