if (document.getElementById('electricityUseChart')) {

  // context
  var c_canvas = document.getElementById("electricityUseChart");
  var context = c_canvas.getContext("2d");

  context.strokeStyle = "#eee";
  context.stroke();

  // axis
  context.beginPath();
  context.moveTo(0, 375 / 2);
  context.lineTo(500, 375 / 2);

  context.moveTo(60, 0);
  context.lineTo(60, 27);
  context.moveTo(60, 47);
  context.lineTo(60, 375);

  context.strokeStyle = "#000";
  context.stroke();


  // text
  context.font = "bold 12px sans-serif";
  context.fillText("month", 248, 200);
  context.fillText("kwh", 28, 42);


  // graphing functons
  var rouletteRed = (function () {
    var winnings = 0;
    return function () {
      winnings += Math.random() < 17 / 36 ? 1 : -1;
      return winnings;
    };
  })();

  var roulette17 = (function () {
    var winnings = 0;
    return function () {
      winnings += Math.random() < 1 / 36 ? 35 : -1;
      return winnings;
    };
  })();

  var lineGraph = function (o) {
    context.beginPath();
    context.moveTo(60, 375 / 2);
    for (var i = 61; i < 500; i += 1) {
      context.lineTo(i, -o.stepFunction() + 375 / 2);
    }
    context.strokeStyle = o.color;
    context.stroke();
  };

  lineGraph({
    'stepFunction': rouletteRed,
    'color': '#e00'
  });

  lineGraph({
    'stepFunction': roulette17,
    'color': '#00e'
  });

}