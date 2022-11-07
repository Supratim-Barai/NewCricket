import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LiveMatch } from "../../types";

const liveMatch = {
    "match_id": 1147,
    "series_id": 90,
    "match_over": "90",
    "min_rate": "2.84",
    "max_rate": "2.86",
    "min_rate_1": "3.7",
    "max_rate_1": "3.75",
    "min_rate_2": "2.62",
    "max_rate_2": "2.66",
    "fav_team": "The Draw",
    "toss": "Australia opt to bat",
    "result": "",
    "match_type": "Test",
    "second_circle": "",
    "s_ovr": "",
    "s_min": "",
    "s_max": "",
    "team_a_id": 14,
    "team_a": "Australia",
    "team_a_short": "AUS",
    "team_a_img": "http://apicricketchampion.in/webroot/img/teams/1268041033_team.jpg",
    "team_b_id": 8,
    "team_b": "Pakistan",
    "team_b_short": "PAK",
    "team_b_img": "http://apicricketchampion.in/webroot/img/teams/1007466058_team.jpg",
    "next_batsman": "-",
    "current_inning": 4,
    "batting_team": 8,
    "balling_team": 14,
    "s_run": "2",
    "s_ball": "1",
    "session": "DAY 4 Timing<br>1st Session 10:30AM to 12:30PM<br>Lunch Break<br>2nd Session 1:10PM to 3:10PM<br>Teat Break<br>3rd Session 3:30PM to 6:00PM<br><br><br><br>Australia tour of Pakistan, 2022<br>3rd Test MATCH<br><br>Australia<br>Vs<br>Pakistan<br><br>Toss - Australia won the toss and opted to bat first<br><br>DAY 1<br>Australia 1st Inng Score - 232 Runs/5wk (88.0 Over)<br><br>DAY 2<br>Australia 1st Inns Score - 391 Runs/10wk (133.3 Ovs)<br><br>Pakistan 1st Inns Score - 90 Runs/1wk (39.0 Overs)<br><br>DAY 3<br>Pakistan 1st Inns Score 268/10 (116.4 Ovs)<br><br>Australia 2nd Inns Score - 11 runs/0wk 3.0 Ovs<br><br>DAY 4<br>Australia 2nd Inns Sessions<br>5 Over 25 Runs/0wk<br>10 Over 46 Runs/0wk<br>15 Over 61 Runs/0wk<br>20 Over 72 Runs/0wk<br>25 Over 83 Runs/0wk<br>30 Over 97 Runs/1wk<br>35 Over 117 Runs/1wk<br>40 Over 135 Runs/1wk<br>45 Over 148 Runs/1wk <br>50 Over 181 Runs/2wk<br>55 Over 200 Runs/2wk<br>Australia 2nd Inns Score - 227 Runs/3wk d (60.0 Ovs)<br><br>Pakistan 2nd Inngs Sessions<br>5 Over 10 Runs/0wk<br>10 Over 22 Runs/0wk<br>15 Over 37 Runs/0wk<br>20 Over 55 Runs/0wk<br>25 Over <br><br><br>Venue: Gaddafi Stadium, Lahore<br><br>LIVE ON SONY SIX<br><br> <br>",
    "first_circle": "0",
    "team_a_score": {
        "1": {
            "score": 391,
            "wicket": 10,
            "ball": "133.3"
        },
        "3": {
            "score": 227,
            "wicket": 3,
            "ball": "60"
        },
        "team_id": 14
    },
    "team_a_scores": "391-10 & 227-3",
    "team_a_over": "133.3 & 60",
    "team_b_score": {
        "2": {
            "score": 268,
            "wicket": 10,
            "ball": "116.4"
        },
        "4": {
            "score": 62,
            "wicket": 0,
            "ball": "24.4"
        },
        "team_id": 8
    },
    "curr_rate": "2.54",
    "team_b_scores": "268-10 & 62-0",
    "team_b_over": "116.4 & 24.4",
    "target": 289,
    "rr_rate": "-5.63",
    "run_need": 289,
    "ball_rem": 0,
    "trail_lead": "Pakistan TRAIL BY 288 RUNS",
    "lastwicket": {
        "player": ""
    },
    "batsman": [
        {
            "name": "I Haq*",
            "run": "35",
            "ball": "85",
            "fours": "3",
            "sixes": "0",
            "strike_rate": "41.18",
            "out_by": ""
        },
        {
            "name": "A Shafique",
            "run": "23",
            "ball": "63",
            "fours": "2",
            "sixes": "1",
            "strike_rate": "36.51",
            "out_by": ""
        }
    ],
    "partnership": {
        "run": "62",
        "ball": "149"
    },
    "bolwer": {
        "name": "C Green",
        "over": "2.5",
        "maiden": "",
        "run": "4",
        "wicket": "0",
        "economy": "1.6"
    },
    "last36ball": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0"
    ]
}


export interface Match {
    date_wise: string,
    fav_team: string,
    match_date: string,
    match_id: number,
    match_time: string,
    match_type: string,
    matchs: string,
    max_rate: string,
    min_rate: string,
    series: string,
    series_id: number,
    team_a: string,
    team_a_id: number,
    team_a_img: string,
    team_a_short: string,
    team_b: string,
    team_b_id: number,
    team_b_img: string,
    team_b_short: string,
    venue: string;
}

interface InitialState {
    liveMatchs: Array<Match>,
    liveMatch: LiveMatch | undefined;
}

const initialState: InitialState = {
    liveMatch: liveMatch,
    liveMatchs: []
}

const liveSlice = createSlice({
    name: 'live',
    initialState,
    reducers: {
        setLiveMatch: (state, action: PayloadAction<LiveMatch | undefined>) => {
            state.liveMatch = action.payload
        }
    }
});

export const { setLiveMatch } = liveSlice.actions;
export default liveSlice.reducer;

