import React, { memo, useState } from 'react';
import Article from '../Article';
import './style.css';

const ArticleList = memo(({ articles }) => {
    const [openArticleId, setOpenArticleId] = useState(null);

    const handleClick = articleId => {
        setOpenArticleId(openArticleId === articleId ? null : articleId);
    };

    console.log('---', 2);
    const articleElement = articles.map((article) =>
        <li key={article.id} className="article-list__li">
            <Article article={article}
                     isOpen={openArticleId === article.id}
                     onButtonClick={handleClick.bind(null, article.id)}
            />
        </li>
    );
    return (
        <ul>
            {articleElement}
        </ul>
    );
});

export default ArticleList;