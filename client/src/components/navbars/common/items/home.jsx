import React from "react";
import { v4 as uuid } from "uuid";
import { useRefs } from "react-context-refs";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Menu } from "semantic-ui-react";

import { useActiveRef } from "../../../../hooks";

const homeSections = [
  { name: "home", offset: 0 },
  { name: "about", offset: 0 },
  { name: "contact", offset: 0 },
];

// The home page menu, with smooth-scrolling between sections
const HomeItems = () => {
  // Get the section refs from context
  let sectionRefs = useRefs().filter((ref) => ref.type === "section");
  // Sort refs according to above sections
  sectionRefs = sectionRefs.slice().sort((a, b) => {
    const sectionNames = homeSections.map((section) => section.name);
    return (
      sectionNames.indexOf(a.meta.name) - sectionNames.indexOf(b.meta.name)
    );
  });
  const activeRef = useActiveRef(sectionRefs, { offset: 60 });
  return (
    <React.Fragment>
      {homeSections.map((section, idx) => (
        <AnchorLink
          href={`#${section.name}`}
          offset={section.offset}
          key={uuid()}
        >
          <Menu.Item as="a" name={section.name} active={idx === activeRef} />
        </AnchorLink>
      ))}
    </React.Fragment>
  );
};

export default HomeItems;
