import { Link, useSearchParams } from 'react-router-dom';
import Button from '../components/Button/Button';
import TweetsList from '../components/tweetsList/';
import * as API from '../services/API';
import { useEffect, useState } from 'react';
import Filter from '../components/filter';

const Tweets = () => {
  const [tweetsColection, setTweetsColection] = useState([]);
  const [isButton, setIsButton] = useState(false);
  const [page, setPage] = useState('1');
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? 'all';

  useEffect(() => {
    (async () => {
      console.log('d');
      try {
        const usersList = await API.getCardTweets(page);
        setTweetsColection(prevState => [...prevState, ...usersList]);
        setIsButton(true);

        if (page * 3 >= 12) {
          setIsButton(false);
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [page]);

  const handleChangePage = () => {
    setPage(prevState => +prevState + 1);
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
    <div>
      <Link to="/">Back</Link>
      <Filter setSearchParams={setSearchParams} statusFilter={filter} />
      <TweetsList data={visibleContacts()} />
      {visibleContacts().length > 0 && isButton && (
        <Button onClick={handleChangePage}></Button>
      )}
    </div>
  );
};

export default Tweets;
