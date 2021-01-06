const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];

  const currentPoint = [1, 4];

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };


function getTheNearestLocation(locations, currentPoint) {
    console.log("here")
    if (!locations.length)
        return null;
    let arr = locations.map( ([name, coord]) => [name, coord, getDistance(coord, currentPoint)] )
    let [minName, mincoordMain, minCoord] = arr[0];
    for (let [name, coordMainIn, coord] of arr) {
        if (coord < minCoord) {
            minName = name;
            minCoord = coord
            mincoordMain = coordMainIn
        }
    }
    return [minName, mincoordMain]
}


  console.log(getTheNearestLocation(locations, currentPoint))