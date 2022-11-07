import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { Container, Time } from "./styles";

export const RemainingTime: FC<{ date: string }> & { Container: FC } = ({ date }) => {
    const a = moment(date, "DD MMM YYYY, dddd hh:mmA");
    const b = moment();
    const [seconds, setSeconds] = useState(a.diff(b, 'seconds'));

    useEffect(() => {
        const interval = setInterval(() => {
            const a = moment(date, "DD MMM YYYY, dddd hh:mmA");
            const b = moment();
            setSeconds(a.diff(b, 'seconds'));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [date, setSeconds]);
    const hours = Math.floor(seconds / 3600);
    let remainSec = seconds - hours * 3600;
    const minutes = Math.floor(remainSec / 60);
    remainSec = Math.floor(remainSec - minutes * 60)
    return <Time>{hours}:{minutes}:{remainSec}</Time>;
}

RemainingTime.Container = Container;