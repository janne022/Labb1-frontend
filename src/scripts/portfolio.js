const modal = document.getElementById("projectModal");
const openModalBtn = document.getElementById("openProjectModal");
const closeModalBtn = document.getElementById("closeProjectModal");

openModalBtn.addEventListener("click", () => {
    modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
    modal.close();
});