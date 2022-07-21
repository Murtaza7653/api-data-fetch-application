import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import User from './User';

export default function Users() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData([]);
        setTimeout(() => {
            const load = async () => {
                const link = "https://reqres.in/api/users?page=1";
                await fetch(link)
                    .then((response) => response.json())
                    .then((users) => {
                        setData(users.data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            load();
        }, 1000);
    }, [])


    return (

        <div className='container my-3'>
            <div className="text-center">
            </div>
            {loading && <Loader />}
            <div className="row">
                {data.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                        <User firstname={element.first_name} lastname={element.last_name} email={element.email} avatar={element.avatar} />
                    </div>
                })}
            </div>
        </div>

    )

}