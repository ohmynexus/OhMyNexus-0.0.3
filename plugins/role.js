const roles = {
  'Novice': 0, 
  'Apprentice': 5,
  'Initiate': 10,
  'Adept': 15,
  'Specialist': 20,
  'Elite': 25,
  'Master': 30,
  'Grandmaster': 40,
  'Archmage': 50,
  'Demigod': 60,
  'God': 70,
  'Overgod': 80,
  'Ascendant': 90,
  'Celestial': 100,
  'Divine': 150
}

module.exports = {
  before (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}