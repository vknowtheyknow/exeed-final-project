import axios from "axios"

// const res = await fetch("http://localhost:4000/login", {
//   method: 'POST',
//   body: JSON.stringify(user),
//   headers: {
//     'content-type' : 'appliction/json'
//   }
// })
// const data = res.json()
// return data
export async function login(user) {

  const res = await axios.post("https://www.mecallapi.com/api/login", user)
  return res.data
}
