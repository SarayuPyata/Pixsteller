const stars = document.querySelectorAll(".stars i");

//Loop 
stars.forEach((star, index1) => {
    //Adding event listener
    star.addEventListener("click", () => {
        //Loop through stars again
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});