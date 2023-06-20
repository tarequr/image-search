const accessKey = "1wVx5LqDx16Gj8S4VNZTu8B2kvopVE7KAhyENNb85-4";

const formElement = document.querySelector("form");
const inputElement = document.getElementById("seach-item");
const seachResults = document.querySelector(".seach-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        seachResults.innerHTML = ""
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("seach-result");

        const image = document.createElement("img");
        image.src   = result.urls.small;
        image.alt   = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    });

    page++;
}