import {createClient} from "@sanity/client";
import {createImageUrlBuilder} from "@sanity/image-url";

const projectId = "8km354zm";
const dataset = "production";
const apiVersion = "2026-03-26";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

const builder = createImageUrlBuilder(sanityClient);

export type SanityImageRef = {
  asset?: {
    _ref: string;
    _type: "reference";
  };
};

export function asImageUrl(image?: SanityImageRef, width = 1600): string | null {
  if (!image?.asset?._ref) {
    return null;
  }
  return builder.image(image).width(width).auto("format").url();
}
