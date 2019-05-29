const caculateHungerHappy = require("./caculate_hunger_and_happiness.js");
const jobPayPerStat = require("./job_pay_per_stat.js");

const caculateJobPay = function(time, payRate, jobStatus) {
  const maxHunger = 200;
  const maxHappy = 200;

  const [job_multiplier_str, job_multiplier_int] = payRate;

  const [
    job_start_time,
    hunger_at_start,
    happy_at_start,
    intelligence_gene,
    strength_gene
  ] = [
    jobStatus.job_start_time,
    jobStatus.hunger_at_start,
    jobStatus.happy_at_start,
    jobStatus.intelligence_gene,
    jobStatus.strength_gene
  ];

  const timer = (time - job_start_time) / 1000;

  const payoutRatio =
    job_multiplier_str * strength_gene + job_multiplier_int * intelligence_gene;

  const status = caculateHungerHappy(
    time,
    job_start_time,
    hunger_at_start,
    happy_at_start,
    strength_gene,
    intelligence_gene,
    true
  );
  // console.log("time", typeof time);
  // console.log("job start time", typeof job_start_time);
  // console.log("hunger at start", typeof hunger_at_start);
  // console.log("strength gene", typeof strength_gene);
  // console.log("intelligence gene", typeof intelligence_gene);
  const hunger = status.hunger;
  const happiness = status.happiness;

  const payoutHunger = jobPayPerStat(
    timer,
    hunger_at_start,
    strength_gene,
    payoutRatio,
    maxHunger,
    hunger
  );

  const payoutHappy = jobPayPerStat(
    timer,
    happy_at_start,
    intelligence_gene,
    payoutRatio,
    maxHappy,
    happiness
  );

  const payout = payoutHunger + payoutHappy;

  return { payout, hunger, happiness };
};

module.exports = caculateJobPay;
