import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as API from '../../services/API';
import logo from '../../images/logo.svg';
import css from './CardTweets.module.css';

const CardTweets = ({ dataCard }) => {
  const { user, tweets, followers, avatar, selected, id } = dataCard;

  const [changeFollowers, setChangeFollowers] = useState(followers);
  const [textBtn, setTextBtn] = useState(selected ? 'Following' : 'Follow');
  const [isSelected, setIsSelected] = useState(selected);

  const formattedNumber = changeFollowers.toLocaleString('en-US');

  const changeUseHook = (folower, select, text) => {
    setChangeFollowers(prevState => prevState + folower);
    setIsSelected(select);
    setTextBtn(text);
  };

  const handleClick = async id => {
    try {
      if (!isSelected) {
        changeUseHook(1, true, 'Following');

        await API.updateCardTweets(id, {
          selected: !isSelected,
          followers: changeFollowers + 1,
        });
      } else {
        changeUseHook(-1, false, 'Follow');
        await API.updateCardTweets(id, {
          selected: !isSelected,
          followers: changeFollowers - 1,
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={css.cardTweet}>
      <img className={css.logo} src={logo} width="76" alt="logo" />
      <div className={css.avatar}>
        <img src={avatar} alt={user} width="62" height="62" />
      </div>
      <div className={css.text}>
        <p>
          <span>{tweets}</span> Tweets
        </p>
        <p>
          <span>{formattedNumber}</span> Following
        </p>
      </div>
      <button
        className={clsx(css.button, isSelected && css.active)}
        onClick={() => {
          handleClick(id);
        }}
      >
        {textBtn}
      </button>
    </div>
  );
};

CardTweets.propTypes = {
  dataCard: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default CardTweets;
