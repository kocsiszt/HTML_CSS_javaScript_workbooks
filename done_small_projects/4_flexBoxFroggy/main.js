const buttonElement = document.querySelector("button");
console.log(buttonElement);

function addCSS() {
  const textAreaElement = document.querySelector("textarea");
  const css = textAreaElement.value;
  console.log(css);
  const foreFront = document.querySelector("#forefront");
  foreFront.style.cssText = css;
}

buttonElement.addEventListener("click", addCSS);

//Solution
/*
flex-direction: column;
flex-wrap: wrap;
*/
