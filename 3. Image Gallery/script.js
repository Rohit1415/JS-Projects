const galleryElement = document.querySelector('.gallery');

function generatePlaceholderImages(count) {
  const placeholderImages = [];
  const placeholderSize = 400;

  for (let i = 1; i <= count; i++) {
    const placeholderUrl = `https://via.placeholder.com/${100}?text=Image+${i}`;
    placeholderImages.push(placeholderUrl);
  }

  return placeholderImages;
}

function displayImages(images) {
  galleryElement.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Placeholder Image';

    galleryElement.appendChild(imgElement);
  });
}

const placeholderImages = generatePlaceholderImages(100);
displayImages(placeholderImages);
