//to-do list logic
let add = document.getElementById('add');
let list = document.getElementById('task-list');

add.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + '<li class="list-group-item disabled">'+document.getElementById('taskName').value+'</li>';
});

//pwa logic
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  }
   
   