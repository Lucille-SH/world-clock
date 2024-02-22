function updateDate() {
  let lisbonElement = document.querySelector(".city-lisbon");
  let lisbonDateElement = lisbonElement.querySelector("#date");
  let lisbonTimeElement = lisbonElement.querySelector("#time");
  let formatDateA = moment().tz("Europe/Lisbon").format("LL");
  let formatTimeA = moment()
    .tz("Europe/Lisbon")
    .format("hh:mm [<small>]A[</small>]");

  let edmontonElement = document.querySelector(".city-edmonton");
  let edmontonDateElement = edmontonElement.querySelector("#date");
  let edmontonTimeElement = edmontonElement.querySelector("#time");
  let formatDateB = moment().tz("America/Edmonton").format("LL");
  let formatTimeB = moment()
    .tz("America/Edmonton")
    .format("hh:mm [<small>]A[</small>]");

  let losAngelesElement = document.querySelector(".city-los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector("#date");
  let losAngelesTimeElement = losAngelesElement.querySelector("#time");
  let formatDateC = moment().tz("America/Los_Angeles").format("LL");
  let formatTimeC = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm [<small>]A[</small>]");

  edmontonTimeElement.innerHTML = formatTimeB;
  edmontonDateElement.innerHTML = formatDateB;
  lisbonTimeElement.innerHTML = formatTimeA;
  lisbonDateElement.innerHTML = formatDateA;
  losAngelesTimeElement.innerHTML = formatTimeC;
  losAngelesDateElement.innerHTML = formatDateC;
}

function showSelectedCity(event) {
  let timeZone = event.target.value;
  let icon = "🌍";
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
    icon = "📍";
  }

  let cityValue = timeZone.replace("_", " ").split("/")[1];
  let cityDetails = moment().tz(timeZone);

  let selectedCity = document.querySelector(".selected-city");
  selectedCity.classList.add("border");

  selectedCity.innerHTML = `<div class="cities city-style">
        <div>
          <h2>${cityValue} ${icon}</h2>
          <div class="date" id="date">${cityDetails.format("LL")}</div>
        </div>
        <div class="time" id="time">${cityDetails.format(
          "hh:mm [<small>]A[</small>]"
        )}</div>
      </div>`;
}

let citySelect = document.querySelector("#select-cities");
citySelect.addEventListener("change", showSelectedCity);

updateDate();
setInterval(updateDate, 1000);
