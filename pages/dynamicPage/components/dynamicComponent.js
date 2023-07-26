import React from 'react'

const MainComponent = () => {
  return (
    <div className="container-1300 view-container view-home mx-auto px-4 py-0 text-base md:px-8 md:py-4">
      <div className="flex flex-wrap space-x-0 lg:flex-nowrap lg:space-x-8">
        <LeftContainerMain />
        <RightContainerMain />
      </div>
    </div>
  )
}

export default MainComponent

// LEFT CONTAINER

const LeftContainerMain = () => {
  return (
    <div className="w-full flex-shrink-0 lg:w-72">
      <div className="flexbar-sticky-offset block lg:sticky lg:top-36">
        <div className="relative overflow-hidden rounded rounded-l-none border-l-0 border-black p-0 md:border md:p-4">
          <MembersText />
          <NewsText />
          <p className="mb-4 font-sans text-[14px] leading-5 text-gray-600">
            What's the most important news going on right now? Subscribe to get all your breaking
            news from one place.
          </p>
          <LeftBorder />
        </div>
        <JoinNewsButton />
      </div>
    </div>
  )
}

const LeftBorder = () => {
  return <div className="absolute inset-y-0 left-0 h-full w-1 bg-black"></div>
}

const MembersText = () => {
  return (
    <div className="relative mb-6 p-2 py-0 font-mono text-xs">
      <div className="absolute rounded-full bg-gray-600 opacity-5"></div>
      <div className="absolute flex items-center justify-center rounded-full bg-gray-800 bg-opacity-5 text-black">
        38423 members
      </div>
    </div>
  )
}

const NewsText = () => {
  return <div className="mb-1 mt-2 text-xl font-bold lg:mb-2 lg:mt-2 ">News</div>
}

const JoinNewsButton = () => {
  return (
    <div className="namespace-scheme mt-6 hidden lg:block">
      <a
        href="/news/join" // Update with the appropriate link
        className="namespace-primary-text subscribe link-open-signin-modal inline-block max-w-[64rem] cursor-pointer
          rounded-full border border-slate-700 px-6 py-3 text-center text-[14px] text-slate-500"
      >
        Join News
      </a>
    </div>
  )
}

// RIGHT CONTAINER
const RightContainerMain = () => {
  return (
    <div className="mt-4 min-w-0 flex-grow lg:mt-0 ">
      <div className="links-wrapper mb-2">
        <div className="relative mb-6 flex pb-2 pt-1 md:pt-0">
          <div className="mb-3 flex-grow space-x-6 text-sm font-medium">
            <TabLink isActive={true}>Latest</TabLink>
            <TabLink isActive={false}>Popular</TabLink>
          </div>
        </div>
      </div>
      {/* RightContainerMain content (news stories) */}
    </div>
  )
}

const TabLink = ({ isActive, children }) => {
  const activeClasses = isActive
    ? 'text-slate-500 hover:text-slate-600'
    : 'text-slate-600 hover:text-slate-700'
  const inactiveClasses = isActive
    ? 'text-slate-600 hover:text-slate-700'
    : 'text-slate-500 hover:text-slate-600'

  return (
    <a href="#" className={`text-sm font-medium ${isActive ? activeClasses : inactiveClasses}`}>
      {children}
    </a>
  )
}
