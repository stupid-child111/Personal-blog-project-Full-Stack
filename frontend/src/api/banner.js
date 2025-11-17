import instance from "./request";

export async function getBannerData() {
  const res = await instance.get("/api/banner");
  return res.data.data
}

getBannerData().then((res) => {
  console.log(res);
});