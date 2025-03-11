import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await axios.get('/api/users/profile', { withCredentials: true });
            setUser(data);
        };
        fetchUser();
    }, []);

    return (
        <div>
            {user ? (
                <h2>Welcome, {user.name}</h2>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
