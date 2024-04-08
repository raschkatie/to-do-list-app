function newItem() {

    //1. Adding a new item to the list of items: 
    let li = $('<li></li>');  // create element for jquery
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something');
    } else {
        let list = $('#list');
        list.append(li);
        $('#input').val('');  // clear input
    }

    //2. Crossing out an item from the list of items:
    li.on('dblclick', () => {
        li.toggleClass('strike');
    });

    //3(i). Adding the delete button "X": 
    let crossOutButton = $("<crossOutButton></crossOutButton>").append('X');
    li.append(crossOutButton);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on('click', () => {
        li.toggleClass('delete')
    });

    // 4. Reordering the items: 
    $('#list').sortable();


}