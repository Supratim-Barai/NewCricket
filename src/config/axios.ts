import axios from "axios";
import { BASE_URL, X_ACCESS_TOKEN } from "../constants";

let APIKit = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'x-access-token': X_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

export const setClientToken = (token: string) => {
  APIKit.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;

export type MatchType = "" | "Test" | "ODI" | "T20" | "T10";

export interface Match {
  "match_id": number;
  "series_id": number;
  "series": string;
  "date_wise": string;
  "match_date": string;
  "match_time": string;
  "matchs": string;
  "venue": string;
  "match_type": string;
  "result": string;
  "team_a_id": number;
  "team_a": string;
  "team_a_short": string;
  "team_a_img": string;
  "team_a_scores": string;
  "team_a_over": string;
  "team_b_id": number;
  "team_b": string;
  "team_b_short": string;
  "team_b_img": string;
  "team_b_scores": string;
  "team_b_over": string;
  "min_rate": string;
  "max_rate": string;
  "fav_team": string;
  "s_ovr": string;
  "s_min": string;
  "s_max": string;
  "session": string | null;
  "team_a_score": Record<string, {
    "score": number;
    "wicket": number;
    "over": string;
  }>;
  "team_a_scores_over": Array<
    {
      "score": string;
      "over": string;
    }
  >,
  "team_b_scores_over": Array<any>
}

interface DataResponse {
  error: boolean;
  message: string;
  data: {
    result: Array<Match>;
    count: number;
  }
}

export const getRecentMatches = (matchType: MatchType = "", page = 1, limit = 10) => {
  const data = JSON.stringify({
    matchType,
    page,
    itemsPerPage: limit
  })
  return APIKit.request<DataResponse>({
    method: "POST",
    url: '/match/recentMatch',
    data
  })
}

export const getUpcomingMatches = (matchType: MatchType = "", page = 1, limit = 10) => {
  const data = JSON.stringify({
    matchType,
    page,
    itemsPerPage: limit
  })
  return APIKit.request<DataResponse>({
    method: "POST",
    url: '/match/upcomingMatch',
    data
  })
}

export const getLiveMatches = (matchType: MatchType = "", page = 1, limit = 10) => {
  const data = JSON.stringify({
    matchType,
    page,
    itemsPerPage: limit
  })
  return APIKit.request<DataResponse>({
    method: "POST",
    url: '/match/liveMatch',
    data
  })
}

interface NewsDataResponse {
  error: boolean;
  message: string;
  data: {
    result: Array<News>;
    count: number;
  }
}

export interface News {
  "news_id": number;
  "title": string;
  "description": string;
  "image": string;
  "pub_date": string;
  "content": Array<string>;
}

export const getNews = () => {
  return APIKit.request<NewsDataResponse>({
    method: "POST",
    url: '/match/news'
  })
}


// Commentry API
export interface CommentryData {
  "commentary_id": number;
  "inning": number;
  "type": number;
  "data": {
    "title": string;
    "description": string;
    "over": string;
    "overs": string;
    "runs": string;
    "wickets": string;
    "team": string;
    "team_score": string;
    "team_wicket": string;
    "batsman_1_name": string;
    "batsman_1_runs": string;
    "batsman_1_balls": string;
    "bolwer_name": string;
    "bolwer_overs": string;
    "bolwer_maidens": string;
    "bolwer_runs": string;
    "bolwer_wickets": string;
  }
}
interface CommentryDataResponse {
  error: boolean;
  message: string;
  data: {
    result: Record<string, Record<string, Array<CommentryData>>>;
  }
}

export const getCommentries = (matchId: string) => {
  const data = JSON.stringify({ matchId });
  console.log("match/commentary", data);
  return APIKit.request<CommentryDataResponse>({
    method: "POST",
    url: "/match/commentary",
    data
  })
}