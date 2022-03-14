import React from "react";
import renderer from "react-test-renderer";
import BrandButton from "./index";

test("Use BrandButton", () => {
  const component = renderer.create(<BrandButton>Oh click me, dear</BrandButton>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
