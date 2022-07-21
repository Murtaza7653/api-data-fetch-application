import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-success m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}
