import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as API from '../../services/API';
import Button from '../../components/Button';
import TweetsList from '../../components/tweetsList/';
import Filter from '../../components/filter';
import css from './Tweets.module.css';
import Loader from 'components/loader/Loader';
import DefaultImg from 'components/defaultImg';

const Tweets = () => {
  const [tweetsColection, setTweetsColection] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isButton, setIsButton] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [limit, setLimit] = useState(3);

  const filter = searchParams.get('filter') ?? 'all';

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        setIsLoader(true);
        const usersList = await API.getCardTweets(limit);
        setTweetsColection(usersList);
        setIsButton(true);
        setIsLoader(false);
        if (limit >= 12) {
          setIsButton(false);
        }
      } catch (error) {
        setIsButton(true);
        setIsLoader(false);
        alert(error.message);
      }
    })();
  }, [limit, filter]);

  const handleChangePage = () => {
    setLimit(prevState => prevState + 3);
  };

  const visibleContacts = () => {
    if (filter === 'all') {
      return tweetsColection;
    } else if (filter === 'follow') {
      return tweetsColection.filter(tweet => tweet.selected === false);
    } else if (filter === 'followings') {
      return tweetsColection.filter(tweet => tweet.selected === true);
    }
  };

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css.buuton}>
        Back
      </Link>
      <Filter setSearchParams={setSearchParams} statusFilter={filter} />
      {visibleContacts().length === 0 && !isLoader && <DefaultImg />}
      {visibleContacts().length > 0 && <TweetsList data={visibleContacts()} />}
      {isLoader && <Loader width="96" />}
      {isButton && !isLoader && visibleContacts().length > 0 && (
        <Button onClick={handleChangePage}></Button>
      )}
    </div>
  );
};

export default Tweets;
