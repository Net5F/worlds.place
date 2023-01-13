function changeImage(oldImageElementId, newImageElementId) {
  console.log("Old : " + oldImageElementId + " new: " + newImageElementId)
  // Hide the old element.
  const oldElement = document.getElementById(oldImageElementId);
  oldElement.style.display = 'none'

  // Un-hide the new element.
  const newElement = document.getElementById(newImageElementId);
  newElement.style.display = 'block'
}
