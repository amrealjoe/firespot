const num2Time = (num) => {
  if (num < 100) num *= 100;
  const [_, hh, mm] = num.toString().match(/(\d{1,2})(\d{2})$/);
  return `${hh.padStart(2, "0")}:${mm}`;
};

export default num2Time;
