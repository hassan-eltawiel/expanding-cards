let panals = document.querySelectorAll(".panal");

panals.forEach((panal) => {
    panal.addEventListener("click", () => {
        panals.forEach((panal)=>{
            panal.classList.remove("active");
        });
        panal.classList.add("active");
    })
});

function removeActiveClass() {
    panals.forEach((panal)=>{
        panal.classList.remove("active");
    });
};