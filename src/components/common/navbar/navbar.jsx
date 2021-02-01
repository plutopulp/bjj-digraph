import React from "react";
import { v4 as uuid } from "uuid";
import { useRefs } from "react-context-refs";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Container, Menu } from "semantic-ui-react";

import { NavbarMenu } from "./styles";
import { useActiveRef } from "../../../hooks";

const sections = ["home", "about", "try", "contact"];

const Navbar = ({ fixed }) => {
  // Get the section refs from context
  let sectionRefs = useRefs().filter((ref) => ref.type === "section");
  // Sort refs according to above sections
  sectionRefs = sectionRefs
    .slice()
    .sort(
      (a, b) => sections.indexOf(a.meta.name) - sections.indexOf(b.meta.name)
    );
  const activeRef = useActiveRef(sectionRefs, { offset: 20 });
  return (
    <NavbarMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing
      secondary
      size="large"
    >
      <Container>
        {sections.map((section, idx) => (
          <AnchorLink href={`#${section}`} offset="-1" key={uuid()}>
            <Menu.Item as="" name={section} active={idx === activeRef} />
          </AnchorLink>
        ))}
      </Container>
    </NavbarMenu>
  );
};

export default Navbar;
