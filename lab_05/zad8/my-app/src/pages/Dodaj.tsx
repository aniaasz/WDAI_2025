import {FormEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types/Article';

function Dodaj() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert('Wypełnij wszystkie pola!');
            return;
        }

        const data = localStorage.getItem('blog_articles');
        const articles: Article[] = data ? JSON.parse(data) : [];

        const newId = articles.length > 0
            ? Math.max(...articles.map(a => a.id)) + 1
            : 1;

        const newArticle: Article = {
            id: newId,
            title: title.trim(),
            content: content.trim(),
        };

        localStorage.setItem(
            'blog_articles',
            JSON.stringify([...articles, newArticle])
        );

        navigate('/blog');
    };

    return (
        <div className="dodaj">
            <h1>Dodaj nowy artykuł</h1>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label>Tytuł:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="content">
                    <label>Treść:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <button type="submit">DODAJ</button>
            </form>
        </div>
    );
}

export default Dodaj;