import React from "react";
import { Accordion, DropDown } from "joseph-ui-kit";

const items = [
  { id: "popularity.desc", value: "인기도 내림차순" },
  { id: "popularity.asc", value: "인기도 오름차순" },
  { id: "vote_average.desc", value: "평점 내림차순" },
  { id: "vote_average.asc", value: "평점 오름차순" },
  { id: "primary_release_date.desc", value: "상영일 내림차순" },
  { id: "primary_release_date.asc", value: "상영일 오름차순" },
  { id: "original_title.desc", value: "제목 내림차순" },
  { id: "original_title.asc", value: "제목 오름차순" },
];

interface SortAccordionProps {
  setSelected?: React.Dispatch<
    React.SetStateAction<{
      id: number | string;
      value: number | string;
    }>
  >;
}

const SortAccordion = ({ setSelected }: SortAccordionProps) => {
  return (
    <>
      <Accordion title="정렬">
        <DropDown
          width="250px"
          label="정렬 기준"
          hideWarn={true}
          items={items}
          onChange={(data) => {
            if (setSelected) {
              setSelected(data.selectedItem);
            }
          }}
        />
      </Accordion>
    </>
  );
};

export default SortAccordion;
