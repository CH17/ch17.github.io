import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <section className="py-12 px-4 text-left">
                             
      <div className="mx-auto">        
        <h3 className="uppercase text-xl mb-4 text-right text-gray-700 font-heading font-bold">My Profile</h3>
        <hr/>
        
        <div class="w-full shadow-md border-solid border-gray-300 border rounded-md mt-4">            
            <h3 className="px-4 py-2  tracking-wide text-md leading-tight text-blue-800 font-bold">
                Little bit about myslef.
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">!bragging</span> 
            </h3>            
            <hr/>
            <div className="text-gray-800 leading-relaxed m-2 px-4 py-2  ">                
                <p>Even though, for last couple of years I’ve been mostly focused on client communication, team building, system design and planning, I love coding more than anything along with problem solving, algorithmic thinking and leadership. </p>
                <p className="mt-1">I’ve been working as a Full Stack Developer for long time on LAMP Stack with extensive working experience on React and Vue. </p>
            </div>
        </div>

        <div className="flex mt-4">
            <div class="flex-inital shadow-md border-solid border-gray-300 border rounded-md mt-4">            
                <h3 className="px-4 py-2  tracking-wide text-md leading-tight text-blue-800 font-bold">
                   Short Timeline
                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2"> (still young!)</span> 
                </h3>            
                <hr/>
                <div className="flex text-gray-800 leading-relaxed m-2 px-4 py-2  ">                
                    <div className="flex-initial  text-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2006-2010</div> 
                    <div className="flex-auto">Study Computer Science &amp; Engineering</div>     
                </div>

                <div className="flex text-gray-800 leading-relaxed m-1 px-4 py-2  ">                
                    <div className="flex-initial  text-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2011-2015</div> 
                    <div className="flex-auto">Worked with local software companies.</div>     
                </div>

                <div className="flex text-gray-800 leading-relaxed m-1 px-4 py-2  ">                
                    <div className="flex-initial  text-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2015-2020</div> 
                    <div className="flex-auto">Working remotely</div>     
                </div>

                 <div className="flex text-gray-800 leading-relaxed m-1 px-4 py-2  ">                
                    <div className="flex-initial text-center bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2020-~</div> 
                    <div className="flex-auto">Waiting for new challenge.</div>     
                </div>
            </div>

            <div className="ml-2 flex-auto shadow-md border-solid border-gray-300 border rounded-md mt-4">            
                <h3 className="px-4 py-2  tracking-wide text-md leading-tight text-blue-800 font-bold">
                    Things I'm good at
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2"> (beside sleeping)</span> 
                </h3>            
                <hr/>
                
                <ul class="text-gray-800 leading-relaxed list-disc m-2 pl-8">
                        <li>Project Management &amp; Planning</li>
                        <li>PHP, MySQL , Laravel, CI, Symfony 2</li>
                        <li>WordPress, Drupal, Shopify</li>
                        <li>Webpack, gulp, NPM, Agile, Scrum</li>
                        <li>JS, jQuery, Vue Js, React Js</li>
                        <li>RESTful API, MVC, OOP, RDMS, git</li>
                        <li>Linux, AWS, Firebase</li>
                        <li>HTML5, CSS3, Bootstrap</li>
                </ul>
                
            </div>
           
        </div>

         

        <div className="w-full shadow-md border-solid border-gray-300 border rounded-md mt-4">            
            <h3 className="px-4 py-2  tracking-wide text-md leading-tight text-blue-800 font-bold">
                Professional Experience
            </h3>            
            <hr/>
            <div className="text-gray-800 leading-relaxed m-2 px-4 py-2">     
                <div className="flex">           
                    <h4 className="flex-1 font-semibold text-gray-800 leading-relaxed">Full Stack Developer</h4>
                    <div className="flex-none text-right bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Nov 2016 - Present</div> 
                </div>    
                <h5 className="font-semibold text-sm text-gray-800 leading-relaxed">Bucketlist City, Dubai, UAE</h5>
                <p  className="text-gray-800 leading-relaxed py-2">Building tourism platform from ground up to help customers to create personalized destination plans. </p>
            </div>

            <div className="text-gray-800 leading-relaxed m-2 px-4 py-2">     
                <div className="flex">           
                    <h4 className="flex-1 font-semibold text-gray-800 leading-relaxed">Web Application Developer</h4>
                    <div className="flex-none text-right bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Aug 2015 - Oct 2016</div> 
                </div>    
                <h5 className="font-semibold text-sm text-gray-800 leading-relaxed">RealtyBloc Solutions Corp. Vancouver, BC, Canada</h5>
                <p  className="text-gray-800 leading-relaxed py-2">Designed and developed web applications with Canadian Real Estate Association (CREA) Data
Distribution Facility (DDF).</p>
            </div>


        </div>

        <div className="flex mt-4">
            <div class="flex-1 shadow-md border-solid border-gray-300 border rounded-md mt-4">            
                <h3 className="px-4 py-2  tracking-wide text-md leading-tight text-blue-800 font-bold">
                   Too Mainstream yet TRUE
                </h3>            
                <hr/>
                <div class="text-gray-800 leading-relaxed m-2 px-4 py-2  ">                
                    <ul class="text-gray-800 leading-relaxed list-disc  pl-6">
                        <li>Passionate reader</li>
                        <li>Love to take new challenges</li>
                        <li>Like to work with team</li>
                    </ul>
                </div>
            </div>

            <div class="ml-2 flex-1 shadow-md border-solid border-gray-300 border rounded-md mt-4">            
                <h3 className="px-4 py-2  tracking-wide text-md leading-tight text-blue-800 font-bold">
                    Care About
                </h3>            
                <hr/>
                <div class="text-gray-800 leading-relaxed m-2 px-4 py-2  ">                
                    <ul class="text-gray-800 leading-relaxed list-disc pl-6">
                        <li>Friends &amp; Family</li>
                        <li>Community</li>
                        <li>Environment</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="text-center mt-10">
              <a href="https://drive.google.com/open?id=13CwMd1bx8f3rUlN-jS8JXoPaG8P19b_i" 
                 target="_blank"  
                 rel="noopener noreferrer" 
                 className="font-semibold bg-indigo-200 hover:bg-indigo-400 text-gray-800 shadow-md py-3 px-10">Check My Resume</a>
          </div>
      </div>
   
    </section>
    );
  }
}