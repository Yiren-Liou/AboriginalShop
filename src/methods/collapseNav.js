export default function collapseNav() {
  const topNav = document.querySelector('#topNav');
  if (topNav.classList.contains('show')) {
    topNav.classList.remove('show');
  }
}
