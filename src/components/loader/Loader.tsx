import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

interface LoaderProps {
  width: string;
}

const Loader: FC<LoaderProps> = ({ width }) => {
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

export default Loader;
