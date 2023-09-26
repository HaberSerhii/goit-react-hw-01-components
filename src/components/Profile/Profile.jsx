export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
    return (
<div>
    <div>
        <img
            src={avatar}
            alt={username}
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
    </div>

    <ul>
        <li>
            <span>Followers: </span><span>{ followers}</span>
        </li>
        <li>
            <span>Views: </span><span>{ views}</span>
        </li>
        <li>
            <span>Likes: </span><span>{ likes}</span>
        </li>
    </ul>
</div>  
    )
}