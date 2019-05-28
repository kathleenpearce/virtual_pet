
const caculateHungerHappy = function(timeNow, timeLast, hungerStart, happyStart, str, int, working){

  let timer = (timeNow - timeLast) / 1000

  let maxHunger = 200
  let maxHappy = 200


  let hunger = ((hungerStart - (str/10) * (timer))/maxHunger)*100

  let time_at_half_hunger = -(.5 * maxHunger - hungerStart)/(str/10)*1000 + parseInt(timeLast)


  if (hunger < 0){
    hunger = 0
  }

  // (time_at_half_hunger - this.props.petStatus.time_last_fed_or_work)/1000 TIME IT TAKES TO GET TO 50%

  let happiness_at_half = (((time_at_half_hunger - timeLast)/1000) * (maxHappy/60)) + happyStart
  if (happiness_at_half > 100) {
    happiness_at_half = 100
  }

  let happiness
  if ((hunger > 50) && !working){
    happiness = (((timeNow - timeLast)/1000) * (maxHappy/3600)) + happyStart
  } else {
    happiness = -(((timeNow - time_at_half_hunger)/1000) * (int/10)) + happiness_at_half
  }


  if (happiness > 100){
    happiness = 100
  }

  let happyId = 1

  if (happiness > 50) {
    happyId = 1
  } else if (happiness > 0) {
    happyId = 2
  } else {
    happyId = 3
    happiness = 0
  }
  return {hunger, happiness, happyId}
}

module.exports = caculateHungerHappy