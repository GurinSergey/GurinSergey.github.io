window.onload = () => {
  document.getElementById('r_l').innerHTML = document
    .getElementById('r_l')
    .innerHTML.padEnd(14, String.fromCharCode(160))

  document.getElementById('phone').innerHTML = document
    .getElementById('phone')
    .innerHTML.padEnd(9, String.fromCharCode(160))
}
