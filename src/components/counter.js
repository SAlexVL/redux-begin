import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div class="back">
      <div class="counter-wrapper">
        <h1>{counter}</h1>
      </div>
      <div className="button-wrapper">
          <div className="wrapper green">
              <input onClick={dec} type="image" src="img/Minus.png" alt=""/>
          </div>
          <div class="wrapper yellow">
              <input onClick={inc} type="image" src="img/Vector.png" alt=""/>
          </div>
          <div class="wrapper red">
              <input onClick={rnd} type="image" src="img/Reset.png" alt=""/>
          </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps, actions)(Counter);