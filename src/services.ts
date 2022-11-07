import axios from "./config/axios";

export const getUpcomingMatches = () => axios.get('game/list-upcomming-game');

export const getRecentMatches = () => axios.get('game/list-recent-game');

export const getScore = (matchId: number) => axios.get('game/score-board/'+matchId);