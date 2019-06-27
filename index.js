window.addEventListener('DOMContentLoaded', (e) => {
  function changeColor() {
    let tableBody = document.querySelector('#table-body')
    let tableArr = Array.from(tableBody.children)
    tableArr.forEach(row => {
      console.log(row);
    })
  }

  changeColor()

})
