import React from 'react';
import { render } from 'react-dom';

class Entry extends React.Component {
    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
};

var root = document.getElementById('root') 
render(<Entry />, root);