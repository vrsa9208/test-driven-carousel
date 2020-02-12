import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, number } from "@storybook/addon-knobs";

import { Button, Welcome } from "@storybook/react/demo";
import Carousel from "../src/Carousel";
import slides from "../example/slides";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Carousel", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Carousel
      autoAdvanceDelay={number("autoAdvanceDelay", 10e3)}
      slides={slides}
      onIndexChange={action("onIndexChange")}
    />
  ));
