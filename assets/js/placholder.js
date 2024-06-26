let textplace = 1;
setInterval(() => {
    const isearch = document.getElementById("isearch");
    isearch.setAttribute("placeholder", "Cari" + ".".repeat(textplace++));
    if (textplace == 4)
        textplace = 1
}, 400);