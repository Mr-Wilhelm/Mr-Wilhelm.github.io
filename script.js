// Images load from the local assets/ folder first. If a file hasn't been
// added yet, the page falls back to the copy still hosted on Wix.
document.querySelectorAll("img[data-fallback]").forEach(function (img) {
  img.addEventListener("error", function onError() {
    img.removeEventListener("error", onError);
    img.src = img.dataset.fallback;
  });
  // Re-check images that already failed before this script ran.
  if (img.complete && img.naturalWidth === 0) {
    img.src = img.dataset.fallback;
  }
});

// Keep the copyright year current.
var year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
