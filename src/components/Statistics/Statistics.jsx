import {StatisticsTitle, Stats,StatsItem,StatsLabel} from "./Statistics.styled"

import {Box} from './Box'



export const Statistics = () => {
  return (<Box m={4} width="350px" border="normal" borderRadius="lg">
    <StatisticsTitle>Stats</StatisticsTitle>
    <Stats>

    <StatsItem>
      <StatsLabel>.docx</StatsLabel>
      <span >4%</span>
    </StatsItem>
    <StatsItem>
      <StatsLabel>.mp3</StatsLabel>
      <span >14%</span>
    </StatsItem>
    <StatsItem>
      <StatsLabel>.pdf</StatsLabel>
      <span >41%</span>
    </StatsItem>
    <StatsItem>
      <StatsLabel>.mp4</StatsLabel>
      <span >12%</span>
    </StatsItem>
    </Stats>
    </Box>)
}