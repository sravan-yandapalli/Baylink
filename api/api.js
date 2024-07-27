import axios from "axios";
import qs from "qs";

// ============================== authentication api ================================

export const loginApi = async (params) => {
  const data = qs.stringify({
    email: params.email,
    password: params.password,
  });
  return await axios.post("https://aiqua-node.aiqua.co/auth/signin", data);
};

export const sizeVariationDetectionApi = async (params) => {
  try {
    const response = await axios({
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://fastapi-counting.aiqua.co/size_variation_detection",
      data: params,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// ==================================================================================
