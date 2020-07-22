const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  genSalt: plainPsw => bcrypt.hash(plainPsw, saltRounds).then(hash => hash),
  compareSalt: (plainPsw, hash) =>
    bcrypt.compare(plainPsw, hash).then(result => result),
  uniqBy: (a, key) => {
    //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    return [...new Map(a.map(x => [key(x.email), x])).values()]
  },
}
