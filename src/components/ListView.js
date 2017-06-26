import React, { PropTypes } from 'react';

const ListView = ({ label, list }) => (
    <div className="row">
        <div className="col-xs-4">
            <span>{label}: </span>
        </div>
        <div className="col-xs-8">
            <ul className="list-unstyled">
                {list.sort().map((value, id) =>
                    <li key={id}>{value}</li>
                )}
            </ul>
        </div>
    </div>
);

ListView.propTypes = {
    label: PropTypes.string.isRequired,
    list: PropTypes.array
};

export default ListView;