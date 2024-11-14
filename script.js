/*giving a key an corresponding image*/
const cssFeatures = {
  A: {
    image: "img/css-letter-a.png",
  },
  B: {
    image: "img/css-letter-b.png",
  },
  C: {
    image: "img/css-letter-c.png",
  },
};

/*getting the html elements, setting the text content, making the information visible*/
function displayInfo(letter) {
  const infoContainer = document.getElementById(
    `info-container-${letter.toLowerCase()}`
  );
  const infoContent = document.getElementById(
    `info-content-${letter.toLowerCase()}`
  );
  const infoImage = document.getElementById(
    `info-image-${letter.toLowerCase()}`
  );
  infoContent.textContent = cssFeatures[letter].text;
  infoImage.src = cssFeatures[letter].image;
    infoContainer.classList.add("active");
}

/*getting html elements, removing the info*/ 
function hideInfo(letter) {
  const infoContainer = document.getElementById(
    `info-container-${letter.toLowerCase()}`
  );
  const infoContent = document.getElementById(
    `info-content-${letter.toLowerCase()}`
  );
  const infoImage = document.getElementById(
    `info-image-${letter.toLowerCase()}`
  );
  infoContainer.classList.remove("active");
  infoContent.textContent = "";
  infoImage.src = "";
}
