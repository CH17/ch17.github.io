import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      
      <section className="py-12 px-4 text-left">
                             
        <div className="mx-auto">        
          <h3 className="uppercase text-xl mb-4 text-right text-gray-700 font-heading font-bold">Contact Me</h3>
          <hr/>
          <div className="mt-4 md:mt-2 md:ml-6">
              <p className="mt-2 text-gray-800">Sorry that you have to click a whole new tab to get just an email address. But it’s to let you know, I’m easy to access and you can drop me a line with anything at all. </p>
                
                <a href="mailto:contact.choyon@gmail.com" class="block mt-4 leading-tight font-semibold text-gray-600 hover:underline">
                  contact.choyon[at]gmail[dot]com
                </a>
            </div>
        </div>
     
    </section>
    );
  }
}
