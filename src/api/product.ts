import instance from "./instance";

const {data:{accessToken}} = JSON.parse(localStorage.getItem("user")!);

export const getProducts = () => {
  return instance.get("/products");
};

export const removeProducts = (id) => {

  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}   `,
    },
  });
};
