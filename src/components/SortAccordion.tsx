import React from "react";
import { Accordion, DropDown } from "joseph-ui-kit";

const items = [
  { id: "option1", text: "인기도 내림차순" },
  { id: "option2", text: "인기도 오름차순" },
  { id: "option3", text: "평점 내림차순" },
  { id: "option4", text: "평점 오름차순" },
  { id: "option5", text: "상영일 내림차순" },
  { id: "option6", text: "상영일 오름차순" },
  { id: "option7", text: "제목 내림차순" },
  { id: "option8", text: "제목 오름차순" },
];

const SortAccordion = () => {
  return (
    <Accordion title="정렬">
      <DropDown width="250px" label="정렬 기준" hideWarn={true} items={items} />
    </Accordion>
  );
};

export default SortAccordion;
