const fs = require("fs");
const gridWiz = require("grid-wiz");

const gridConfig = require("../data/gridConfig.js");

// Generate the CSS for each Grid Wiz support mode
const displayFlexCSS = gridWiz({
  ...gridConfig,
  support: "displayFlex"
});

const cssVariablesCSS = gridWiz({
  ...gridConfig,
  support: "cssVariables"
});

const displayGridCSS = gridWiz({
  ...gridConfig,
  support: "displayGrid"
});

// Save each CSS snippet to a CSS file
fs.writeFile("./static/css/kirby-display-flex.css", displayFlexCSS, function(
  err
) {
  if (err) {
    return console.log(err);
  }
  console.log("kirby-display-flex.css was saved!");
});

fs.writeFile("./static/css/kirby-css-variables.css", cssVariablesCSS, function(
  err
) {
  if (err) {
    return console.log(err);
  }
  console.log("kirby-css-variables.css was saved!");
});

fs.writeFile("./static/css/kirby-display-grid.css", displayGridCSS, function(
  err
) {
  if (err) {
    return console.log(err);
  }
  console.log("kirby-display-grid.css was saved!");
});

// Save each CSS snippet to a JS file
fs.writeFile(
  "./static/js/kirby-display-flex.js",
  `const index = '${displayFlexCSS}'; module.exports = index;`,
  function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("kirby-display-flex.js was saved!");
  }
);

fs.writeFile(
  "./static/js/kirby-css-variables.js",
  `const index = '${cssVariablesCSS}'; module.exports = index;`,
  function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("kirby-css-variables.js was saved!");
  }
);

fs.writeFile(
  "./static/js/kirby-display-grid.js",
  `const index = '${displayGridCSS}'; module.exports = index;`,
  function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("kirby-display-grid.js was saved!");
  }
);
