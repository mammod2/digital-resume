import axios from "axios";
const GIST_ID = "fbd9d76fd049f819be4ff5b47283a5f2";
const ENDPOINT = `https://api.github.com/gists/${GIST_ID}`;

export const getBasicInfo = async () => {
  const data = await axios.get(ENDPOINT);
  console.log(data);
};
