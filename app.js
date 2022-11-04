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
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))