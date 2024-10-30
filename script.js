document.addEventListener("DOMContentLoaded", function() {
    const deforestMapImg = document.getElementById("DeforestMap");
    const deforestButtonOriginal = document.getElementById("buttonDeforestOriginal");
    const deforestButtonCut = document.getElementById("ButtonDeforestCut");

    deforestButtonOriginal.addEventListener("click", function() {
        deforestMapImg.src = "Image/Map/DeforestOriginal.png";
        console.log("pressed Original"); // Set to the correct source
    });

    deforestButtonCut.addEventListener("click", function() {
        deforestMapImg.src = "Image/Map/DeforestCut.png";
        console.log("pressed Cut");
    });
});
