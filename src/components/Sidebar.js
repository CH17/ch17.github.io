import React, { Component } from 'react';


export default class Sidebar extends Component {
  render() {
    return (
            <div className="top-0 w-full md:w-full lg:w-3/12 lg:h-screen lg:sticky bg-gray-100">
              
               <div className="py-10 mt-16 text-center px-5 h-screen relative">
                    
                    <img src="images/profile-photo-demo.jpeg" alt="Mridul" 
                        className="rounded-full m-auto mb-5"/>                
                    
                    <h1 className=" text-blue-900 text-2xl font-semibold mb-1">Mridul Bhattacharjee</h1>                
                    <h4 className="text-gray-700 text-lg leading-tight font-semibold mb-8">Full Stack Web Developer</h4>                
                    
                    <div className="text-gray-700 mb-5 text-base">
                       <p>So something lame. Hmmm.... Tech Enthusiast who loves movies, musics, books, traveling, black coffee and solid code. </p>
                       <p className="mt-1">(not necessarily in this order)</p>
                    </div>
                     

                    <a href="/profile" className="bg-white shadow-md hover:text-blue-700 text-blue-900 py-3 px-6">
                        Learn More
                    </a>

                    <div className="mt-10 items-center text-gray-600">
                        <a className="inline-block text-center hover:text-gray-700 mr-3"
                            href="https://twitter.com/_ch17" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="fill-current w-5 h-5" viewBox="0 0 24 24"><title>Twitter</title><path d="M24 4.559c-.89.39-1.844.652-2.836.777a4.886 4.886 0 002.164-2.719c-.95.567-2 .965-3.117 1.192a4.918 4.918 0 00-8.512 3.363c0 .39.031.766.114 1.121-4.09-.2-7.711-2.16-10.141-5.145a4.93 4.93 0 00-.676 2.485c0 1.707.879 3.215 2.188 4.09A4.88 4.88 0 01.96 9.117v.055a4.938 4.938 0 003.941 4.832c-.402.11-.836.164-1.289.164a4.35 4.35 0 01-.933-.086c.636 1.95 2.449 3.383 4.597 3.43a9.89 9.89 0 01-6.101 2.097c-.403 0-.79-.02-1.176-.066a13.842 13.842 0 007.547 2.207c9.055 0 14.004-7.5 14.004-14 0-.219-.008-.43-.016-.637A9.768 9.768 0 0024 4.56zm0 0"/></svg>
                        </a>
                        <a className="inline-block text-center hover:text-gray-700 mr-3"
                            href="https://github.com/CH17/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><title>Github</title><path d="M22.367 6.266a11.896 11.896 0 00-4.363-4.364C16.168.828 14.164.293 11.988.293c-2.175 0-4.18.535-6.02 1.61A11.885 11.885 0 001.61 6.265C.535 8.102 0 10.106 0 12.28c0 2.61.762 4.961 2.285 7.047 1.527 2.086 3.496 3.531 5.91 4.332.282.05.489.016.625-.11a.62.62 0 00.203-.468l-.007-.844a95.765 95.765 0 01-.012-1.386l-.356.062c-.23.04-.52.059-.867.055a7.154 7.154 0 01-1.086-.11 2.502 2.502 0 01-1.047-.468 1.986 1.986 0 01-.683-.961l-.156-.36a4.103 4.103 0 00-.493-.797c-.222-.289-.449-.488-.68-.59l-.109-.081a1.016 1.016 0 01-.203-.188.843.843 0 01-.14-.215c-.032-.074-.004-.133.078-.18.082-.05.234-.07.453-.07l.312.047c.207.04.465.164.774.371.304.211.558.48.754.813.242.425.53.754.867.976.34.223.68.336 1.023.336.344 0 .64-.027.89-.078.25-.05.485-.129.7-.234.094-.7.352-1.235.766-1.61a10.615 10.615 0 01-1.598-.28 6.36 6.36 0 01-1.469-.606 4.298 4.298 0 01-1.257-1.047c-.332-.418-.606-.965-.817-1.64-.215-.677-.32-1.458-.32-2.34 0-1.259.41-2.333 1.23-3.216-.383-.949-.347-2.007.11-3.183.304-.094.75-.024 1.343.21.594.235 1.028.434 1.305.598.274.168.496.309.664.422.965-.27 1.965-.406 2.996-.406 1.028 0 2.028.137 2.996.406l.594-.375c.406-.25.883-.476 1.434-.683.554-.211.976-.266 1.265-.172.47 1.176.512 2.234.125 3.183.825.883 1.235 1.957 1.235 3.215 0 .883-.11 1.668-.32 2.348-.215.684-.489 1.23-.829 1.64a4.32 4.32 0 01-1.265 1.04c-.504.277-.993.48-1.465.605-.473.125-1.008.219-1.602.281.543.47.813 1.207.813 2.22v3.292c0 .188.066.344.195.469s.336.16.617.11c2.414-.802 4.383-2.247 5.906-4.333 1.524-2.086 2.29-4.437 2.29-7.047 0-2.176-.54-4.18-1.61-6.015zm0 0"/></svg>
                        </a>
                        

                        <a className="inline-block text-center hover:text-gray-700 mr-3" 
                            href="https://www.linkedin.com/in/mridul-b/" target="_blank" rel="noopener noreferrer">                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 24 24"><title>LinkedIn</title><path d="M0 7.5h5.367V24H0zm0 0M19.984 7.695c-.054-.02-.109-.039-.168-.054a2.162 2.162 0 00-.218-.043 4.706 4.706 0 00-.965-.098c-3.13 0-5.113 2.277-5.766 3.156V7.5H7.5V24h5.367v-9s4.055-5.648 5.766-1.5V24H24V12.867c0-2.496-1.707-4.57-4.016-5.172zm0 0M5.25 2.625a2.626 2.626 0 11-5.251-.001 2.626 2.626 0 015.251.001zm0 0"/></svg>
                        </a>

                        

                    </div>


                    <div className="absolute bottom-0 left-0 w-full text-center mb-6">
                        <p className="text-blue-900">&copy; 2020. Alright Reserved</p>
                    </div>
                    
                </div>

            </div>
    );
  }
}
