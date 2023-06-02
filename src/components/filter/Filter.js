import css from "./Filter.module.css";

const Filter = () => {
  return (
    <ul className={css.filterList}>
      <li>
        <button className={css.filterBtn}>All</button>
      </li>
      <li>
        <button className={css.filterBtn}>Follow</button>
      </li>
      <li>
        <button className={css.filterBtn}>Followings</button>
      </li>
    </ul>
  );
};

export default Filter;
