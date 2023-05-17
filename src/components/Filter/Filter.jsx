import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';

export const Filter = e => {
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const onFilter = text => {
  //   setFilter(text);
  // };
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        // value={filter}
        onInput={e => dispatch(setFilter(e.target.value))}
      ></input>
    </div>
  );
};
