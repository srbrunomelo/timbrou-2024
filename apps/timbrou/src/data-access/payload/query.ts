
import configPromise from "@payload-config";
import { getPayload } from "payload";

export async function getPayloadInstance() {
  return await getPayload({
    config: configPromise,
  });
}
