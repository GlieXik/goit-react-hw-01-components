import PropTypes from "prop-types";
import styled from 'styled-components'
import {Box} from "./Box"

const Friend = styled.ul`
    list-style-type: none;
    padding:0;
`



export const FriendList = ({friends})=>{

    return(
       <div>
            <Friend>                    
                    {friends.map(({avatar,name,isOnline,id})=>(
                        <li key={id}>
                            <Box  m={4} p={4} width="200px" border="normal" borderRadius="lg" display="flex" alignItems="center" justifyContent= "space-around" > 
                            <span>{isOnline ? "🟢":"🔴"}</span>
                            <img src={avatar} alt={name} width="50px"/>
                            <span>{name}</span>
                            </Box>
                        </li>
                
                    ))}
                
            </Friend>
            </div>
    )
}

FriendList.propTypes={
    name:PropTypes.string,
    avatar:PropTypes.elementType,
    isOnline:PropTypes.bool,
    id:PropTypes.number

}