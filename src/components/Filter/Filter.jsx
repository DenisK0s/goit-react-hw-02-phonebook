//модули
import PropTypes from 'prop-types';

//компоненты
import Input from '../Input';

const Filter = ({ name, onFilterChange }) => {
  return (
    <Input
      inputLabel="Find contacts by name"
      type="text"
      name="name"
      value={name}
      onInputChange={onFilterChange}
    />
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default Filter;
