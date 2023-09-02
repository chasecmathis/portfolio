import React from "react";

function SectionTitle({ title, number, divider }) {
  return (
    <h2 className="font-sans font-semibold text-2xl flex items-center">
      <span className="font-mono text-base font mr-2 font-normal text-textGreen">{`0${number}.`}</span>
      {title}
      {divider ? (
        <span className="hidden md:inline-flex md:w-3/5 h-[.5px] bg-textDark ml-10 opacity-50" />
      ) : null}
    </h2>
  );
}

export default SectionTitle;
