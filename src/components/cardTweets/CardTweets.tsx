import { FC, useState } from 'react';
import clsx from 'clsx';
import * as API from '../../services/API';
import logo from '../../images/logo.svg';
import css from './CardTweets.module.css';

interface Tweet {
  tweet: {
    user: string;
    tweets: number;
    followers: number;
    avatar: string;
    selected: boolean;
    id: string;
  };
}

type TextBtb = 'Following' | 'Follow';

const CardTweets: FC<Tweet> = ({ tweet }) => {
  const { user, tweets, followers, avatar, selected, id } = tweet;
  const [changeFollowers, setChangeFollowers] = useState<number>(followers);
  const [textBtn, setTextBtn] = useState<TextBtb>(
    selected ? 'Following' : 'Follow'
  );
  const [isSelected, setIsSelected] = useState(selected);

  const formattedNumber = changeFollowers.toLocaleString('en-US');

  const changeUseHook = (folower: number, select: boolean, text: TextBtb) => {
    console.log(text);
    setChangeFollowers(prevState => prevState + folower);
    setIsSelected(select);
    setTextBtn(text);
  };

  const handleClick = async (id: string) => {
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
    } catch (error: any) {
      alert((error as Error).message);
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

export default CardTweets;
