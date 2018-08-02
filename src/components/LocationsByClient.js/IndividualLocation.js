import React from 'react';

export default function individualLocation(props) {
    // ==== get user images ====
    let userIdx = []
    props.usersID.forEach(id => {
        return userIdx.push(props.users.findIndex(e => {
            return id === e._id
        })
        )
    })
    let userimg = userIdx.map(e => {
        return (
            <div>
                {props.users[e].img}
            </div>
        )
    })
    return (
        <div>
            <section>
                <div>{props.name}</div>
                <div>{props.address.street}</div>
                <div>{props.address.city}</div>
            </section>
            <section>
                <div>{props.last_managed}</div>
            </section>
            <section>
                {userimg}
            </section>
            <section>
                <div>{props.notifications}</div>
            </section>
            <button></button>

        </div>
    )
}