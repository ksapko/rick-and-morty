const chacaterList = document.querySelector("#chacater-list");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => buildCharacters(data.results));

function getCharacterStatus(status) {
  if (status === "Alive") return "rgb(85, 204, 68)";
  if (status === "Dead") return "rgb(214, 61, 46)";

  return "#FFFF8F";
}

function buildCharacter(characterData) {
  const template = `
  <div class="character-container">
        <img height=200 src="${characterData.image}" alt="">
        <div class="info">
          <h3>${characterData.name}</h3>
          <ul> 
          <li class="flex">
              <div class="circle" style="background:${getCharacterStatus(
                characterData.status
              )}"></div> 
              <strong>${characterData.status}</strong>
          </li>
              <li>spieces: <strong>${characterData.species}</strong></li>
              <li>gender: <strong>${characterData.gender}</strong></li>
              <li>location: <strong>${characterData.location.name}</strong></li>
          </ul>
        </div>
        </div>`;
  const character = document.createElement("li");
  character.innerHTML = template;
  character.classList.add("character");
  chacaterList.appendChild(character);
}

function buildCharacters(data) {
  data.forEach((character) => buildCharacter(character));
}
