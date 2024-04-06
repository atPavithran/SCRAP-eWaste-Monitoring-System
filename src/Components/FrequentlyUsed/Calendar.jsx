import React, { useState } from 'react';
import DateBox from './DateBox';
import EventPopup from './EventPopup'; // Import the new EventPopup component
import './Calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);

  const handleDateClick = (date) => {
    setCurrentDate(date);
    setShowEventPopup(true);
  };

  const handleCloseEventPopup = () => {
    setShowEventPopup(false);
  };

  const handleEventSubmit = (eventName) => {
    if (eventName && currentDate) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [currentDate]: [...(prevEvents[currentDate] || []), eventName],
      }));
    }
    setShowEventPopup(false);
    setCurrentDate(null);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value, 10);
    setCurrentMonth(new Date(currentMonth.getFullYear(), selectedMonth, 1));
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value, 10);
    setCurrentMonth(new Date(selectedYear, currentMonth.getMonth(), 1));
  };

  const renderEvents = (date) => {
    return (events[date] || []).map((eventName, index) => (
      <div key={index} className="event">
        {eventName}
      </div>
    ));
  };

  const renderCalendar = () => {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startingDayIndex = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    const renderEmptyCells = Array.from({ length: startingDayIndex }, (_, index) => (
      <div key={`empty-${index}`} className="empty-cell"></div>
    ));

    const renderDays = Array.from({ length: totalDays }, (_, index) => {
      const dayOfMonth = index + 1;
      const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayOfMonth);
      const dateString = currentDate.toISOString().split('T')[0];

      return (
        <div key={dateString} className="calendar-cell">
          <DateBox dayOfMonth={dayOfMonth} dateString={dateString} onDateClick={handleDateClick} events={renderEvents(dateString)} />
        </div>
      );
    });

    return (
      <div className="calendar-container">
        <div className="calendar">
          <div className="month-switch">
            <div className="arrow" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}>&#9666;</div>
            <div className="month-dropdown">
              <select className="month-select" onChange={handleMonthChange} value={currentMonth.getMonth()}>
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index} value={index}>
                    {new Date(currentMonth.getFullYear(), index, 1).toLocaleString('en-US', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>
            <div className="year-dropdown">
              <select className="year-select" onChange={handleYearChange} value={currentMonth.getFullYear()}>
                {Array.from({ length: 20 }, (_, index) => (
                  <option key={index} value={currentMonth.getFullYear() - 5 + index}>
                    {currentMonth.getFullYear() - 5 + index}
                  </option>
                ))}
              </select>
            </div>
            <div className="arrow" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}>&#9656;</div>
          </div>
          <div className="days-of-week">
            {daysOfWeek.map((day) => (
              <div key={day} className="day-of-week">
                {day}
              </div>
            ))}
          </div>
          <div className="dates">
            {renderEmptyCells}
            {renderDays}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {showEventPopup && (
        <EventPopup onClose={handleCloseEventPopup} onSubmit={handleEventSubmit} />
      )}
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
