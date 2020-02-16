import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <div className="bg-white w-full lg:text-right shadow-sm py-5 sticky top-0">

           <nav className="block mt-4">
                <NavLink to="/" className="outline-none text-gray-800 hover:text-blue-700" activeClassName='text-gray-900' >
                    <span className="block lg:inline-block lg:mt-0 mr-10 text-lg ">
                        Home
                    </span>
                </NavLink>
                <NavLink className="outline-none text-gray-800 hover:text-blue-700" activeClassName='text-gray-900' to="/profile">
                    <span className="block lg:inline-block lg:mt-0 mr-10 text-lg">
                        Profile
                    </span>
                </NavLink>

                <NavLink className="outline-none text-gray-800 hover:text-blue-700" activeClassName='text-gray-900' to="/pet-projects">
                    <span className="block lg:inline-block lg:mt-0 mr-10 text-lg">
                        Pet Projects
                    </span>
                </NavLink>

                <NavLink className="outline-none text-gray-800 hover:text-blue-700" activeClassName='text-gray-900' to="/contact">
                    <span className="block lg:inline-block lg:mt-0 mr-10 text-lg ">
                        Contact
                    </span>
                </NavLink>
               
            </nav>
                       
       </div>
    );
  }
}
