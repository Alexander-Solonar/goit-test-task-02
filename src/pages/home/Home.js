import { Link, useLocation } from 'react-router-dom';
import image from '../../images/main-image.png';
import logo from '../../images/logo.svg';
import css from './Home.module.css';

const Home = () => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <img src={logo} width="96" alt="logo" />
        <Link to="/tweets" state={{ from: location }} className={css.link}>
          Tweets
        </Link>
      </header>
      <main>
        <h1 className={css.title}>Hello World!</h1>
        <img
          className={css.image}
          src={image}
          alt="painted people"
          width={670}
        />
      </main>
    </div>
  );
};

export default Home;
