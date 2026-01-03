function addMatch() {
    const matchInput = document.getElementById('match');
    const matchName = matchInput.value.trim();
    
    if (matchName === '') {
        alert('Please enter a match name.');
        return;
    }

    const outcome = document.getElementById('outcome-select').value;

    if (outcome === '' || outcome === 'None') {
        alert('Please select a valid outcome.');
        return;
    }

    const matchList = document.getElementById('match-list');
    const row = document.createElement("div");
    row.className = "match-row";
    row.innerHTML = `
        <span class="match-name">${matchName}</span>
        <div>
            <span class="outcome-tag">${outcome}</span>
            <span class="delete-btn" onclick="this.parentElement.parentElement.remove();">&times;</span>
        </div>
    `;

    matchList.appendChild(row);
    matchInput.value = '';
    document.getElementById("outcome-select").value = "None";

}


function downloadImage() {

    const today = new Date().toISOString().split('T')[0];
    const fileName = `match_${today}.png`;

    const deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(btn => btn.style.display = 'none');

    const container = document.querySelector("#capture-area");

    html2canvas(container, {
        backgroundColor: null,
        scale: 2
    })
    .then(canvas => {
        const link = document.createElement("a");
        link.download = fileName;
        link.href = canvas.toDataURL("image/png");
        link.click();

        deleteBtn.forEach(btn => btn.style.display = 'inline');
    }); 
}
