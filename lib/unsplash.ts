// Description: This file contains the logic to fetch random images from unsplash api.

const clientId = process.env.UNSPLASH_ACCESS_KEY; //unsplash access key

// optional query parameters

const query = {
  cat: "cat",
  dog: "dog",
  bird: "bird",
  nature: "nature",
  city: "city",
  car: "car",
  space: "space",
  mountain: "mountain",
  beach: "beach",
  universe: "universe",
  plane: "plane",
  forest: "forest",
  ocean: "ocean",
  desert: "desert",
  sunset: "sunset",
  sunrise: "sunrise",
  moon: "moon",
  stars: "stars",
  galaxy: "galaxy",
  aurora: "aurora",
  waterfall: "waterfall",
  river: "river",
  lake: "lake",
  pet: "pet",
};

//fetch random image from unsplash api

export async function getWallpaper() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${clientId}&orientation=landscape&query=${query.cat}`,
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
