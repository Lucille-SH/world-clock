function updateDate() {
  let lisbonElement = document.querySelector(".city-lisbon");
  let lisbonDateElement = lisbonElement.querySelector("#date");
  let lisbonTimeElement = lisbonElement.querySelector("#time");
  let formatTimeA = moment().tz("Europe/Lisbon").format("LL");
  let formatDateA = moment()
    .tz("Europe/Lisbon")
    .format("hh:mm:ss [<small>]A[</small>]");

  let edmontonElement = document.querySelector(".city-edmonton");
  let edmontonDateElement = edmontonElement.querySelector("#date");
  let edmontonTimeElement = edmontonElement.querySelector("#time");
  let formatTimeB = moment().tz("America/Edmonton").format("LL");
  let formatDateB = moment()
    .tz("America/Edmonton")
    .format("hh:mm:ss [<small>]A[</small>]");

  let losAngelesElement = document.querySelector(".city-los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector("#date");
  let losAngelesTimeElement = losAngelesElement.querySelector("#time");
  let formatTimeC = moment().tz("America/Los_Angeles").format("LL");
  let formatDateC = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");

  edmontonDateElement.innerHTML = formatTimeB;
  edmontonTimeElement.innerHTML = formatDateB;
  lisbonDateElement.innerHTML = formatTimeA;
  lisbonTimeElement.innerHTML = formatDateA;
  losAngelesDateElement.innerHTML = formatTimeC;
  losAngelesTimeElement.innerHTML = formatDateC;
}

updateDate();
setInterval(updateDate, 1000);
