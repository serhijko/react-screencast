import React, { useState } from 'react';
import './App.css';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [reverted, setReverted] = useState(false);

    const revert = () => {
        setReverted(!reverted);
    }

    console.log('---', 1);

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">
                    App name
                    <button className="btn" onClick={revert}>Revert</button>
                </h1>
            </div>{}
            <ArticleList articles={reverted ? articles.slice().reverse() : articles} />
        </div>
    );
}

export default App;
