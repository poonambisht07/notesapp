console.log('This is my first js project');
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let txt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        n_obj = [];
    }
    else {
        n_obj = JSON.parse(notes);
    }
    n_obj.push(txt.value);
    localStorage.setItem('notes', JSON.stringify(n_obj));
    txt.value = "";
    // console.log(n_obj);
    shownotes();
});
// console.log(addbtn);

// function to show elements from localStorage.
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        n_obj = [];
    }
    else {
        n_obj = JSON.parse(notes);
    }
    let html = '';
    n_obj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem; border: 3px solid rgb(255, 3, 16);">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="delenote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>                
        </div>`;

        // console.log(element);
    });
    let n_ele = document.getElementById('notes');
    if (n_obj.length != 0) {
        n_ele.innerHTML = html;
    }
    else {
        n_ele.innerHTML = 'Nothing to show! Use "Add a Note" to add notes';
    }
    console.log(n_ele);

}

// function to delete note.
function delenote(index) {
    console.log('delete note', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        n_obj = [];
    }
    else {
        n_obj = JSON.parse(notes);
    }
    n_obj.splice(index, 1);
    console.log(n_obj);
    localStorage.setItem('notes', JSON.stringify(n_obj));
    shownotes();
}

let srch = document.getElementById('searchTxt');
srch.addEventListener('input', function () {

    let inpVal = srch.value.toLowerCase();
    console.log(inpVal);
    let nCard = document.getElementsByClassName('notecard');
    Array.from(nCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inpVal)){
            element.style.display ='block';
        }
        else{
            element.style.display ='none';
        }
        // console.log(cardTxt);
    });
    
});

