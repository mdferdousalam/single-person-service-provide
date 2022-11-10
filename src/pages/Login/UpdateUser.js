import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";




const UpdateUser = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    console.log(user)

    const [registeredUser, setRegisteredUser] = useState()

    console.log(registeredUser);

    updateProfile(auth.currentUser, {

    })
        .then(() => { })
        .catch((error) => { })

    useEffect(() => {

        fetch(`https://b6a11-service-review-server-side-seven.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRegisteredUser(data))
    }, [user?.email])
    return (
        <div>
            {


            };



        </div>
    );
};

export default UpdateUser;