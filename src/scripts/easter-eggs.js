// Invisible button that triggers a modal popup :D
const invisibleBtn = document.createElement("button");
invisibleBtn.style.position = "fixed";
invisibleBtn.style.bottom = "20px";
invisibleBtn.style.right = "20px";
invisibleBtn.style.width = "50px";
invisibleBtn.style.zIndex = "9999";
invisibleBtn.style.opacity = "0";
invisibleBtn.style.cursor = "pointer";

// Modal
const modal = document.createElement("dialog");
modal.innerHTML = `
    <h2>Congratulations!</h2>
    <p>You found the Easter Egg! 🥚</p>
    <button id="close-modal-btn">Close</button>
`;

document.body.appendChild(modal);

document.body.appendChild(invisibleBtn);

const closeModalBtn = modal.querySelector("#close-modal-btn");

invisibleBtn.addEventListener("click", () => {
        modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});