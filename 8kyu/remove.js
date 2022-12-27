function remove(string) {
  //coding and coding....
  return string[string.length - 1] == "!"
    ? string
        .split("")
        .slice(0, string.split("").length - 1)
        .join("")
    : string;
}
