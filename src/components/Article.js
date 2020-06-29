import React, { memo, useEffect, useRef, useState } from 'react';

const Article = memo((props) => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('---', 'mounting');
    }, []);

/*
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setIsOpen(props.defaultOpen);
    }, [props.defaultOpen]);
*/

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log('---', 'will update');
    }, []);

    const { article, isOpen, onButtonClick } = props;
    const body = isOpen && <section className="card-text">{article.text}</section>;
    const style = { width: '50%' };

    return (
        <div className="card mx-auto" style={style}>
            <div className="card-header">
                <h2 onClick={incrementCounter}>
                    {article.title}
                    clicked {count}
                    <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
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
})

export default Article;