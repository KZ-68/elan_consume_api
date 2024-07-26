const membres_container = document.querySelector('#table-rows');
let header_cells = document.querySelectorAll('th');

fetch('http://localhost:8000/api/membres')
.then((response) => response.json())
.then((data) => {
    const membres = data['hydra:member'];
    membres.forEach(membre => {
        let membre_row = document.createElement('tr');
        let membre_cell = document.createElement("td");
        header_cells.forEach(header_cell => {
            membre_cell.setAttribute("data-label", header_cell.innerText);
        });
        membre_row.appendChild(membre_cell);
        membres_container.appendChild(membre_row);
        membre_cell.innerHTML = membre.last.toUpperCase() + ' ' + membre.first
    });
})