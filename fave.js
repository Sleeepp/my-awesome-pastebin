let boxes = document.getElementsByClassName('box').length;
const completed = document.getElementById('completed');

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

//for loading
for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}

let completedcount = 0;
for (const j of checked){
  if (checkbox.checked){
    completedcount++;
  }
}
completed.textContent = completedcount;

window.addEventListener('change', save);
