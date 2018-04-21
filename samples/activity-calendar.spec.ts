jest.mock("request-promise");
jest.mock("dotenv-safe");
import { post } from "request-promise";
import { load as dotenv } from "dotenv-safe";
import { promisify } from "util";
import {
  handler as _handler,
  HandlerRequest,
  HandlerResponse
} from "../src/bin/index.mjs";
const handler = promisify(_handler);
dotenv();

describe("handler", () => {
  test("prepares outgoing data", () => {
    const event: HandlerRequest = {
      body: {
        createdAt: "March 17, 2018 at 02:00PM",
        name: "Afternoon Run",
        distanceMeters: "21375.5",
        elapsedTimeInSeconds: "7515"
      }
    };
    const expected = {
      body: {
        value1:
          "Afternoon Run (13.3 mi) March 17, 2018 at 02:00PM for 125 minutes"
      },
      json: true,
      method: "POST",
      uri: "https://maker.ifttt.com/trigger/IFTTT_EVENT/with/key/IFTTT_KEY"
    };
    (post as any).mockResolvedValueOnce();
    handler(event, null).then(() => {
      expect((post as any).mock.calls[0][0]).toEqual(expected);
    });
  });
  test("sends message successfully", () => {
    const event: HandlerRequest = {
      body: {
        createdAt: "March 17, 2018 at 02:00PM",
        name: "Afternoon Run",
        distanceMeters: "21375.5",
        elapsedTimeInSeconds: "7515"
      }
    };
    const expected: HandlerResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Message sent!"
      })
    };
    (post as any).mockResolvedValueOnce();
    handler(event, null)
      .then((data: HandlerResponse | null) => {
        expect(data).toEqual(expected);
      })
      .catch((error: Error | null) => {
        expect(error).toBeFalsy();
      });
  });
  test("fails to send message", () => {
    const event: HandlerRequest = {
      body: {
        createdAt: "March 17, 2018 at 02:00PM",
        name: "Afternoon Run",
        distanceMeters: "21375.5",
        elapsedTimeInSeconds: "7515"
      }
    };
    const expected = new Error("HI CLAY");
    (post as any).mockRejectedValueOnce(expected);
    handler(event, null)
      .then((data: HandlerResponse | null) => {
        expect(data).toBeFalsy();
      })
      .catch((error: Error | null) => {
        expect(error).toEqual(expected);
      });
  });
});
