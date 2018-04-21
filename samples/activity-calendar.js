import { round } from "lodash";
import { post } from "request-promise";
import { toMiles } from "../lib/to-miles.mjs";
import { load as dotenv } from "dotenv-safe";
dotenv();
export const handler = (event, context, callback) => {
  // Clean incoming data (from IFTTT)
  const body = JSON.parse(event.body);
  const { createdAt, distanceMeters, elapsedTimeInSeconds, name } = body;
  const distanceMiles = round(toMiles(parseFloat(distanceMeters)), 1);
  const elapsedTimeInMinutes = round(parseInt(elapsedTimeInSeconds, 10) / 60);
  // Prepare outgoing data
  const { IFTTT_EVENT, IFTTT_KEY } = process.env;
  const options = {
    method: "POST",
    uri: `https://maker.ifttt.com/trigger/${IFTTT_EVENT}/with/key/${IFTTT_KEY}`,
    body: {
      value1: `${name} (${distanceMiles} mi) ${createdAt} for ${elapsedTimeInMinutes} minutes`
    },
    json: true
  };
  // Send data to IFTTT
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Message sent!"
    })
  };
  post(options)
    .then(() => callback(null, response))
    .catch(error => callback(error));
};
