import React from "react";

const MainComponent = () => {
  return (
    <div className="container-1300 view-container mx-auto px-4 py-0 md:px-8 md:py-4 text-base view-home">
      <div className="flex space-x-0 lg:space-x-8 flex-wrap lg:flex-nowrap">
        <LeftContainerMain />
        <RightContainerMain />
      </div>
    </div>
  );
};

export default MainComponent;

// LEFT CONTAINER

const LeftContainerMain = () => {
  return (
    <div className="w-full lg:w-72 flex-shrink-0">
      <div className="block lg:sticky lg:top-36 flexbar-sticky-offset">
        <div className="relative md:border border-l-0 rounded-l-none p-0 md:p-4 rounded overflow-hidden border-black">
          <MembersText />
          <NewsText />
          <p className="leading-5 mb-4 text-[14px] font-sans text-gray-600">
            What's the most important news going on right now? Subscribe to get all your breaking news from one place.
          </p>
          <LeftBorder />

        </div>
        <JoinNewsButton/>
      </div>
    </div>
  );
};

const LeftBorder = () => {
  return <div className="absolute inset-y-0 left-0 w-1 h-full bg-black"></div>;
};

const MembersText = () => {
    return (
      <div className="relative font-mono p-2 py-0 mb-6 text-xs">
        <div className="absolute rounded-full bg-gray-600 opacity-5"></div>
        <div className="absolute rounded-full flex items-center justify-center text-black bg-gray-800 bg-opacity-5">
          38423 members
        </div>
      </div>
    );
  };
  

const NewsText = () => {
  return (
    <div className="mt-2 mb-1 lg:mt-2 lg:mb-2 text-xl font-bold ">
      News
    </div>
  );
};

const JoinNewsButton = () => {
    
    return (
        <div className="namespace-scheme hidden lg:block mt-6">
        <a
          href="/news/join" // Update with the appropriate link
          className="border border-slate-700 namespace-primary-text subscribe text-slate-500 text-[14px]
          cursor-pointer max-w-[64rem] text-center px-6 py-3 rounded-full inline-block link-open-signin-modal">
          Join News
        </a>
      </div>
    )
}

// RIGHT CONTAINER
const RightContainerMain = () => {
    return (
      <div className="flex-grow min-w-0 mt-4 lg:mt-0 ">
        <div className="links-wrapper mb-2">
          <div className="relative flex pb-2 pt-1 md:pt-0 mb-6">
            <div className="flex-grow text-sm font-medium mb-3 space-x-6">
              <TabLink isActive={true}>Latest</TabLink>
              <TabLink isActive={false}>Popular</TabLink>
            </div>
          </div>
        </div>
        {/* RightContainerMain content (news stories) */}
      </div>
    );
  };
  
  const TabLink = ({ isActive, children }) => {
    const activeClasses = isActive
      ? "text-slate-500 hover:text-slate-600"
      : "text-slate-600 hover:text-slate-700";
    const inactiveClasses = isActive
      ? "text-slate-600 hover:text-slate-700"
      : "text-slate-500 hover:text-slate-600";
  
    return (
      <a
        href="#"
        className={`text-sm font-medium ${isActive ? activeClasses : inactiveClasses}`}
      >
        {children}
      </a>
    );
  };
