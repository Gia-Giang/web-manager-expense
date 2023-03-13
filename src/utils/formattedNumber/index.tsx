const formattedNumber = (data: number) => {
  const number = data;
  const formattedNumber = number.toLocaleString("de-DE");
  return formattedNumber + ` ` + "đ";
};

export default formattedNumber;
