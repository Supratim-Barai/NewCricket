/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomTabParamList = {
  HomeRoute: undefined;
  News: undefined;
  Live: undefined;
  RecentRoutes: undefined;
  Upcoming: undefined;
};

export type MainStackParamList = {
  Landing: undefined;
  Login: undefined;
  Otp: undefined;
  Drawer: undefined;
  MyProfile: undefined;
  PasswordChange: undefined;
  RateUs: undefined;
  ShareWithFriends: undefined;
  UpdateApp: undefined;
  AboutUs: undefined;
  TermsOfUs: undefined;
  PrivacyPolicy: undefined;
  FollowUs: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  VideoPlay: undefined;
  ViewNews: undefined;
  HomePointTable: undefined;
  HomeScoreCard: undefined;
}

export type NewsStackParamList = {
  News: undefined;
}

export type FeaturedVideoStackParamList = {
  FeaturedVideoList: undefined;
  AddFeaturedVideo: undefined;
  Video: { item: any };
};

export type LandingProps = NativeStackScreenProps<
  MainStackParamList,
  'Landing'
>;
export type LoginProps = NativeStackScreenProps<MainStackParamList, 'Login'>;
export type OtpProps = NativeStackScreenProps<MainStackParamList, 'Otp'>;
export type DrawerProps = NativeStackScreenProps<MainStackParamList, 'Drawer'>;
export type MyProfileProps = NativeStackScreenProps<
  MainStackParamList,
  'MyProfile'
>;
export type PasswordChangeProps = NativeStackScreenProps<
  MainStackParamList,
  'PasswordChange'
>;
export type RateUsProps = NativeStackScreenProps<MainStackParamList, 'RateUs'>;
export type ShareWithFriendsProps = NativeStackScreenProps<
  MainStackParamList,
  'ShareWithFriends'
>;
export type UpdateAppProps = NativeStackScreenProps<
  MainStackParamList,
  'UpdateApp'
>;
export type AboutUsProps = NativeStackScreenProps<
  MainStackParamList,
  'AboutUs'
>;
export type TermsOfUsProps = NativeStackScreenProps<
  MainStackParamList,
  'TermsOfUs'
>;
export type PrivacyPolicyProps = NativeStackScreenProps<
  MainStackParamList,
  'PrivacyPolicy'
>;
export type FollowUsProps = NativeStackScreenProps<
  MainStackParamList,
  'FollowUs'
>;
export type VideoPlayProps = NativeStackScreenProps<
  FeaturedVideoStackParamList,
  'Video'
>;

// Data Types
export interface ITeam {
  name: string;
  flag: string;
  score: number;
  wicket: number;
  over: string;
  extras: string;
}

export interface IBatsman {
  name: string;
  run: number;
  ball: number;
  fours: number;
  sixes: number;
  strike_rate: string;
  out_by: string;
}

export interface IBolwer {
  name: string;
  over: string;
  maiden: number;
  run: number;
  wicket: number;
  economy: string;
  dot_ball: number;
}

export interface IFallwickets {
  player: string;
  score: number;
  wicket: string;
  over: string;
}

export interface IScore {
  team: ITeam;
  batsman: Array<IBatsman>;
  bolwer: Array<IBolwer>;
  fallwicket: Array<IFallwickets>;
}

export interface LiveMatch {
  match_id: number,
  series_id: number,
  match_over: string,
  min_rate: string,
  max_rate: string,
  min_rate_1: string,
  max_rate_1: string,
  min_rate_2: string,
  max_rate_2: string,
  fav_team: string,
  toss: string,
  result: string,
  match_type: string,
  second_circle: string,
  s_ovr: string,
  s_min: string,
  s_max: string,
  team_a_id: number,
  team_a: string,
  team_a_short: string,
  team_a_img: string,
  team_b_id: number,
  team_b: string,
  team_b_short: string,
  team_b_img: string,
  next_batsman: string,
  current_inning: number,
  batting_team: number,
  balling_team: number,
  s_run: string,
  s_ball: string,
  session: string,
  first_circle: string,
  team_a_score: Record<string, Score | number>;
  team_a_scores: string,
  team_a_over: string,
  team_b_score: Record<string, Score | number>;
  curr_rate: string,
  team_b_scores: string,
  team_b_over: string,
  target: number,
  rr_rate: string,
  run_need:number,
  ball_rem: number,
  trail_lead: string,
  lastwicket: Lastwicket;
  batsman: Array<Batsman>;
  partnership: Partnership;
  bolwer: Bolwer;
  last36ball: Array<string>;
}

export interface Lastwicket {
  player: string;
}

export interface Score {
  score: number;
  wicket: number;
  ball: string;
}

export interface Batsman {
  name: string;
  run: string;
  ball: string;
  fours: string;
  sixes: string;
  strike_rate: string;
  out_by: string;
}

export interface Bolwer {
  name: string,
  over: string,
  maiden: string,
  run: string,
  wicket: string,
  economy: string
}

export interface Partnership {
  run: string;
  ball: string;
}