import React, { Component } from 'react'
// import loader from './images/loader.gif';

export default class Loader extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-success m-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}
