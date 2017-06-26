import React, { PropTypes } from 'react';
import Menu from './Menu';
import logo from '../images/Star_Wars_Logo.png';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Menu />
        <div className="col-sm-2 col-xs-12">
          <img src={logo} className="img-responsive center-block" />
        </div>
        <div className="col-sm-10 col-xs-12">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;