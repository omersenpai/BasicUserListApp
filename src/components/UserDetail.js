import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail({ activeUserId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (activeUserId) { // activeUserId null değilse API çağrısı yap
            setLoading(true);
            axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
                .then((res) => setUser(res.data))
                .finally(() => setLoading(false));
        }
    }, [activeUserId]);

    if (!activeUserId) { // Eğer activeUserId null ise bileşen sadece null döndürür
        return null;
    }

    return (
        <div>
            <h2>Detaylar</h2>
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <pre>{JSON.stringify(user, null, 2)}</pre>
            )}
        </div>
    );
}

export default UserDetail;
