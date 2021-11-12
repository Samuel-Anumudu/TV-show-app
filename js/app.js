const form = document.querySelector("#searchForm");
const btnClick = document.querySelector(".btn-click");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    // get whatever the user input as their search
    const searchParam = form.elements.query.value;
    const config = { params: { q: searchParam } };
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows`,
      config
    );
    makeImages(response.data);
    document.body.removeAttribute("src");
    form.elements.query.value = "";
  } catch (error) {
    console.log("Something went wrong!", error);
  }
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

// Remove images on new search
btnClick.addEventListener("click", () => {
  let images = document.getElementsByTagName("img");
  let len = images.length;
  for (let i = 0; i < len; i++) {
    images[0].parentNode.removeChild(images[0]);
  }
});
