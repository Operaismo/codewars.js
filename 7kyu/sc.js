function sc(apple){
  for (i=0;i<apple.length;i++)
    for (j=0;j<apple[i].length;j++) {
      if (apple[i][j] == "B")
        return [i,j];
     }   
  return null;
}