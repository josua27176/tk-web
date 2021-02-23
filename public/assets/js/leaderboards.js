const search = document.getElementById("search");
const children = document.getElementById("leaderboards-grid").children;

function filter() {
    const filterText = search.value.toLowerCase();

    for (let child of children) {
        const childText = child.querySelector(".playerName").innerText.toLowerCase();
        let match = false;

        if (childText.includes(filterText)) {
            match = true;
        }

        if (match == false) {
            child.style.display = "none";
        } else {
            child.style.display = "block";
        }
    }
}

search.onkeyup = filter;
