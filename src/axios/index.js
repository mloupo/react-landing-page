import axios from "axios"

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'contact/store',
    data: data
  });

  return response
};

export {
  sendEmail
}
