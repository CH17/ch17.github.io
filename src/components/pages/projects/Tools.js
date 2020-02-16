import React from 'react';

const Tools = ({tools}) => {
    return (
        <div className="text-right"> 
         { tools.map (( tool, index) => {
             return(
                <span key= {index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tool}</span>      
            )        
      })}
      </div>
    );
};


export default Tools;