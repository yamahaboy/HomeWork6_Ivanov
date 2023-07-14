// https://www.codewars.com/kata/5861d28f124b35723e00005e
const drivingUntilEnd = (gallonsLeft, milePerGallone, wholeMiles) => {
  let fuelConsumption = milePerGallone * gallonsLeft;
  if (wholeMiles <= fuelConsumption) {
    return true;
  } else {
    return false;
  }
};

const init = () => {
  const gallonsLeft = 2;
  const wholeMiles = 50;
  const milePerGallone = 25;

  const canYoudrive = drivingUntilEnd(gallonsLeft, milePerGallone, wholeMiles);
  console.log(`Can you arrive to petrol station: ${canYoudrive}`)
};

init();
