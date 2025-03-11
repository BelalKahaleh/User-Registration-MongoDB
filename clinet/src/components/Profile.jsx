import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/users/profile', {
                    withCredentials: true  // إرسال الكوكي مع الطلب
                });
                setUser(response.data);
            } catch (error) {
                console.error(error);
                alert('Please login first');
            }
        };

        fetchUser();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
