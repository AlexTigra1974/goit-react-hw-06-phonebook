import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.target.value.trim()));

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onInput={handleFilter}
        placeholder="Search by name..."
      ></input>
    </div>
  );
};
Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
