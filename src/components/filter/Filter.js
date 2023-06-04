import Select from 'react-select';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ setSearchParams, statusFilter }) => {
  const filterButtons = [
    { value: 'all', label: 'all' },
    { value: 'follow', label: 'follow' },
    { value: 'followings', label: 'followings' },
  ];
  const handleClick = e => {
    setSearchParams({ filter: e.value });
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#fff',
      border: ' 2px solid #4b2a99',
      outline: '#4b2a99',
      cursor: 'pointer',
      boxShadow: 'none',
      '&:hover': {
        border: ' 2px solid #4b2a99',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4b2a99' : 'inherit',
      color: state.isSelected ? '#fff' : 'inherit',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#c8bce6',
      },
    }),
  };

  return (
    <div className={css.filter}>
      <Select
        className={css.select}
        placeholder={statusFilter}
        defaultValue={statusFilter}
        onChange={handleClick}
        options={filterButtons}
        styles={customStyles}
      />
    </div>
  );
};

Filter.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  statusFilter: PropTypes.string.isRequired,
};
export default Filter;
