const balloon = document.getElementById("air-balloon");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
const graphql = document.getElementById("graphql");

function move() {
  const incremental = window.scrollY;
  //console.log(incremental);

  // the 10 ewfers ti the height from the bottom of the sky section. We added this in the css file. Fell free to move all styling to the JS file if you preter to keel the 10 consident
  balloon.style.bottom = 10 + incremental * 0.1 + "%";

  cloudOne.style.bottom = 40 + incremental * 0.12 + "%"; // itt a 40 és lentebba  css ből van bottom és margin left
  cloudOne.style.left = 75 + incremental * 0.1 + "%";

  cloudTwo.style.bottom = 80 + incremental * 0.14 + "%";
  cloudTwo.style.left = 70 + incremental * 0.15 + "%";

  cloudThree.style.bottom = 60 + incremental * 0.11 + "%";
  cloudThree.style.left = 0 + incremental * -0.12 + "%";

  cloudFour.style.bottom = 70 + incremental * 0.16 + "%";
  cloudFour.style.left = 20 + incremental * -0.15 + "%"; // a 0.15 itt random és a speed et jelenti

  cloudFive.style.bottom = 60 + incremental * 0.2 + "%";
  cloudFive.style.left = 60 + incremental * 0.16 + "%";

  javascript.style.left = 20 + incremental * -2.2 + "%";
  react.style.left = 26 + incremental * -1.5 + "%";
  graphql.style.left = 33 + incremental * -1 + "%";
}

window.addEventListener("scroll", move);
