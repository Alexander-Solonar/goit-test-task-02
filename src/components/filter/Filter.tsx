import { FC } from 'react';
import Select, { SingleValue } from 'react-select';
import css from './Filter.module.css';

interface FilterOption {
  value: string;
  label: string;
}

const filterButtons: FilterOption[] = [
  { value: 'show all', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'followings', label: 'followings' },
];

interface FilterProps {
  statusFilter: string;
  setSearchParams: (params: { filter: string }) => void;
}

const Filter: FC<FilterProps> = ({ setSearchParams, statusFilter }) => {
  const handleClick = (newValue: SingleValue<FilterOption>) => {
    if (newValue) {
      setSearchParams({ filter: newValue.value });
    }
  };
  const customStyles = {
    control: (provided: object) => ({
      ...provided,
      backgroundColor: '#fff',
      border: '2px solid #4b2a99',
      outline: '#4b2a99',
      cursor: 'pointer',
      boxShadow: 'none',
      '&:hover': {
        border: '2px solid #4b2a99',
      },
    }),
    option: (provided: object, state: { isSelected: boolean }) => ({
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
        defaultValue={filterButtons.find(
          option => option.value === statusFilter
        )}
        onChange={handleClick}
        options={filterButtons}
        styles={customStyles}
      />
    </div>
  );
};
export default Filter;
