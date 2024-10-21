function toggleSection(id) {
    const content = document.getElementById(id);
    content.classList.toggle('hidden');
}

function openModal() {
    const storyInput = prompt("Enter your story (min 3 characters):");
    if (storyInput.length < 3) {
        alert("Story must be at least 3 characters long.");
    } else {
        // Proceed with story creation logic
        alert("Story created!");
    }
}
