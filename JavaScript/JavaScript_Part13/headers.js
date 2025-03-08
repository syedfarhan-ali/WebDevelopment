const url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { accept: "application/json" } };
    let res = await axios.get(url,config);
    console.log(res.data);
  } catch (err) {
    console.log("ERROR -", err);
  }
}
getJokes();
