import React from 'react';
import './App.css';
import Article from './Article';
import articles from '../fixtures';

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article article={articles[0]} foo={"bar"} flag />
        </div>
    );
}

export default App;
