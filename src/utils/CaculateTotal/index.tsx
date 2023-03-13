const CaculateTotal = (data: any) => {
  return data.reduce((total: any, currentValue: any) => {
    return total + currentValue.total;
  }, 0);
};
export default CaculateTotal;
