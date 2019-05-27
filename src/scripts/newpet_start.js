const newPet_start = function(owner) {
  const timeNow = new Date().getTime()
  return {
    name: 'A Deena',
    user_id: owner,
    gender: Math.random() < .5 ? 'm' : 'f',
    time_at_birth: timeNow,
    time_last_fed_or_work: timeNow,
    time_last_mated: timeNow,
    hunger_at_time_last_fed: 200,
    happiness_at_time_last_fed: 200
  }
}

module.exports = newPet_start