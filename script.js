
(() => {
    'use strict'


    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
});


const searchInput = document.getElementById("searchInput");
const teamCards = document.querySelectorAll(".team-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();
    let visibleCount = 0;

    teamCards.forEach(function (card) {
        const name = card.dataset.name.toLowerCase();
        const role = card.dataset.role.toLowerCase();

        if (name.includes(searchText) || role.includes(searchText)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.hidden = visibleCount !== 0;
});

const leaveForm = document.getElementById("leaveForm");

leaveForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = document.getElementById("leaveType").value;
    const from = document.getElementById("fromDate").value;
    const to = document.getElementById("toDate").value;
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("leaveMessage");

    if (to < from) {
        message.textContent = "To date must be after or equal to From date.";
        message.style.color = "red";
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${type}</td>
    <td>${from}</td>
    <td>${to}</td>
    <td><span class="leave-status pending">Pending</span></td>
    `;

    document.getElementById("leaveTable").appendChild(row);

    message.textContent = "Leave request submitted successfully!";
    message.style.color = "green";

    leaveForm.reset();
});
