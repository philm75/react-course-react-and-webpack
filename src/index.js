import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return (
        <div>
            Welcome to react, Philip.
        </div>
    )
}

ReactDom.render(<App></App>, document.getElementById('root'));