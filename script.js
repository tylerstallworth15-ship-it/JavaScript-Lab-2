// Lab 2 Array manipulation //

let shoppingList = ["Milk", "Eggs", "Bread"];

function addItem(item) {
    let newItem = item.trim();
    if (newItem === "") return;

    let exists = shoppingList.some((i) =>
        i.toLowerCase() === newItem.toLowerCase()
    );

    if (!exists) { 
        shoppingList.push(newItem);
        console.log("Added:", newItem);
    } else {
        console.log(newItem + " is already in the list.");
    }
    
    displayList();
}

function removeLastItem() {
    if (shoppingList.length > 0) { 
        let removed = shoppingList.pop();
        console.log("Removed:", removed);
    } else {
        console.log("List is empty.");
    }

    displayList();
}

function displayList() {
    console.log("Shopping List:", shoppingList);
    renderList();
}

function filterItems(searchTerm) {
    let term = searchTerm.toLowerCase();
    let result = shoppingList.filter((i) => 
        i.toLowerCase().includes(term)
);
    console.log("Results for", searchTerm, + ":", result);
    return result;
}

function renderList() {
    let list = document.getElementById("listDisplay");
    if (!list) return;

    list.innerHTML = "";

    shoppingList.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function handleAdd() {
    let input = document.getElementById("itemInput");
    addItem(input.value);
    input.value = "";
    input.focus();
}

function handleRemoveLast() {
    removeLastItem();
}

displayList();