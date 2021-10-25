// Web API's and Single Threaded JS Demo
console.log("Sending request to the server");
setTimeout(() => {
  console.log("Here is the data you requested for...");
}, 3000);
console.log("I am at the end of the file");

// CALLBACK HELL!!! demo
const header = document.querySelector(".header");
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    header.style.color = "white";
    doNext && doNext();
  }, delay);
};

delayedColorChange("olive", 1000, () => {
  delayedColorChange("red", 1000, () => {
    delayedColorChange("orange", 1000, () => {
      delayedColorChange("yellow", 1000, () => {
        delayedColorChange("green", 1000, () => {
          delayedColorChange("blue", 1000);
        });
      });
    });
  });
});

// PROMISES
