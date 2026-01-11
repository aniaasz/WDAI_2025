import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Article as ArticleType } from '../types/Article';

function Article() {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<ArticleType | null>(null);

    useEffect(() => {
        const data = localStorage.getItem('blog_articles');
        const articles: ArticleType[] = data ? JSON.parse(data) : [];
        const found = articles.find((a) => a.id === parseInt(id || '0'));
        setArticle(found || null);
    }, [id]);

    if (!article) {
        return (
            <div>
                <h1>Artykuł nie znaleziony</h1>
                <Link to="/blog">Powrót do listy</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to="/blog">← Powrót</Link>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}

export default Article;