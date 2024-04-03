function removeClass(element, className) {
  // Using classList.remove is sufficient as it's widely supported
  element.classList.remove(className);
}

// Example usage
removeClass(document.getElementById("preapproval"), "hidden");
