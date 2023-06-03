import css from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Link to="/tweets" state={{ from: location }} className={css.link}>
          Tweets
        </Link>
      </header>
      <main>
        <h1 className={css.title}>Hello Ukraine!</h1>
      </main>
    </div>
  );
};

export default Home;
