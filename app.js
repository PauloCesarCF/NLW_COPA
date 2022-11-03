function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./asserts/icon-${player1}.svg" alt="BANDEIRA DO ${player1}">
    <strong>${hour}</strong>
    <img src="./asserts/icon-${player2}.svg" alt="BANDEIRA DO ${player2}">
  </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}">
    <h2>${date} <span>${day}</span></h2>

    <ul>
      ${games}
    </ul>
  </div>`
}

document.querySelector('.cards').innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard("21/11", "segunda", createGame("england", "10:00", "iran")) +
  createCard("24/11", "quinta",
    createGame("Suiça", "07:00", "Camarões") +
    createGame("Uruguai", "10:00", "Coreia do sul") +
    createGame("Portugal", "13:00", "Gana") +
    createGame("brazil", "16:00", "serbia"))