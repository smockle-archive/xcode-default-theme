#!/usr/bin/env node
// @ts-check
const fs = require("fs");

const colorMap = {
  dark: {
    "#d4d4d4": "#D4D4D4",
    "#000080": "#0000A6",
    "#6a9955": "#62AD41",
    "#569cd6": "#30A0FC",
    "#b5cea8": "#B1D99D",
    "#646695": "#5559A4",
    "#d7ba7d": "#F2C462",
    "#9cdcfe": "#7FE5FF",
    "#f44747": "#FF1313",
    "#ce9178": "#E8865E",
    "#6796e6": "#418CFF",
    "#808080": "#808080",
    "#d16969": "#F04A4A",
    "#dcdcaa": "#EBEB9B",
    "#4ec9b0": "#29EEC6",
    "#c586c0": "#D873D0"
  },
  light: {
    "#000000ff": "#000000",
    "#000080": "#0A0A76",
    "#008000": "#0A760A",
    "#0000ff": "#1313EC",
    "#09885a": "#137E57",
    "#811f3f": "#7A2642",
    "#800000": "#760A0A",
    "#ff0000": "#EC1313",
    "#cd3131": "#C13D3D",
    "#a31515": "#982020",
    "#0451a5": "#105299",
    "#000000": "#000000",
    "#795e26": "#735C2C",
    "#267f99": "#2F7A90",
    "#af00db": "#A510CB",
    "#001080": "#0A1776",
    "#d16969": "#C97171"
  }
};

function mapTokenColors(theme) {
  const themeVS = JSON.parse(
    fs.readFileSync(`./templates/${theme}_vs.json`, "utf8")
  );
  const themePlus = JSON.parse(
    fs.readFileSync(`./templates/${theme}_plus.json`, "utf8")
  );
  const tokenColors = [...themeVS.tokenColors, ...themePlus.tokenColors].map(
    tokenColor => {
      const mappedColor = {
        ...tokenColor
      };
      if (
        tokenColor.settings &&
        tokenColor.settings.foreground &&
        tokenColor.settings.foreground.toLowerCase() in colorMap[theme]
      ) {
        mappedColor.settings.foreground =
          colorMap[theme][tokenColor.settings.foreground.toLowerCase()];
      }
      return mappedColor;
    }
  );
  return tokenColors;
}

function writeTokenColors(theme) {
  const template = JSON.parse(
    fs.readFileSync(`./templates/xcode-${theme}.json`, "utf8")
  );
  template.tokenColors = mapTokenColors(theme);
  fs.writeFileSync(
    `./xcode-partial-${theme}-theme.json`,
    JSON.stringify(template, null, 2)
  );
}

writeTokenColors("dark");
writeTokenColors("light");
