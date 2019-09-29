const arabicToRoman = arabic => {
  const arabicUnity = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ];

  const arabicDozens = [
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "CX"
  ];

  const arabicHundreds = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM"
  ];

  let roman = [];

  if (arabic < 999 && arabic >= 0) {
    roman.push(arabicHundreds[Math.floor(arabic / 100)]);
    roman.push(arabicDozens[Math.floor(arabic / 10)]);
    roman.push(arabicUnity[arabic % 10]);
  }

  return roman.join("");
};

export { arabicToRoman };
