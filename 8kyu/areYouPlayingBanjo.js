function areYouPlayingBanjo(name) {
  return name.startsWith("R") || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
}