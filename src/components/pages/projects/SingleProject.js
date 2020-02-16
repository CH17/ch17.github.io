import React, { Component } from 'react';

import RepoURL from './RepoURL';
import Tools from './Tools';
import Features from './Features';


class SingleProject extends Component {
    render() {
        return (
            <div className="w-full shadow-lg mx-6 my-10 px-2 py-2"> 
                <div className="flex">
                    <div className="flex-1"> 
                        <h3 className="mt-1 uppercase tracking-wide text-xl leading-tight text-blue-800 font-bold">
                            {this.props.project.title}
                        </h3>
                    </div>          
                    
                    <RepoURL url={this.props.project.url} />
                </div>

                <div className="text-gray-800 leading-relaxed mx-2 my-6">
                    {this.props.project.description}
                </div>

                <h3 className="text-gray-800 mt-2 mb-2 font-bold">Features</h3>  
                    <Features features = { this.props.project.features} />
             
                <div className="mt-4">
                        <Tools tools= {this.props.project.tools} />
                </div>                    
            </div> 
        );
    }
}

export default SingleProject;