import React, { PropTypes } from 'react';

const FieldView = ({ label, value, labelClassName, valueClassName }) => (
    <div className="row">
        <span className="col-md-4 col-xs-6"><span className={labelClassName}>{label}: </span></span>
        <span className="col-md-8 col-xs-6"><span className={valueClassName}>{value}</span></span>
    </div>
);

FieldView.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    labelClassName: PropTypes.string,
    valueClassName: PropTypes.string,
};

export default FieldView;