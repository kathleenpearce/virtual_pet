// as the pet gets hungrier and unhappier it earns less money per second while at work
const jobPayPerStat = function (timer, statStart, gene, payoutRatio, maxStat, status) {
  const geneDecay = (gene/10)/2
// calculates the decrease in pay as a quadratic, that has been doubled in size bug 1/2'd in return - in order to make the max
// at the point where the stat crosses the zero x intercept
  let payout = timer * (payoutRatio) * (statStart - ((geneDecay) * timer))/maxStat * 100 * 2 /200
// calculates the max point of the quadratic to ensure that if this point is reached, the amount of money
// being earned is not decreased
  const payoutHungerMax = (- (geneDecay) * (statStart/(2 * geneDecay)) * (statStart/(2 * geneDecay)) + (statStart) * (statStart/(2 * geneDecay))) * (payoutRatio) / 400 * 2

  if (status <= 0) {
    payout = payoutHungerMax

  }
  return payout
}

module.exports = jobPayPerStat