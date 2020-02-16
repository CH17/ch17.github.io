import React from 'react';

const Features = ({ features }) => {
    return (
        <ul className="text-gray-800 leading-relaxed list-disc pl-6">
         { features.map (( feature, index) => {
             return(
                <li> { feature} </li>
            )        
      })}
      </ul>
    );
};


export default Features;