import {Stats} from "./Info/ProfileInfo"
import PropTypes from "prop-types";
import {ProfileContainer,Avatar,UserName,UserTag,UserLocation} from "./Profile.styled"
export const Profile = ({username,tag,location,avatar,stats})=>{
    return (
        <ProfileContainer>
        <div>
            <Avatar
            src={avatar}
            alt="User avatar"
            className="avatar"
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
        </div>
        <Stats stats={stats}></Stats>

        </ProfileContainer>
    )
}
Profile.propTypes={
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.elementType.isRequired,
    stats: PropTypes.object.isRequired

}