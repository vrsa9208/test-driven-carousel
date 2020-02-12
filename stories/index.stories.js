import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";
import Carousel from "../src/Carousel";
import slides from "../example/slides";

storiesOf("Carousel", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Carousel
      autoAdvanceDelay={number("autoAdvanceDelay", 10e3)}
      slides={slides}
      onIndexChange={action("onIndexChange")}
    />
  ));
