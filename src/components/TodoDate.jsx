import { useEffect, useState } from "react";

function TodoDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDate(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2 className="date-time">{date}</h2>;
}

export default TodoDate;
