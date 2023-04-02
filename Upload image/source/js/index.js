const uploadIcon = document.querySelector(".icon");
const previewContainer = document.querySelector("#preview-container");
const previewImages = [];
const showSlide = document.querySelector("#show-slide");
const previewImage = document.querySelector("#preview-image");
const nxtBtn=document.querySelector(".nxt-icon");
let currentIndex = 0;

uploadIcon.addEventListener("click", function () {
  this.previousElementSibling.click();
});

uploadIcon.previousElementSibling.addEventListener("change", (e) => {
  const { files } = e.target;

  for (let file of files) {
    const fileReader = new FileReader();
    fileReader.onloadend=(e)=>{
      const {result}=e.target;
      const previewImg = document.createElement("img");
      previewImg.src = result;
      
      previewImg.classList.add("dimension");
      previewContainer.appendChild(previewImg);

      previewImages.push(previewImg);
    };
    
    fileReader.readAsDataURL(file);

  };

});

nxtBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= previewImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

function showImage(index) {
  previewImage.src = previewImages[index].src;
  previewImage.classList.add("slide");
}

showSlide.addEventListener("click",()=>{
showImage(currentIndex);
showSlide.style.display="none";
nxtBtn.style.display="block";
});