

export const createPreview = () => {
  const img = document.createElement("img");
  img.classList.add("preview");
  document.querySelector(".modal__fieldset").after(img);
};

export const previewImg = () => {
  const preview = document.querySelector(".preview");
  const file = document.querySelector(".modal__file");
  const alertText = document.querySelector(".modal_alert_text");
  file.addEventListener("change", () => {
    const MAX_SIZE_IMG = 1024 * 1024;
    if (file.files.length > 0 && file.files[0].size < MAX_SIZE_IMG) {
      const src = URL.createObjectURL(file.files[0]);
      preview.src = src;
      preview.style.display = "block";
      preview.style.paddingBottom = "10px";

      alertText.textContent = "";
    } else {
      preview.style.display = "none";
      alertText.style.color = "red";

      alertText.textContent =
        `изображение не должно превышать размер ${Math.round(
          MAX_SIZE_IMG / 1024 / 1024
        )} МБ`.toUpperCase();
    }
  });
};
