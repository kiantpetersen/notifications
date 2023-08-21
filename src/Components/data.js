
// import avatarImg2 from '../images/avatar-kimberly-smith.webp'
import avatarImg2 from '../../images/avatar-kimberly-smith.webp'
import avatarImg3 from '../../images/avatar-mark-webber.webp'
import avatarImg4 from '../../images/avatar-nathan-peterson.webp'
import avatarImg1 from '../../images/avatar-jacob-thompson.webp'
import avatarImg5 from '../../images/44.jpg'


let data = [
    {
        user: 'Mike Smith',
        type: 'reaction',
        content: 'reacted to your recent post',
        message: '',
        community: '',
        target: 'My first tournament today',
        time: '09:21',
        profileImg: avatarImg1,
        visited: false,
        id: '1111'

    },
    {
        user: 'Kimberly Smith',
        type: 'comment',
        content: 'commented on your picture',
        message: '',
        community: '',
        target: 'Picture',
        time: '10:34',
        profileImg: avatarImg2,
        visited: false,
        id: '1112',
        picture: avatarImg3
    },
    {
        user: 'Angela Grey',
        type: 'personal',
        content: 'followed you',
        message: '',
        community: '',
        target: '',
        time: '09:34',
        profileImg: avatarImg4,
        visited: true,
        id: '1113'
    },
    {
        user: 'Jane Price',
        type: 'communal',
        content: 'has joined your group ',
        message: '',
        community: 'Jedi Counsel',
        target: '',
        time: '09:26',
        profileImg: avatarImg4,
        visited: true,
        id: '1114'
    },
    {
        user: 'Mark Webber',
        type: 'personal',
        content: 'sent you a private message',
        message: 'I see throught the lies of the Jedi. I do not fear the darkside as you do. I have brought peace, freedom, justice and security to my new Empire.',
        community: '',
        target: '',
        time: '17:44',
        profileImg: avatarImg3,
        visited: true,
        id: '1115'
    },
]

export default data

// All types: reaction, personal, communal,comment,like