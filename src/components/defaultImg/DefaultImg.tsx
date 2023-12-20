import defaultImg from '../../images/default.png';
import css from './DefaultImg.module.css';

const DefaultImg = () => {
  return (
    <div className={css.defaultImg}>
      <img src={defaultImg} alt="default" width={200} />
    </div>
  );
};

export default DefaultImg;
