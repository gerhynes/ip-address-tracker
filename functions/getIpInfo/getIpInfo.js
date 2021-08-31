const fetch = require("node-fetch");

const API_ENDPOINT = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

exports.handler = async (event, content) => {
  const eventBody = JSON.parse(event.body);

  let ipExtension = "";
  if (eventBody.address) {
    ipExtension = `&ipAddress=${eventBody.address}`;
  }

  try {
    const res = await fetch(`${API_ENDPOINT}${ipExtension}`);
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
