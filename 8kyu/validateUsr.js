function validateUsr(username) {
  return (/^[a-z0-9_]{4,16}$/g).test(username);
}
