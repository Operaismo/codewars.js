function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  return pontoonDistance / youSpeed <
    sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    ? 'Alive!'
    : 'Shark Bait!';
}
