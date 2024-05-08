const apiUrl = "https://dummyjson.com/products/category/mens-shoes";

async function fetchDataAndDisplay() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const dataContainer = document.getElementById("prduct-container");
    data.products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("div");
      image.classList.add("image");
      image.style.backgroundImage = `url(${product.images[0]})`;
      card.appendChild(image);

      const titlePriceEmojiContainer = document.createElement("div");
      titlePriceEmojiContainer.classList.add("title-price-emoji");
      card.appendChild(titlePriceEmojiContainer);

      const titlePriceContainer = document.createElement("div");
      titlePriceContainer.classList.add("title-price");
      titlePriceEmojiContainer.appendChild(titlePriceContainer);

      const titleContainer = document.createElement("div");
      titleContainer.classList.add("title");
      titleContainer.innerHTML = product.title;
      titlePriceContainer.appendChild(titleContainer);

      const priceContainer = document.createElement("div");
      priceContainer.classList.add("price");
      priceContainer.innerHTML = `$${product.price}`;
      titlePriceContainer.appendChild(priceContainer);

      const emojiContainer = document.createElement("div");
      emojiContainer.classList.add("emoji");
      emojiContainer.innerHTML = "😍";
      titlePriceEmojiContainer.appendChild(emojiContainer);
      const ratingContainer = document.createElement("div");
      ratingContainer.classList.add("rating-wrapper");
      card.appendChild(ratingContainer);

      const starsContainer = document.createElement("div");
      starsContainer.classList.add("stars");
      starsContainer.innerHTML = generateStarRatings(product.rating);
      ratingContainer.appendChild(starsContainer);

      const rateContainer = document.createElement("div");
      rateContainer.classList.add("rate");
      rateContainer.innerHTML = `124 ratings`;
      ratingContainer.appendChild(rateContainer);

      dataContainer.appendChild(card);
    });

    function generateStarRatings(rating) {
      const filledStars = Math.floor(rating);
      const remainingStar = 5 - filledStars;
      let starsHTML = "";
      for (let i = 0; i < filledStars; i++) {
        starsHTML += "★";
      }
      for (let i = 0; i < remainingStar; i++) {
        starsHTML += "☆";
      }
      return starsHTML;
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchDataAndDisplay();
