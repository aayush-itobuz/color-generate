

function colorChange() {
  let color = document.getElementById("changer");
  const minm = 100000;
  const maxm = 999999;
  let hexCode = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  color.innerHTML = "color code : #" + hexCode;
  const bgColor = "#" + hexCode;
  document.body.style.backgroundColor = bgColor;
}

