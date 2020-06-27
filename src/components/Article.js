import React, { useState } from 'react';

function Article(props) {
    const [isOpen, setIsOpen] = useState(true);

    const { article } = props;
    const body = isOpen && <section>{article.text}</section>;

    const handleClick = () => {
        console.log('---', 'clicked');
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h2>
                {article.title}
                <button onClick={handleClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
            </h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    );
}

export default Article;