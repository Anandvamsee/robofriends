import React from 'react';
// Styles withing an element can be added with {{}} in JSX - First {} denotes that it is JS and second {} is the JS object!
const Scroll = (props) => {
    return (
    <div style = {{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>    
        {props.children};
    </div>
    );
}

export default Scroll;
