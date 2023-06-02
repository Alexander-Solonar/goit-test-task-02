import { useState } from "react";
import clsx from "clsx";
import logo from "../images/icons.svg";
import css from "./CardTweets.module.css";
import * as API from "../../services/API";

const CardTweets = ({ dataCard }) => {
  const { user, tweets, followers, avatar, selected, id } = dataCard;
  const [changeFollowers, setChangeFollowers] = useState(followers);
  const [isSelected, setIsSelected] = useState(selected);

  const handleClick = async (id) => {
    if (!isSelected) {
      setChangeFollowers((prevState) => prevState + 1);
      setIsSelected(true);
      await API.updateCardTweets(id, {
        selected: !isSelected,
        followers: changeFollowers + 1,
      });
    } else {
      setChangeFollowers((prevState) => prevState - 1);
      setIsSelected(false);
      await API.updateCardTweets(id, {
        selected: !isSelected,
        followers: changeFollowers - 1,
      });
    }
  };

  const formattedNumber = changeFollowers.toLocaleString("en-US");

  return (
    <div className={css.cardTweet}>
      <svg className={css.logo} width="76" height="22">
        <use href={`${logo}#icon-logo`}></use>
      </svg>

      <div className={css.avatar}>
        <img src={`${avatar}`} alt={`${user}`} width="62" height="62" />
      </div>
      <div className={css.text}>
        <p>
          <span>{tweets}</span> Tweets
        </p>
        <p>
          <span>{formattedNumber}</span> Followers
        </p>
      </div>
      <button
        className={clsx(css.button, isSelected && css.active)}
        onClick={() => {
          handleClick(id);
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default CardTweets;
