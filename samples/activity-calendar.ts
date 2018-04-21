import { Handler, Context, Callback } from "aws-lambda";
import { round } from "lodash";
import { post } from "request-promise";
import { toMiles } from "../lib/to-miles.mjs";
import { load as dotenv } from "dotenv-safe";
dotenv();

export interface HandlerRequest {
  [key: string]: any;
  body: string; // HandlerRequestBody
}

export interface HandlerRequestBody {
  /** The activity start time, e.g "March 17, 2018 at 02:00PM" */
  createdAt: string;
  /** The activity distance, in meters, e.g. "21375.5" */
  distanceMeters: string;
  /** The activity duration, in seconds, e.g. "7515" */
  elapsedTimeInSeconds: string;
  /** The activity name, e.g. "Afternoon Run" */
  name: string;
  /** The activity type, e.g. "Run" */
  activityType?: string;
  /** The activity duration, in hours, minutes and seconds, e.g. "2 hours, 5 minutes, 15 seconds" */
  elapsedTime?: string;
  /** The activity URL on the Strava website, e.g. "http://www.strava.com/activities/1446540000" */
  linkToActivity?: string;
  /** The activity route image URL on the Strava website */
  routeMapImageURL?: string;
  [key: string]: any;
}

export interface HandlerResponse {
  statusCode: number;
  body: string;
}

export const handler: Handler = (
  event: HandlerRequest,
  context: Context,
  callback: Callback
) => {
  // Clean incoming data (from IFTTT)
  const body: HandlerRequestBody = JSON.parse(event.body);
  const { createdAt, distanceMeters, elapsedTimeInSeconds, name } = body;
  const distanceMiles: number = round(toMiles(parseFloat(distanceMeters)), 1);
  const elapsedTimeInMinutes: number = round(
    parseInt(elapsedTimeInSeconds, 10) / 60
  );
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
  const response: HandlerResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Message sent!"
    })
  };
  post(options)
    .then(() => callback(null, response))
    .catch(error => callback(error));
};