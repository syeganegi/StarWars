import React, { PropTypes } from 'react';

const onKeyPress = (event) => {
  if (event.which === 13 /* Enter */) {
    event.preventDefault();
  }
};

const Filter = ({ label, placeholder, filter, onFilterChange }) => (
  <form onKeyPress={onKeyPress}>
    <div className="form-group row">
      {label && <label htmlFor="filter" className="col-sm-2 col-form-label input-lg">{label}</label>}
      <div className="col-sm-10">
        <input type="text" value={filter} className="form-control input-lg" id="filter" placeholder={placeholder}
          onChange={event => onFilterChange(event.target.value)} />
      </div>
    </div>
  </form>);

Filter.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired
};

Filter.defaultProps = {
  label: '',
  placeholder: 'Filter by character’s name'
};

export default Filter;