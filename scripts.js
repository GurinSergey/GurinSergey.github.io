window.onload = () => {
  document.getElementById('r_l').innerHTML = document
    .getElementById('r_l')
    .innerHTML.padEnd(9, String.fromCharCode(160))

  document.getElementById('e_l').innerHTML = document
    .getElementById('e_l')
    .innerHTML.padEnd(10, String.fromCharCode(160))
}
