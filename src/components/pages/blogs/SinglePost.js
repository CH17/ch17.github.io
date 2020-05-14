import React, { Component } from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';


class SinglePost extends Component {
    render() {
        return (
            <div className="w-full shadow-md mx-6 my-10 px-2 py-2">

                <div className="flex">
                <h3 className="mb-2 flex-0"> 
                    <a  href="/blog/{{ this.props.post.slug }}" 
                        className="block mt-1 text-xl leading-tight font-heading text-gray-900 hover:text-blue-700">
                        { ReactHtmlParser(this.props.post.title) }
                    </a>
                </h3>
                    <h5 className="flex-1 text-right text-blue-800">{ moment(this.props.post.date).format('DD MMM YYYY') } </h5>
                </div> 
                   <div className="mt-6 text-gray-700">
                   { ReactHtmlParser( this.props.post.excerpt ) }
                   </div>
                 
                  <div className="text-right my-4">
                    <a href="/blog/{{ this.props.post.slug }}" className="font-semibold bg-white hover:bg-gray-100 text-gray-800 shadow-md py-3 px-6">Read More</a>
                  </div>
            </div>
        );
    }
}

export default SinglePost;