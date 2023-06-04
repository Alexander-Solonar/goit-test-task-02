import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = ({ width }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="#4b2a99"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.string.isRequired,
};

export default Loader;
