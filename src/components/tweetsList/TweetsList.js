import PropTypes from 'prop-types';
import CardTweets from '../cardTweets';
import css from './TweetsList.module.css';

const TweetsList = ({ data }) => {
  return (
    <ul className={css.cardList}>
      {data.map(card => (
        <li key={card.id} className={css.cardItem}>
          <CardTweets dataCard={card} />
        </li>
      ))}
    </ul>
  );
};

TweetsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TweetsList;
