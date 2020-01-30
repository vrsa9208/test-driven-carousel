import React from "react";
import { shallow } from "enzyme";
import CarouselSlide from "../CarouselSlide";

describe("CarouselSlide", () => {
  let wrapper;

  beforeEach(() => {
    let props = {
      imgUrl: "https://example.com/image.png",
      description: "A jaw-droppingly spectacular image",
      attribution: "Trevor Burnham"
    };
    wrapper = shallow(<CarouselSlide {...props} />);
  });

  it("renders a <figure>", () => {
    expect(wrapper.type()).toBe("figure");
  });

  it("renders an <img> and a <figcaption> as children", () => {
    expect(wrapper.childAt(0).type()).toBe("img");
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });

  it("passes `imgUrl` through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    wrapper.setProps({ imgUrl });
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(imgUrl);
  });

  it("uses 'description' and 'attribution' as the <figcaption>", () => {
    const description = "A jaw-droppingly spectacular image";
    const attribution = "Trevor Burnham";
    const imgUrl = "https://example.com/image.png";
    wrapper.setProps({ description, attribution, imgUrl });
    expect(wrapper.find("figcaption").text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find("figcaption strong").text()).toBe(description);
  });
});
