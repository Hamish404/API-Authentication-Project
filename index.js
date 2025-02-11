import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "Hamish";
const yourPassword = "1234";
const yourAPIKey = "7167f4b1-038e-4e7b-970d-99fdfd134861";
const yourBearerToken = "0c60888b-20bb-4352-9952-3c56fe9ba92e";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {

  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random")
    const result = response.data;
    const content = JSON.stringify(result);
   
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);

    res.render("index.ejs",  { error: error.message }); 
  }

});

app.get("/basicAuth", async (req, res) => {
  
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    });
    const result = response.data;
    const content = JSON.stringify(result);
   
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);

    res.render("index.ejs",  { error: error.message }); 
  }
  
});

app.get("/apiKey", async (req, res) => {

  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
    const result = response.data;
    const content = JSON.stringify(result);
   
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);

    res.render("index.ejs",  { error: error.message }); 
  }

});

app.get("/bearerToken", async (req, res) => {

  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/secrets/42`, {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      }  
    });
    const result = response.data;
    const content = JSON.stringify(result);
   
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);

    res.render("index.ejs",  { error: error.message }); 
  }
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
