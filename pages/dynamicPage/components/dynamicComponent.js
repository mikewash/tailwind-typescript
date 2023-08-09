import React from 'react'

const DynamicComponent = () => {
  return (
    <div className="container-1300 view-container view-home mx-auto px-4 py-0 text-base md:px-8 md:py-4">
      <div className="flex flex-wrap space-x-0 lg:flex-nowrap lg:space-x-8">
        <LeftContainerMain />
        <RightContainerMain />
      </div>
    </div>
  )
}

export default DynamicComponent

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
  const [activeTab, setActiveTab] = React.useState('latest');

  // Sample literal data for stories
  const sampleStories = [
    {
      id: '68044d6de8e687ef546278fd76dcffc1', // used the data-id attribute
      title: 'Robbie Robertson, Leader Of The Band Dies At 80',
      author: 'Adwait',
      authorImage: 'https://lh3.googleusercontent.com/a/AATXAJxyImPUkMrt5CA08OpZc_cDPGIkywbNoNgYyh3n=s96-c',
      description: 'He was 80 and passed away after a long illness, his manager said.',
      image: 'https://cdn.digg.com/submitted-links/160x160/1691612940-69G8RdBkvg.jpg',
      // likes and comments are not directly provided so I left them as placeholders
      likes: 150, // placeholder number
      comments: 10, // placeholder number
      category: 'RIP',
      sourceName: 'nbcnews.com',
      sourceLink: 'nbcnews.com',
      timeAgo: '1 hour ago'
    },
    {
      id: '2',
      title: 'Can The Criminal Justice System Try An Ex-President Fairly?',
      author: 'Jane Smith',
      authorImage: 'https://lh3.googleusercontent.com/a/AAcHTtdUe5omxtrr6lz14CPl4Gd8Xj_rgjaDikCaC04u=s96-c',
      description: 'A tale of two judges',
      image: 'https://cdn.digg.com/submitted-links/160x160/1691586858-PqbOS4FJS8.jpg', 
      likes: 200,
      comments: 25,
      category: 'TAKE ON ME',
      sourceName: 'slate.com',
      sourceLink: 'slate.com',
      timeAgo: '8 hours ago'
    }
  ];

  return (
    <div className="mt-4 min-w-0 flex-grow lg:mt-0 ">
      <div className="links-wrapper mb-2">
        <div className="relative mb-6 flex pb-2 pt-1 md:pt-0">
          <div className="mb-3 flex-grow space-x-6 text-sm font-medium">
            <TabLink isActive={activeTab === 'latest'} onClick={() => setActiveTab('latest')}>
              Latest
            </TabLink>
            <TabLink isActive={activeTab === 'popular'} onClick={() => setActiveTab('popular')}>
              Popular
            </TabLink>
          </div>
        </div>
      </div>

      {sampleStories.map(story => (
        <NewsStoryComponent key={story.id} story={story} />
      ))}
    </div>
  );
};


const TabLink = ({ isActive, onClick, children }) => {
  const activeClasses = isActive
    ? 'text-slate-500 hover:text-slate-600'
    : 'text-slate-600 hover:text-slate-700';
  const inactiveClasses = isActive
    ? 'text-slate-600 hover:text-slate-700'
    : 'text-slate-500 hover:text-slate-600';

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`text-sm font-medium ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </a>
  );
};

const NewsStoryComponent = ({ story }) => {
  return (
    <article className="card flex gap-0 md:gap-4 mb-6 relative flex-col md:flex-row border-b border-gray-300 pb-6 "> 
      <a 
        className="mb-3 md:mb-0 order-first w-full md:order-last md:w-40 md:h-40 xl:w-40 xl:h-40 flex-shrink-0"
        href={story.link} 
        target="_blank"
        rel="noopener noreferrer"
      >
        <picture className="bg-gray-100 block md:inline">
          <img 
            width="419" 
            height="224" 
            loading="lazy" 
            alt={story.title}
            className="w-full h-56 md:h-full rounded object-cover" 
            src={story.image}
          />
        </picture>
      </a>

      <div className="order-last flex-grow min-w-0 md:order-first md:w-3/4">
        <header className="relative">
          <p className="text-xss tracking-widest leading-5 uppercase text-gray-500 font-bold break-words">
            {story.category || "CATEGORY"}
          </p>

          <a 
            href={story.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h2 className="font-bold text-base md:text-xl leading-tight text-gray-700 hover:text-blue-600 break-words">
              {story.title}
            </h2>
          </a>

          <div className="flex flex-row items-center text-xs">
            <a className="flex-shrink-0 flex items-center flex-row whitespace-nowrap py-1 leading-6">
              <img 
                className="h-4 w-4 object-cover rounded-full" 
                src={story.authorImage}
                alt={story.author}
              />
              <span className="pl-1 inline-block">{story.author}</span>
            </a>
            
            <span className="text-gray-400 px-1 text-xs inline-block">via</span>
            <a 
              href={story.sourceLink}
              className="py-0.5 md:px-2 relative text-xs whitespace-nowrap rounded-full mr-1 text-blue-500 bg-slate-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              {story.sourceName}
            </a>
          </div>
        </header>

        <div className="description mt-1 text-sm text-gray-600 font-normal break-words">
          {story.description}
        </div>

        <div className="flex flex-row items-center pt-2">
          <div className="flex flex-row items-center text-sm">
            <time className="whitespace-nowrap text-gray-400">
              {story.timeAgo}
            </time>
          </div>

          <span className="px-2 text-gray-300 inline-block">·</span>
          <div className="comments cursor-pointer text-gray-300 hover:text-gray-600">
            {/* You can add a link to the comments here */}
            <span>{story.commentsCount} comments</span>
          </div>

          <span className="px-2 text-gray-300 inline-block">·</span>
          <div className="share cursor-pointer text-gray-300 hover:text-blue-500">
            {/* Implement the share functionality here */}
            Share
          </div>
        </div>
      </div>
    </article>
  );
};
