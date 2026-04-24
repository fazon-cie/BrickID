document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(file);

    let model;

async function loadModel() {
    model = await mobilenet.load();
}

loadModel();

document.getElementById("imageInput").addEventListener("change", async function(event) {
    const file = event.target.files[0];
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(file);

    await new Promise(r => img.onload = r);

    const predictions = await model.classify(img);

    const list = document.getElementById("results");
    list.innerHTML = "";

    predictions.slice(0,5).forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.className;
        list.appendChild(li);
    });
});
    ];

    const list = document.getElementById("results");
    list.innerHTML = "";

    results.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        list.appendChild(li);
    });
});