import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button
      className={css.button}
      onClick={() => {
        onClick(prevState => prevState + 3);
      }}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
