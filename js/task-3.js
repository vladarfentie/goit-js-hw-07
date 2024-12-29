const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
    const trimmedText = input.value.trim();
    output.textContent = trimmedText || "Anonymous";
})
