import axios from "axios";

const postProperty = async (fields) => {
  const endpoint = "http://localhost:3000/api/v1/PropertyListing/";
  try {
    const response = await axios.post(endpoint, fields);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default postProperty;
