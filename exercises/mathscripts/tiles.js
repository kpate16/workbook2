var boxes, tiles;

var length = 12;
var width = 10;

var area = length * width;

tiles = area * 1.1;

boxes = tiles / 12;

console.log(Math.ceil(boxes));
