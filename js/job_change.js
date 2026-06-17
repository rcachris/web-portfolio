list.addEventListener("click", (e) => {
    const item = e.target.closest("li");
    if (!item) return;

    const index = item.dataset.index;

    document.querySelectorAll("[data-job]").forEach((el) => {
        el.classList.toggle("hidden", el.dataset.job !== index);
    });

    document.querySelectorAll("#list li").forEach((li) => {
        const label = li.textContent.replace(/^\[.\] /, "");
        li.textContent = li === item ? `[X] ${label}` : `[ ] ${label}`;
    });
});
