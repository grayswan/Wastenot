export default function currentUser() {
  let user = localStorage.getItem('user');
  if (user !== null) {
    return JSON.parse(user);
  } else {
    return false;
  }
}
