import { useState } from 'react';
import { svgSelector } from '../utils/svgSelector';

function sevenDayList() {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    date.setHours(0, 0, 0, 0); // Set to midnight of the day
    return {
      dayNumber: date.getDate(),
      dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
      dayMonth: date.toLocaleDateString('en-US', { month: 'long' }),
      selected: index === 0,
      dayTimestamp: date.getTime(),
    };
  });

  return days;
}

export default function WeekCalendar() {
  const [daysData, setDaysData] = useState(sevenDayList());

  return (
    <div className="week_calendar">
      <div className="calendar_upper">
        <h6 className="calendar_month h4">{(daysData.filter((dd) => dd.selected)[0] ?? { dayMonth: 'undefined' }).dayMonth}</h6>
        <div className="calendar_action_btns">
          <button>{svgSelector({ svgName: 'goback', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}</button>
          <button>{svgSelector({ svgName: 'goback', svgWidth: '28px', svgHeight: '28px', svgFill: '#867c7c' })}</button>
        </div>
      </div>
      <ul className="calendar_bottom">
        {daysData &&
          daysData.map((d, idx) => {
            return (
              <li key={`week_day_${idx}`} className={`calendar_day ${d.selected && 'calendar_day_sltd'}`}>
                <span className="calendar_day_numb h6">{d.dayNumber}</span>
                <p className="calendar_day_title h6">{d.dayName.slice(0, 3)}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
