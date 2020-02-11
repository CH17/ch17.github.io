import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>           
        <section className="py-12 px-4 text-left">
               
      <div className="max-w-2xl mx-auto">

          <h2 className="text-4xl mb-8 font-heading">Reprehenderit in Voluptate</h2>

      

          <div className="text-left mt-8 mb-6">
              <button className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-gray-800 rounded-full"></button>
              <button className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-gray-600 rounded-full"></button>
              <button className="inline-flex items-center justify-center h-3 w-3 mr-2 bg-gray-600 rounded-full"></button>
          </div>
          
          <div className="mb-10">
              <h3 className="text-2xl mb-4 font-heading">Client: Realweb</h3>
              <p className="text-gray-500 leading-relaxed">Great offer, competitive prices, professional service. That’s how
                  I’d remember the Dunder Mifflin. Although I had to switch paper provider, sometimes I really miss Dunder
                  family. I also got gift basket from the team!</p>
          </div>

          <div className="md:flex">
              <div className="md:flex-shrink-0">
                  
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding
                      customers for your new business</a>
                  <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas
                      you can use to find your first customers.</p>
              </div>
          </div>
      </div>
  </section> </div>
    );
  }
}
