export default function getImageUrl(person, size = "s") {
  return "https://images.pexels.com/photos/" + person.imageId + size;
}
