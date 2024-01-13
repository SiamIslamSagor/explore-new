import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const DateTime = () => {
  const [value, setValue] = useState(new Date());
  console.log(value);

  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold">DateTimePicker</h1>
      <div className="p-5 bg-ed-300">
        <DateTimePicker
          onChange={setValue}
          value={value}
          // format="dd MMMM DD h:mm:ss a"
        />
      </div>
    </div>
  );
};

export default DateTime;
