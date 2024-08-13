import React, { memo } from "react";

const Tooltip = memo((props: any) => {
  return props.title ? (
    <span className="group relative">
      <span className=" px-2 font-semibold pointer-events-none absolute -top-10 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
        {props.title}
      </span>

      {props.children}
    </span>
  ) : (
    props.children
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
