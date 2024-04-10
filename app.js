let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
function hesablayici() {
let miqdaralma = document.getElementById("miqdar");
let qaliqpul = document.getElementById("qaliq");
 let miqdar = miqdaralma.value;
  let qaliq = heasblaqaliq(miqdar);
  qaliqpul.innerHTML = "";
  qaliq.map((imageSrc) => {
    let img = document.createElement("img");
    img.src = imageSrc;
    qaliqpul.appendChild(img);
  });
}
function heasblaqaliq(miqdar) {
  let qaliq = [];
  pullar.map((pul) => {
    let imageSrc = `${pul}.jpg`;
    for (let i = 0; i < Math.floor(miqdar / pul); i++) {
      qaliq.push(imageSrc);
    }
    miqdar %= pul;
  });
  return qaliq;
}
