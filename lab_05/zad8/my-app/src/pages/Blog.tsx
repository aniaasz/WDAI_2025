import {useEffect, useState} from "react";
import { Article } from '../types/Article';
import { Link } from 'react-router-dom';

function Blog() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const data = localStorage.getItem('blog_articles');
        setArticles(data ? JSON.parse(data) : []);
    }, []);

    return (
        <div>
            <h1>Lista artykułów</h1>
            <Link to="/dodaj">Dodaj nowy artykuł</Link>

            {articles.length === 0 ? (
                <p>Brak artykułów</p>
            ) : (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/article/${article.id}`}>
                                {article.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Blog;