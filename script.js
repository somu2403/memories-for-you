let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(){
pages.forEach(page=>{
page.classList.remove("active");
});
pages[current].classList.add("active");
}

function nextPage(){
if(current < pages.length-1){
current++;
showPage();
}
}

function prevPage(){
if(current > 0){
current--;
showPage();
}
}

showPage();