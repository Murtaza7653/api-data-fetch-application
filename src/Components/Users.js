import React, { Component } from 'react'
import Loader from './Loader';
import User from './User'

export default class Users extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
            display: false
        }
        this.loadUsers = this.loadUsers.bind(this);
    }

    loadUsers = () => {
        this.setState({ data: [], loading: true });
        setTimeout(() => {
            const load = async () => {
                const link = "https://reqres.in/api/users?page=1";
                await fetch(link)
                    .then((response) => response.json())
                    .then((users) => {
                        this.setState({ data: users.data, loading: false, display: true });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            load();
        }, 1000);
    }

    render() {
        return (
            <div className='container my-3'>
                <div className="text-center">
                <h3>Welcome! This website fetches data from an API</h3>
                <button className="btn btn-outline-dark my-2" type="submit" onClick={this.loadUsers} >{!(this.state.display) ? "Get User Data" : "Refresh" }</button>
                </div>
                {this.state.loading && <Loader />}
                <div className="row">
                    {this.state.data.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <User firstname={element.first_name} lastname={element.last_name} email={element.email} avatar={element.avatar} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
