const fetch = require("node-fetch");
const validator = require("validator");

const API_ENDPOINT = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

exports.handler = async (event, context) => {
  const eventBody = JSON.parse(event.body);

  // Check for IP Address or domain
  let extension = "";
  if (eventBody.searchTerm) {
    const { searchTerm } = eventBody;
    if (validator.isIP(searchTerm)) {
      extension = `&ipAddress=${searchTerm}`;
    } else if (validator.isURL(searchTerm)) {
      const domain = new URL(searchTerm);
      extension = `&domain=${domain.hostname}`;
    }
  }

  try {
    const res = await fetch(`${API_ENDPOINT}${extension}`);
    const data = await res.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" })
    };
  }
};
