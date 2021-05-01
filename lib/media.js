import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url) // "http://localhost:1337" + media.url
    : media.url;

  return imageUrl;
}
