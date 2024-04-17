import React from "react";
const Button = () => {
  return (
<a style={{ "--clr": "#7808d0" }} className="button relative inline-flex items-center gap-3 bg-orange-500 text-white font-semibold py-3 px-6 rounded-full overflow-hidden transition duration-300 hover:bg-black" href="#">
  Explore All
  <span className="button__icon-wrapper w-6 h-6 bg-white rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--clr)" }}>
    <svg className="button__icon-svg" width="10" fill="none" viewBox="0 0 14 15">
      <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
    </svg>
    <svg className="button__icon-svg button__icon-svg--copy absolute -left-full bottom-full" width="10" fill="none" viewBox="0 0 14 15">
      <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
    </svg>
  </span>
</a>
  );
};

export default Button;
