import React, { useRef, ElementRef } from "react";

const Header = () => {
  const borderRef = useRef<ElementRef<"div">>(null);

  const onFocusInput = () => {
    if (borderRef.current) {
      borderRef.current.classList.add("border");
    }
  };

  const onBluerInput = () => {
    if (borderRef.current) {
      borderRef.current.classList.remove("border");
    }
  };

  return (
    <header className="py-12 px-6 sm:py-16 sm:px-8 lg:py-16 lg:px-0 bg-dark20 ">
      <h1 className="text-[1.5rem] text-center font-medium sm:text-[2.5rem]  text-brandColor capitalize">
        code
        <span className="text-white">lândia</span>
      </h1>

      <div
        className="mt-8 px-6 py-4 mx-auto flex items-center gap-4 sm:mt-12 lg:py-4 lg:px-8 lg:w-4/5 lg:max-w-[1150px] bg-dark30 rounded-md
      
        "
        ref={borderRef}
      >
        <svg
          className="w-[18px] h-[18px] sm:w-8 sm:h-8 "
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon-search">
            <path
              id="Vector"
              d="M28.7075 27.2925L22.4488 21.035C24.2628 18.8571 25.1674 16.0637 24.9743 13.2359C24.7813 10.4081 23.5054 7.76358 21.4122 5.85248C19.319 3.94137 16.5696 2.91083 13.7359 2.97523C10.9023 3.03963 8.20249 4.19401 6.19827 6.19824C4.19404 8.20246 3.03966 10.9022 2.97526 13.7359C2.91086 16.5696 3.9414 19.319 5.85251 21.4122C7.76361 23.5054 10.4081 24.7812 13.236 24.9743C16.0638 25.1674 18.8572 24.2628 21.035 22.4488L27.2925 28.7075C27.3855 28.8004 27.4958 28.8741 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8741 28.6146 28.8004 28.7075 28.7075C28.8005 28.6146 28.8742 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8742 27.4957 28.8005 27.3854 28.7075 27.2925ZM5.00004 14C5.00004 12.22 5.52788 10.4799 6.51681 8.99988C7.50575 7.51984 8.91136 6.36628 10.5559 5.68509C12.2004 5.00391 14.01 4.82568 15.7559 5.17294C17.5017 5.52021 19.1053 6.37738 20.364 7.63605C21.6227 8.89472 22.4798 10.4984 22.8271 12.2442C23.1744 13.99 22.9961 15.7996 22.315 17.4442C21.6338 19.0887 20.4802 20.4943 19.0002 21.4832C17.5201 22.4722 15.7801 23 14 23C11.6139 22.9974 9.32626 22.0483 7.639 20.361C5.95175 18.6738 5.00269 16.3861 5.00004 14Z"
              fill="#E07B67"
            />
          </g>
        </svg>

        <input
          className="text-[14px] flex-grow sm:text-[1.25rem] bg-transparent text-dark50 capitalize 
        focus:outline-none"
          type="text"
          placeholder="Pesquisar no blog"
          onFocus={onFocusInput}
          onBlur={onBluerInput}
        />
      </div>
    </header>
  );
};

export default Header;
