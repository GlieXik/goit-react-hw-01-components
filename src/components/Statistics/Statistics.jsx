import {StatisticsTitle, Stats,StatsItem,StatsLabel} from "./Statistics.styled"

import {Box} from './Box'



export const Statistics = ({statistics: props,title}) => {

  return (<Box m={4} width="450px" border="normal" borderRadius="lg">

    {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <Stats>
    {props.map(({id,label,percentage})=>
        <StatsItem key={id}>
          <StatsLabel>{label}</StatsLabel>
          <span >{percentage}</span>
        </StatsItem>
    )}
    </Stats>
    </Box>)
}