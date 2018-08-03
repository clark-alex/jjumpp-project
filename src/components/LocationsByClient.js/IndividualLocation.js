import React from 'react';
import moment from 'moment';

export default function individualLocation(props) {
    // ==== get user images ====
    let userIdx = []
    props.usersID.forEach(id => {
        return userIdx.push(props.users.findIndex(e => {
            return id === e._id
        }))
    })
    let userimg = userIdx.map((e,i) => {
        return (
            <div key={i}>
                {props.users[e].img}
            </div>
        )
    })
    return (
        <div className='flexColumn'>

            <div className='flexRow locationSortBar'>
                <section className='flexRow location locationDisplay'>
                    <div className='imgContainer'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/NSF_building-4.jpg" />
                    </div>
                    <div className='nameAddress'>
                        <h3>{props.name}</h3>
                        <div>{props.address.street}</div>
                        <div>{props.address.city}</div>
                    </div>
                </section>

                <section className='lastManagedDisplay'>
                    <div className='nameAddress'>{moment(props.last_managed).format('l')}</div>
                </section>

                <section className='userDisplay'>
                    {userimg}
                </section>

                <section className='notificationsDisplay'>
                    <div>{props.notifications}</div>
                </section>
                <div className='managePlaceholder'>
                <button className='secondaryButton'>Manage</button>
                </div>
            </div>
            <div className='underline'><div></div></div>
        </div>
    )
}