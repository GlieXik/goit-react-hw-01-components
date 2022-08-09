import { Profile } from "./Profile/Profile";
import user from "../json/user"
import {Statistics} from "./Statistics/Statistics"
import { ThemeProvider } from "styled-components";
import {theme} from "../theme"
import friends from "../json/friends"
import {FriendList} from "./FriendList/FriendList"
import transactions from "../json/transactions"
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import statistics from "../json/data"

export const App = () => {
  return (
  <ThemeProvider theme={theme}>
      <Profile username={user.username} tag={user.tag} location= {user.location} avatar={user.avatar} stats={user.stats}></Profile>
      <Statistics statistics={statistics} title="Stats" />
      <FriendList friends={friends} t/>
      <TransactionHistory items={transactions} />
  </ThemeProvider>
  );
};
