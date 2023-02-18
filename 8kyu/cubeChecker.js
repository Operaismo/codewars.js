var cubeChecker = function(volume, side){
  return volume === side ** 3 && volume > 0 && side > 0;
};