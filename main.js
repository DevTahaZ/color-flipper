const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#008000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Gray", hex: "#808080" },
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Teal", hex: "#008080" },
  { name: "Navy", hex: "#000080" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Maroon", hex: "#800000" },
  { name: "Olive", hex: "#808000" },
  { name: "Aquamarine", hex: "#00FFFF" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "SlateGray", hex: "#708090" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Coral", hex: "#FF6F61" },
  { name: "Tomato", hex: "#FF6347" },
  { name: "DarkKhaki", hex: "#BDB76B" },
  { name: "LawnGreen", hex: "#7CFC00" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "Peru", hex: "#CD853F" },
  { name: "Sienna", hex: "#A0522D" },
  { name: "SkyBlue", hex: "#87CEEB" },
  { name: "Violet", hex: "#EE82EE" },
  { name: "Wheat", hex: "#F5DEB3" },
  { name: "AliceBlue", hex: "#F0F8FF" },
  { name: "FireBrick", hex: "#B22222" },
  { name: "HotPink", hex: "#FF69B4" },
  { name: "LemonChiffon", hex: "#FFFACD" },
  { name: "MediumPurple", hex: "#9370DB" },
  { name: "SandyBrown", hex: "#F4A460" },
  { name: "Thistle", hex: "#D8BFD8" },
  { name: "PaleGreen", hex: "#98FB98" },
  { name: "DeepSkyBlue", hex: "#00BFFF" },
  { name: "RosyBrown", hex: "#BC8F8F" },
  { name: "Gainsboro", hex: "#DCDCDC" },
];

const clickHandler = () => {
  let randomNumber = Math.floor(Math.random() * colors.length);
  document.getElementById("colorName").innerHTML = colors[randomNumber].name;
  document.querySelector("body").style.color = colors[randomNumber].hex;
  document.body.style.background = colors[randomNumber].hex;
  console.log(
    randomNumber,
    colors[randomNumber].name,
    colors[randomNumber].hex
  );
};
let clickButton = document
  .getElementById("btn")
  .addEventListener("click", clickHandler);
