import React, { Component } from 'react';
import SingleProject from './projects/SingleProject';

import data from '../../data/projects.json';

export default class PetProjects extends Component {
  
  render() {
    return (
      <section className="py-12 px-4 text-left">
                             
      <div className="mx-auto">        
        <h3 className="uppercase text-xl mb-4 text-right text-gray-700 font-heading font-bold">Pet Projects</h3>
        <hr/>
          <div className="mt-4 mb-8">
            <p className="mt-2 text-gray-800">
              <span className="font-bold">Disclaimer: </span> Unfortunately, I can’t really share my actual projects because of confidentiality, NDA and bla bla. But I work on some pet projects with my free time even though the definition of free time is little bit complicated for someone like me who has a full time job, a family with an adorable little kid and specially who loves new movies and TV shows.   
            </p>
          </div>

          {data.map((project, index) => {
              return <SingleProject key={index} project = {project} />
          })}
       </div>   
    </section>
    );
  }
}