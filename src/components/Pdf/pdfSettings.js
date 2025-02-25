import robotoRegular from "./font/Roboto-Regular.ttf";
import robotoBold from "./font/Roboto-Bold.ttf";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [{ src: robotoRegular }, { src: robotoBold, fontWeight: "bold" }],
});

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});
