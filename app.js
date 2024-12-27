function colorChange() {
  const color = document.getElementById("changer");
  const minm = 100000;
  const maxm = 999999;
  const hexCode = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  const bgColor = "#" + hexCode;

  color.innerHTML = "Color code : #" + hexCode;
  document.body.style.backgroundColor = bgColor;
}

