import React, { Component } from 'react';

export default class User extends Component {

    render() {
        let { firstname, lastname, email, avatar } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{ width: "14rem", margin:"0px auto"}}>
                    <img src={avatar} className="card-img-top" alt={avatar} />
                    <div className="card-body">
                        <h5 className="card-title">{firstname + ' ' + lastname}</h5>
                        <p className="card-text">{email}</p>
                        <a href={avatar} target="blank" className="btn btn-success">View Photo</a>
                    </div>
                </div>
            </div>
        )
    }
}
