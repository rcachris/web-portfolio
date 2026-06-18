async function loadComponent(id, file) {
    const container = document.getElementById(id);

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`Failed to load ${file}`);
    }

    container.innerHTML = await response.text();
}

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent("navbar", "/components/navbar.html"),
        loadComponent("footer", "/components/footer.html"),
    ]);

    const pageName = document.title
        .replace("Chris Autullo | ", "")
        .toLowerCase();

    const prompt = `[~/${pageName}]`;

    document.getElementById("pwd").textContent = prompt;

    document.getElementById("nav-toggle").addEventListener("click", () => {
        const nav = document.getElementById("nav-links");
        nav.classList.toggle("hidden");
        nav.classList.toggle("flex");
    });
});
