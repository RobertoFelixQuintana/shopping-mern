const SERVER_URL = "http://localhost:4000/products/";

export const getProducts = async () => {
  try {
    const response = await fetch(SERVER_URL);
    if (response.status === 200) return await response.json();
    return response.status(400).json({
		error: true,
		data: response.json(),
		message: "Productos no encontrados"
	});
  } catch (error) {
    console.log(error);
  }
};

export const saveProduct = async (post) => {
  try {
    const response = await fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (response.status === 201) return await response.json();
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id, post) => {
  try {
    const response = await fetch(SERVER_URL + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (response.status === 200) return await response.json();
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(SERVER_URL + id);
    if (response.status === 200) return await response.json();
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(SERVER_URL + id, { method: "DELETE" });
    return response.status === 204;
  } catch (error) {
    console.log(error);
  }
};
