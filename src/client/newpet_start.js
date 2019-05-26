const newPet_start = function(owner) {
  return {
    name: 'A Deena',
    user_id: owner,
    gender: Math.random() > .5 ? 'm' : 'f',
    time_at_birth: new Date().getTime(),
    time_last_fed_or_work: new Date().getTime(),
    time_last_mated: new Date().getTime()
  }
}

console.log(newPet_start(1))