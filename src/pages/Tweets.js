import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import TweetsList from '../components/tweetsList/';
import * as API from '../services/API';
import { useEffect, useState } from 'react';
import Filter from '../components/filter';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [limit, setLimit] = useState(3);
  const [isButton, setIsButton] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const limit = searchParams.get("limit") ?? "3";

  useEffect(() => {
    (async () => {
      try {
        const usersList = await API.getCardTweets(limit);
        setTweets(usersList);
        setIsButton(true);

        if (limit >= 12) {
          setIsButton(false);
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [limit]);

  const handleChangePage = () => {
    // setSearchParams((prevState) => ({ ...prevState, limit: +limit + 3 }));
    setLimit(prevState => prevState + 3);
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <Filter />
      <TweetsList data={tweets} />
      {tweets.length > 0 && isButton && (
        <Button onClick={handleChangePage}></Button>
      )}
    </div>
  );
};

export default Tweets;
