import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Witaj na Blogu!</h1>
            <Link to="/blog">Zobacz artykuły</Link>
        </div>
    );
}

export default Home;