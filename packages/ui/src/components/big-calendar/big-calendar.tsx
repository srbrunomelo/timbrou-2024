"use client";
import dayjs from "dayjs";
import { useState } from "react";
import {
  Calendar,
  type CalendarProps,
  type View,
  Views,
  dayjsLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./big-calendar.css";
const localizer = dayjsLocalizer(dayjs);

export type TEvent = {
  id: string;
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
};

export type TBigCalendarProps = {
  events: TEvent[];
};

export const BigCalendar = (props: TBigCalendarProps) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  const CalendarComp = Calendar as unknown as (
    props: CalendarProps,
  ) => React.ReactNode;

  return (
    <CalendarComp
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      views={{
        work_week: true,
        day: true,
      }}
      view={view}
      onView={handleViewChange}
      style={{ height: "98%" }}
      defaultDate={new Date()}
      min={new Date(2024, 0, 1, 6, 0, 0)}
      max={new Date(2024, 0, 1, 20, 0, 0)}
    />
  );
};
