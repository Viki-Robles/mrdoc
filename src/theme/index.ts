import { Theme } from "theme-ui";

import { borders, borderWidths } from "./borders";
import { buttons } from "./buttons";
import { colors } from "./colors";
import { shadows } from "./shadows";
import { space } from "./space";
import {
  letterSpacings,
  lineHeights,
  fonts,
  fontSizes,
  fontWeights,
} from "./fonts";
import { links } from "./links";
import { sizes } from "./sizes";
import { images } from "./images";
import { motion } from "./motion";
import { lists } from "./lists";
import { utils } from "./utils";
import { alerts } from "./alerts";
import { styles } from "./styles";

declare module "theme-ui" {
  interface Theme {
    // colors: Colors
    motion: unknown;
    utils: unknown;
    lists: unknown;
  }
}

export const theme: Theme = {
  styles,
  alerts,
  utils,
  lists,
  borders,
  borderWidths,
  buttons,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  images,
  letterSpacings,
  lineHeights,
  links,
  shadows,
  sizes,
  space,
  // custom
  motion,
};

export default theme;
