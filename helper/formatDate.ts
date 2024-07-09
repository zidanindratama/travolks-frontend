export const formatDate = (dateString: string): string => {
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date: Date = new Date(dateString);
  const day: string = days[date.getUTCDay()];
  const dateNumber: number = date.getUTCDate();
  const month: string = months[date.getUTCMonth()];
  const year: number = date.getUTCFullYear();
  const hours: string = date.getUTCHours().toString().padStart(2, "0");
  const minutes: string = date.getUTCMinutes().toString().padStart(2, "0");

  return `${day}, ${dateNumber}-${month}-${year} at ${hours}:${minutes}`;
};
