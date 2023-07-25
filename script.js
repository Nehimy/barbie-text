function createStars() {
  let positionX, positionY;
  let dimension = 0;
  let star;
  let stars = [];

  for (var i = 1; i <= 500; i++) {
    let svgns = "http://www.w3.org/2000/svg";
    star = document.createElementNS(svgns,'circle');

    dimension = Math.floor(Math.random() * (2.6 - 0.5 + 1) ) + 0.3;

    positionX = Math.floor(Math.random() * (100 - (-20) + 15) ) + (-20);
    positionY = Math.floor(Math.random() * (100 - (-50) + 50) ) + (-50);

    /* position */
    star.setAttributeNS(null, 'cx', positionX);
    star.setAttributeNS(null, 'cy', positionY);

    /* radio */

    // star.setAttributeNS(null, 'r', 0.1);
    // star.setAttributeNS(null, 'style', 'fill: while;' );


    console.log(star);

    star.classList.add('star');
    document.querySelector('svg').appendChild(star);
  }
}
createStars();
