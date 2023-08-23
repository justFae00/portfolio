const percentages = document.querySelectorAll(".percentage");

percentages.forEach((percentage) => {
  const width = percentage.dataset.width;
  percentage.style.setProperty("--width", width);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "progress 2s ease-in-out forwards";
    }
  });
});

percentages.forEach((bar) => {
  observer.observe(bar);
});
