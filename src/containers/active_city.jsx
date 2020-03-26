import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    if (this.props.selectedCity){
      const style = {
        backgroundImage: `url(https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug})`,
        height: "60vh",
        backgroundPosition: "center",
        backgroundSize: "cover"
      };
      return (
      <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
        <div style={style}></div>
      </div>
      );
    } else {
      return(
        <div className="active-city" />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
