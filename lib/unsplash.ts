// Description: This file contains the logic to fetch random images from unsplash api.

const clientId = process.env.UNSPLASH_ACCESS_KEY; //unsplash access key

//fetch random vertical pet image from unsplash api

export async function getWallpaper() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${clientId}&orientation=portrait&query=universe`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(String(e));
  }
}
// use url provided by unsplash
// create blob object from feth response
// create url from blob object
// create anchor element
// set href to url
// add click to anchor
// revoke url object
export async function downloadWallpaper(url: string, slug: string) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const urlBlob = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = urlBlob;
    a.download = `${slug}.jpg`;
    a.click();
    URL.revokeObjectURL(urlBlob);
  } catch (e) {
    throw new Error(String(e));
  }
}
