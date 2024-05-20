let boxes = document.getElementsByClassName('box').length;
const boxs = document.getElementsByClassName('box');
const completed = document.getElementById('completed');

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
  countChecked();
}

//for loading
for(let i = 1; i <= boxes; i++){
  if(localStorage.getItem("checkbox" + String(i)) !== null){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}

function countChecked() {
  let completedCount = 0;
  for (const checkbox of boxs){
    if (checkbox.checked){
      completedCount++;
    }
  }
  completed.textContent = completedCount*7000;
}

window.addEventListener('change', save);
countChecked();
