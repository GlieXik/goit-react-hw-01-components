import {StatsList,StatsItem} from "./ProfileInfo.styled"
export const Stats = ({stats})=>{
    return (    <StatsList>
    <StatsItem>
    <span className="label">Followers</span>
    <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
    <span className="label">Views</span>
    <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
    <span className="label">Likes</span>
    <span className="quantity">{stats.likes}</span>
    </StatsItem>
</StatsList>)

}