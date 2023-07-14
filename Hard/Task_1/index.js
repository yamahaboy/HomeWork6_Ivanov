//https://www.codewars.com/kata/transportation-on-vacation
const calcRentCar = (days) => {
  const saleMoreThenSevenDays = 50;
  const saleMoreThenThreeDays = 20;
  const priceForDay = 40;

  let summDays = days * priceForDay;
  if (days >= 7) {
    summDays -= saleMoreThenSevenDays;
  } else if (days >= 3) {
    summDays -= saleMoreThenThreeDays;
  }
  return summDays;
};
const init = () => {
  const dayCount = +prompt("Enter how many days you want rent a car?");

  const totalPrice = calcRentCar(dayCount);

  console.log(`Days of rent car: ${dayCount} => price for that: ${totalPrice}$`);
};

init();
