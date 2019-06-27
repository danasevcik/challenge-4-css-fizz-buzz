window.addEventListener('DOMContentLoaded', (e) => {
  function changeColor() {
    let tableBody = document.querySelector('#table-body')
    let tableArr = Array.from(tableBody.children)
    for(let i = 0; i < tableArr.length; i++) {
      console.log(tableArr[i]);
      if (i % 3 === 0) {
        console.log(tableArr[i]);
        tableArr[i].setAttribute("class", "colorOne")
      } else if (i % 5 === 0) {
        tableArr[i].setAttribute('class', 'colorTwo')
      }
    }
    console.log(tableArr);
  }

  changeColor()

})
