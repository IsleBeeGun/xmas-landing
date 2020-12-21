document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('snowfall');
  var ctx = canvas.getContext('2d');
  var W = canvas.parentElement.scrollWidth;
  var H = canvas.parentElement.scrollHeight;
  canvas.width = W;
  canvas.height = H;
  var mp = Math.floor(W / 6);
  if (W < 400) {
    mp = Math.floor(W / 5);
  }
  var particles = [];
  var angle = 2;
  for (var i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 4 + 0,
      d: Math.random() * mp,
    });
  }
  ///////////////////////////////////
  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    for (var i = 0; i < mp; i++) {
      var p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
    }
    ctx.fill();
    update();
  }
  ///////////////////////////////////
  function update() {
    angle += 0.0;
    for (var i = 0; i < mp; i++) {
      var p = particles[i];
      //p.y += 1;
      p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) * 0.5;
      p.x += Math.sin(angle) * 0.5;

      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = { x: -4, y: Math.random() * H, r: p.r, d: p.d };
          } else {
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
          }
        }
      }
    }
  }
  ///////////////////////////////////
  function updateIfResized() {
    if (canvas.parentElement.scrollWidth !== W) {
      W = canvas.parentElement.scrollWidth;
      canvas.width = W;
    }
    if (canvas.parentElement.scrollHeight !== H) {
      H = canvas.parentElement.scrollHeight;
      canvas.height = H;
    }
  }
  setInterval(updateIfResized, 1000);
  setInterval(draw, 16);
});
