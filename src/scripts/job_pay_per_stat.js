
const jobPayPerStat = function (timer, statStart, gene, payoutRatio, maxStat, status) {
  const geneDecay = (gene/10)/2

  let payout = timer * (payoutRatio) * (statStart - ((geneDecay) * timer))/maxStat * 100 * 2 /200

  const payoutHungerMax = (- (geneDecay) * (statStart/(2 * geneDecay)) * (statStart/(2 * geneDecay)) + (statStart) * (statStart/(2 * geneDecay))) * (payoutRatio) / 400 * 2

  if (status <= 0) {
    payout = payoutHungerMax

  }
  return payout
}

module.exports = jobPayPerStat