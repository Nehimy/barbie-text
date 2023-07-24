function createStars() {
  let positionX, positionY;
  let dimension = 0;
  let star;
  let stars = [];

  for (var i = 1; i <= 50; i++) {
    let svgns = "http://www.w3.org/2000/svg";
    star = document.createElementNS(svgns,'circle');

    dimension = Math.floor(Math.random() * (2.6 - 0.5 + 1) ) + 0.3;

    positionX = Math.floor(Math.random() * (100 - 0 + 1) ) + 0;
    positionY = Math.floor(Math.random() * (100 - 0.2 + 1) ) + 0.5;

    /* star.style.cx=  positionX + 'px';
     * star.style.cy= positionY + 'px'; */

    /* star.style.width = dimension + 'px';
     * star.style.height = dimension + 'px'; */


    star.setAttributeNS(null, 'cx', positionX);
    star.setAttributeNS(null, 'cy', positionY);

    star.setAttributeNS(null, 'r', 1);
    star.setAttributeNS(null, 'style', 'fill: blue;' );


    console.log(star);

    star.classList.add('star');
    document.querySelector('svg').appendChild(star);
    /* stars[i] = star; */
  }
}
createStars();


var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("height",200);
svg1.setAttribute("width",500);
document.body.appendChild(svg1);

var circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circles.setAttribute("cx",20);
circles.setAttribute("cy",20);
circles.setAttribute("r",20);
svg1.appendChild(circles);
