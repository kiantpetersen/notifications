import React, { useState } from 'react';
import avatarImg2 from '../../images/avatar-jacob-thompson.webp'


function NotificationCard({ notification, onClick }) {
    function handleClick(e) {
        const el = e.target.closest('.notification-card')
        onClick(el.id)
    }
    function getTime(postTime) {
        const time = new Date()
        console.log(time, '+', postTime)
        let days = Math.round(time.getHours() / 24)
        let hours = time.getHours() - Number(postTime.slice(0, 2))
        let minutes = Math.abs(time.getMinutes() - Number(postTime.slice(3)))
        // console.log(postTime.slice(3))
        console.log(hours + ':' + minutes)
        let res;
        if (hours < 1) {
            res = minutes + ' minutes ago';
        } else if (hours > 23) {
            res = days + ' days ago'

        } else {
            res = hours + ' hours ago'
        }
        return res

    }

    return (
        <div id={notification.id} onClick={handleClick} className='notification-card'>
            <div className='profile-img-container'>
                <img alt='profile_img' src={notification.profileImg} className='profile-img' />
            </div>

            <div className='notification-textbox notification-text'>
                <div className='notification-text'>
                    <span className='notification-name'>{notification.user}</span>
                    {notification.content}
                    {notification.target ? <p className='notification-text note-target'>{notification.target}</p> : null}
                    {notification.community ? <p className='notification-text note-link'>{notification.community}</p> : null}
                    {notification.visited === false ? <span className='new-dot'></span> : null}
                    {notification.picture ? <div className='note-img-container'>
                        <img alt='profile_img' src={notification.picture} className='note-img' />
                    </div> : null}

                </div>
                <p className='notification-text notification-time'>{getTime(notification.time)}</p>
                {notification.message ? <p className='message-box'>{notification.message}</p> : null}
            </div>
        </div>
    );
}

export default NotificationCard;