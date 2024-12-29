const categoriesList = document.querySelector("#categories");

const elementsList = document.querySelectorAll(".item");

console.log(`Number of categories: ${elementsList.length}`);

elementsList.forEach(category => {
    const titleCategories = category.querySelector("h2").textContent;

    const elementsLength = category.querySelectorAll("ul li");

    console.log(`Category: ${titleCategories}`);
    console.log(`Elements: ${elementsLength.length}`);
})
 