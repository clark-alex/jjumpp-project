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
    let numOfUsers = userIdx.length
    let extraUsers
    if (userIdx.length > 6) {
        console.log(userIdx)
        extraUsers = userIdx.splice(6).length

    }
    let userimg = userIdx.map((e, i) => {
        return (
            <div key={i} style={{ borderRadius: '50%' }}>
                {
                    props.users[e].img.length > 2 ?
                        <img className='userImages flexColumn' src={props.users[e].img} />
                        :
                        <div className='userImages flexColumn'>{props.users[e].img}</div>
                }

            </div>
        )
    })
    return (
        <div className='flexColumn individualLocationWrapper'>

            <div className='bottomBorder' >
                <div style={{ padding: '40px' }} className='flexRow spacing'>
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

                    <section className='userDisplay flexColumn'>
                        <div className='flexRow nameAddress'>
                            <h2>{numOfUsers} Users</h2>
                            <button className='circularButton'>+</button>
                        </div>
                        <div className='flexRow' >
                            {userimg}
                            {extraUsers > 0  ?     <div style={{ borderRadius: '50%' }} className='userImages flexColumn'> +{extraUsers}</div> : null}
                        </div>
                    </section>

                    <section className={`nameAddress notificationsDisplay  ${props.notifications !== 0 ? 'notificationIcon' : ''}`}>
                        <i class="material-icons">notifications</i>
                        {props.notifications > 0 && props.notifications < 10 ? <p>{props.notifications}</p> : null}
                        {props.notifications > 10 ? <div>{props.notifications}</div> : null}
                    </section>
                    <div className=' nameAddress managePlaceholder '>
                        <button className='secondaryButton'>Manage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}