
import React, { useState } from 'react';
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from '@/components/ui/dropdown-menu';

import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const Calender = () => {
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />

      <Card className="p-4">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <Button onClick={() => setDate(new Date())}>Today</Button>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="capitalize">
                {view}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setView('month')}>Month</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setView('week')}>Week</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setView('day')}>Day</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setView('agenda')}>Agenda</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>

        <BigCalendar
          localizer={localizer}
          events={scheduleData}
          startAccessor="StartTime"
          endAccessor="EndTime"
          titleAccessor="title"
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          style={{ height: 650 }}
        />
      </Card>
    </div>
  );
};

export default Calender;
