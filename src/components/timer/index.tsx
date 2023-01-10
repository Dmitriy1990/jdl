import React, { useState, useEffect, useRef, FC } from "react";

type CProps = {
  data: number;
  over?: () => void;
};

const Countdown: FC<CProps> = ({ data, over }: CProps) => {
  const milisecond = useRef(data);
  const previous = useRef<any>(milisecond);
  const [timer, setTimer] = useState(data);
  const initialState = {
    days: 0,
    minutes: 0,
    seconds: 0,
  };

  let handle: any;

  useEffect(() => {
    cancelAnimationFrame(handle);
    milisecond.current = data;
  }, [data]);

  useEffect(() => {
    if (milisecond.current <= 0) return;

    const effectInitialMs = milisecond.current;
    let effectInitialTimeStamp: number;
    let handle: any;

    const step = (timestampMs: number) => {
      if (effectInitialTimeStamp === undefined)
        effectInitialTimeStamp = timestampMs;
      const elapsed = timestampMs - effectInitialTimeStamp;
      milisecond.current = effectInitialMs - elapsed;

      if (milisecond.current <= 0) {
        setTimer(0);
        cancelAnimationFrame(handle);
        over && over();
      } else {
        const seconds = Math.floor(milisecond.current / 1000);
        const isUpdate = seconds !== Math.floor(previous.current / 1000);
        previous.current = milisecond.current;
        if (isUpdate) {
          setTimer(seconds);
        }
        handle = window.requestAnimationFrame(step);
      }
    };

    handle = window.requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(handle);
    };
  }, [data]);

  const convertTime = (count: any) => {
    const d = Math.floor(count / (3600 * 24));
    const seconds = Math.floor(count % 60);
    const minutes = Math.floor((count / 60) % 60);
    const hours = Math.floor((count / (60 * 60)) % 24);
    const days = Math.floor(count / (60 * 60 * 24));
    let formatted;
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    formatted = h + ":" + m + ":" + s;
    return formatted;
  };

  return <>{convertTime(timer)}</>;
};

type Props = {
  data: string | Date;
  delay?: number;
  over?: () => void;
};

const Timer: FC<Props> = ({ data, delay, over }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [data]);

  useEffect(() => {
    const day: unknown = new Date().valueOf();
    const day1: unknown = data
      ? new Date(data).valueOf() + (delay ? delay : 0)
      : new Date().valueOf();

    const mins =
      Math.trunc(((day1 as number) - (day as number)) / 1000 / 60) * 60;
    const mins1 = (((day1 as number) - (day as number)) / 1000 / 60) * 60;
    if (delay && mins1 > delay / 1000) {
      setCount(mins * 1000);
    } else {
      setCount(mins1 * 1000);
    }
  }, [data]);

  return <>{count > 0 ? <Countdown data={count} over={over} /> : "00:00:00"}</>;
};

export default Timer;
