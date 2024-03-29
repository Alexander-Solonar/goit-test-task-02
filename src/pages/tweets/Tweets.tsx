import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Tweet } from '../../components/tweetsList/TweetsList';
import * as API from '../../services/API';
import TweetsList from '../../components/tweetsList';
import Filter from '../../components/filter';
import Button from '../../components/Button';
import Loader from '../../components/loader';
import DefaultImg from '../../components/defaultImg';
import css from './Tweets.module.css';

const Tweets = () => {
  const [tweetsColection, setTweetsColection] = useState<Tweet[]>([]);
  const [isButton, setIsButton] = useState<boolean>(false);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(3);
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('filter') ?? 'show all';

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
        alert((error as Error).message);
      }
    })();
  }, [limit, filter]);

  const handleChangeLimit = () => {
    setLimit(prevState => prevState + 3);
  };

  const visibleContacts = () => {
    switch (filter) {
      case 'all':
        return tweetsColection;
      case 'follow':
        return tweetsColection.filter(tweet => tweet.selected === false);
      case 'followings':
        return tweetsColection.filter(tweet => tweet.selected === true);
      default:
        return tweetsColection;
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
        <Button changeLimit={handleChangeLimit}></Button>
      )}
    </div>
  );
};

export default Tweets;
