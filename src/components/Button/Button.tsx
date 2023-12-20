import { FC } from 'react';
import css from './Button.module.css';

interface ButtonProps {
  changeLimit: () => void;
}

const Button: FC<ButtonProps> = ({ changeLimit }) => {
  return (
    <button
      className={css.button}
      onClick={() => {
        changeLimit();
      }}
    >
      Load more
    </button>
  );
};

export default Button;
