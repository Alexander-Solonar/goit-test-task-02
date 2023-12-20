import { FC } from 'react';
import CardTweets from '../cardTweets';
import css from './TweetsList.module.css';

export interface Tweet {
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  selected: boolean;
  id: string;
}

interface TweetsListProps {
  data: Tweet[];
}

const TweetsList: FC<TweetsListProps> = ({ data }) => {
  return (
    <ul className={css.cardList}>
      {data.map(item => (
        <li key={item.id} className={css.cardItem}>
          <CardTweets tweet={item} />
        </li>
      ))}
    </ul>
  );
};

export default TweetsList;
