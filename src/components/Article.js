import React, { useState } from 'react';

function Article(props) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        console.log('---', 'clicked');
        setIsOpen(!isOpen);
    };

    const { article } = props;
    const body = isOpen && <section className="card-text">{article.text}</section>;
    const style = { width: '50%' };

    return (
        <div className="card mx-auto" style={style}>
            <div className="card-header">
                <h2>
                    {article.title}
                    <button onClick={handleClick} className="btn btn-primary btn-lg float-right">
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle text-muted">
                    creation date: {(new Date(article.date)).toDateString()}
                </h6>
                {body}
            </div>
        </div>
    );
}

export default Article;