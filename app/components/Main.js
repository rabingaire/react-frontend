import React from 'react';

import Contact from './Contact';
import data from './data';

export default class Main extends React.Component {
    render() {
        return (
            <div className=''>
                {data.map( info => 
                    <Contact {...info} key={info.id}/>
                )}
            </div>
        );
    }
};