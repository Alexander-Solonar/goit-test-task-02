import clsx from 'clsx';
import css from './Filter.module.css';

const Filter = ({ setSearchParams, statusFilter }) => {
  const filterButtons = [
    { name: 'all' },
    { name: 'follow' },
    { name: 'followings' },
  ];

  const handleClick = e => {
    if (e.target.nodeName === 'BUTTON') {
      setSearchParams({ filter: e.target.textContent });
    }
  };

  return (
    <ul className={css.filterList} onClick={handleClick}>
      {filterButtons.map(({ name }) => {
        const isActive = name === statusFilter;
        return (
          <li key={name}>
            <button className={clsx(css.filterBtn, isActive && css.active)}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
