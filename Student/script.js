
var addBtn = document.querySelector('.add-btn');
var modal = document.querySelector('.modal-add');
var overlay = document.querySelector('.overlay');
var overlayUpdate = document.querySelector('.go-update-overlay');
var exit = document.querySelector('.exit');
var exitUpdate = document.querySelector('.update-exit');
var exitUpdateDelete = document.querySelector('.update-delete-exit');
var data = document.querySelector('.table-body');
var modalUpdateDelete = document.querySelector('.modal-update-delete');
var goUpdateBtn = document.querySelector('.go-update');


data.addEventListener('click',(e)=>{
  if(e.target.className === 'data'){
    modalUpdateDelete.classList.add('active');
    overlay.classList.remove('no-block');
  }
})

data.addEventListener('mouseover',(e) => {
  e.target.parentNode.classList.add('hover-data');
  e.target.parentNode.classList.remove('data-row');
})

data.addEventListener('mouseout',(e) => {
  e.target.parentNode.classList.remove('hover-data');
  e.target.parentNode.classList.add('data-row');
})

addBtn.addEventListener('click',() => {
  modal.classList.add('active');
  overlay.classList.remove('no-block');
})

exit.addEventListener('click',() => {
  overlay.classList.add('no-block');
  modal.classList.remove('active');
})

exitUpdateDelete.addEventListener('click',() => {
  overlay.classList.add('no-block');
  modalUpdateDelete.classList.remove('active');
})

exitUpdate.addEventListener('click',() => {
  overlayUpdate.classList.remove('go-update-overlay-display');
  modal.classList.remove('active');
  exit.classList.remove('exit-inactive');
  exitUpdate.classList.remove('update-exit-active');
})

overlay.addEventListener('click',(e) => {
  e.target.classList.add('no-block');
  modal.classList.remove('active');
  modalUpdateDelete.classList.remove('active');
})

goUpdateBtn.addEventListener('click',() => {
  modal.classList.add('active');
  overlayUpdate.classList.add('go-update-overlay-display');
  exit.classList.add('exit-inactive');
  exitUpdate.classList.add('update-exit-active');
})

overlayUpdate.addEventListener('click',(e) => {
  e.target.classList.remove('go-update-overlay-display');
  modal.classList.remove('active');
})


// data.addEventListener('click',(e) => {
//   // if(e.target.tagName === 'td'){
//   //   console.log("hello");
//   // }
//   console.log("hello");
// })
