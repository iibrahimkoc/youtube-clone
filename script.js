document.addEventListener("DOMContentLoaded", function () {
    const searchBoxActive = document.querySelector(".searchBoxActive");
    const search = document.querySelector("#search");
    // .searchBoxActive üzerine tıkladığımızda
    search.addEventListener("click", function (event) {
        // Olayın diğer elemanlara yayılmasını engelleyelim
        event.stopPropagation();
        // Eğer görünüyorsa, gizle; değilse, göster
        if (searchBoxActive.style.display === "block") {
            searchBoxActive.style.display = "none"; 
        } else {
            searchBoxActive.style.display = "block";
        }
    });

    // Sayfa herhangi bir yerine tıkladığımızda
    document.addEventListener("click", function () {
        // .searchBoxActive'ı gizle
        searchBoxActive.style.display = "none";
    });
});

