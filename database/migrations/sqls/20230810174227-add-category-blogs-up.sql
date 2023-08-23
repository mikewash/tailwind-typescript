-- INSERTING 3 REMAINING BLOG POSTS FOR THE "NEWS" CATEGORY

INSERT INTO blogs (
    authorid,
    title,
    summary,
    content,
    created,
    categoryid
)
VALUES
    (1,
    'Breaking: New Medical Discovery',
    'A breakthrough in medical research has been announced!',
    'In a groundbreaking development, scientists have discovered a new treatment that shows promise in curing a range of previously untreatable diseases. The treatment, which targets specific cellular pathways, has demonstrated remarkable results in early clinical trials. Researchers believe that this discovery could revolutionize the field of medicine and bring hope to millions of patients worldwide.\n\nExperts from various medical disciplines are lauding the discovery as a significant step forward in the fight against some of the most challenging health conditions. The new treatment is expected to undergo further testing and refinement before it becomes widely available to the public.\n\nThe medical community and patients alike are eagerly awaiting updates on this exciting breakthrough.',
    '2023-07-18 10:00:00',
    1
    ),
    (1,
    'Global Climate Agreement Reached',
    'Nations around the world have come together to address climate change.',
    'After months of negotiations, world leaders have finally reached a historic agreement to tackle the pressing issue of climate change. The accord, signed by representatives from over 190 countries, outlines ambitious targets for reducing greenhouse gas emissions and transitioning to renewable energy sources.\n\nThe agreement comes after years of international discussions and growing concerns about the impact of climate change on the planet. Environmental activists and scientists have applauded the accord as a significant step forward in the global effort to combat global warming.\n\nWhile challenges remain in implementing the agreements provisions, the international community is hopeful that this united commitment will pave the way for a more sustainable and resilient future.',
    '2023-07-19 12:30:00',
    1
    ),
    (1,
    'Tech Giant Unveils Next-Gen Devices',
    'The leading tech company has revealed its latest line of innovative products.',
    'Tech enthusiasts are buzzing with excitement as the renowned tech company announces its newest lineup of cutting-edge devices. The product launch event showcased a range of gadgets that push the boundaries of technology and user experience.\n\nAmong the highlights is a state-of-the-art smartphone featuring advanced AI capabilities and a sleek design. Additionally, the company unveiled a series of smart home devices that integrate seamlessly into modern living spaces.\n\nIndustry experts and consumers alike are eager to get their hands on these new products, which promise to redefine how we interact with technology. The tech giants continued commitment to innovation has solidified its position as a leader in the ever-evolving tech landscape.',
    '2023-07-20 09:15:00',
    1
    );

-- INSERTING 10 BLOG POSTS FOR THE "VIDEO" CATEGORY

INSERT INTO blogs (
	authorid,
	title,
	summary,
	content,
	categoryid,
	created
)
VALUES
	-- Blog Post 1
	(
		1,
		'Exploring New Frontiers: A Journey into Space',
		'Join us on a virtual journey into space as we explore the mysteries of the universe.',
		'In this exciting video blog post, we take you on a captivating journey into the cosmos. From breathtaking views of distant galaxies to close-up shots of celestial bodies, you will witness the wonders of space like never before. Our team of experts will guide you through the latest discoveries and share insights into the vastness of the universe.',
		2,
		NOW()
	),
	-- Blog Post 2
	(
		1,
		'The Art of Filmmaking: Behind the Scenes of a Blockbuster',
		'Dive into the world of filmmaking and discover the creative process behind producing a blockbuster movie.',
		'Ever wondered what goes on behind the scenes of your favorite blockbuster films? In this video blog post, we take you behind the curtain to reveal the artistry and craftsmanship that bring movie magic to life. From scriptwriting and set design to special effects and editing, you will gain a new appreciation for the art of filmmaking.',
		2, 
		NOW()
	),
	-- Blog Post 3
	(
		1,
		'Virtual Reality Gaming: The Future of Entertainment',
		'Experience the thrill of virtual reality gaming and its potential to revolutionize the way we play.',
		'Dive into the immersive world of virtual reality gaming! In this video blog post, we showcase the latest advancements in VR technology and explore the exciting possibilities it offers for the future of entertainment. From heart-pounding action to mind-bending puzzles, you will discover how VR is changing the way we experience games.',
		2, 
		NOW()
	),
    -- Blog Post 4
	(
		1,
		'Cinematic Masterpieces: A Look at Classic Films',
		'Journey through the golden era of cinema and explore timeless classic films that shaped the industry.',
		'Take a nostalgic trip through the history of cinema with our collection of classic films. In this video blog post, we revisit iconic movies that have left an indelible mark on the world of entertainment. From legendary performances to groundbreaking storytelling, you will gain a deeper appreciation for the cinematic masterpieces that continue to inspire filmmakers today.',
		2, 
		NOW()
	),
    
    -- Blog Post 5
	(
		1,
		'The Science of Space Travel: Exploring Beyond Our Horizons',
		'Uncover the scientific breakthroughs driving humanitys journey to the stars.',
		'Embark on a scientific expedition to understand the incredible advancements in space travel. In this video blog post, we delve into the cutting-edge technologies that are propelling us closer to exploring distant planets and galaxies. From propulsion systems to life support, you will gain insights into the challenges and opportunities of venturing beyond our horizons.',
		2, 
		'2023-06-15 10:00:00'
	),
	-- Blog Post 6
	(
		1,
		'The Evolution of Special Effects in Cinema',
		'From practical effects to CGI, witness the evolution of movie magic.',
		'Discover the captivating history of special effects in the world of cinema. This video blog post takes you on a journey through time to explore how filmmakers have used practical techniques and computer-generated imagery (CGI) to create stunning visual spectacles. From classic blockbusters to modern marvels, you will gain a new appreciation for the artistry of visual effects.',
		2, 
		'2023-07-05 14:30:00'
	),
	-- Blog Post 7
	(
		1,
		'Gaming Unleashed: Exploring Next-Generation Consoles',
		'Dive into the world of gaming with a closer look at the latest gaming consoles.',
		'Get ready to level up your gaming experience as we explore the features and capabilities of next-generation gaming consoles. In this video blog post, we examine the hardware, graphics, and exclusive titles that define the gaming landscape. Whether you are a casual player or a hardcore enthusiast, you won''t want to miss this insider''s view of the gaming world.',
		2, 
		'2023-07-10 12:15:00'
	),
	-- Blog Post 8
	(
		1,
		'The Art of Storytelling: Crafting Compelling Narratives',
		'Unlock the secrets of storytelling and learn how to create compelling narratives.',
		'Dive deep into the art of storytelling and discover the techniques that captivate audiences across various media. In this video blog post, we explore the fundamentals of narrative structure, character development, and plot twists. Whether you''re a writer, filmmaker, or simply a fan of engaging stories, you''ll find valuable insights to enhance your storytelling skills.',
		2, 
		'2023-07-18 09:45:00'
	),
    -- Blog Post 9
    (
		1,
		'Exploring Ancient Civilizations: Unearthing Lost Treasures',
		'Embark on an archaeological adventure to uncover the mysteries of the past.',
		"Journey through time as we delve into the fascinating world of ancient civilizations. In this video blog post, we join archaeologists on their quests to unearth forgotten cities, decipher ancient scripts, and reveal the secrets of cultures long gone. From Egypt's pyramids to the ruins of Machu Picchu, you'll witness the excitement of discovery and the lessons these civilizations hold for us today.",
		2, 
		'2023-07-25 11:30:00'
	),
	-- Blog Post 10
	(
		1,
		'Innovations in Medical Science: Transforming Healthcare',
		'Discover groundbreaking advancements that are revolutionizing the medical field.',
		'Delve into the world of medical science and witness the incredible breakthroughs that are reshaping the landscape of healthcare. In this video blog post, we explore innovative treatments, cutting-edge technologies, and the brilliant minds behind them. From gene therapies to AI-driven diagnostics, you''ll gain a deeper understanding of how science is improving lives and shaping the future of medicine.',
		2, 
		'2023-08-02 09:15:00'
	);
    
    
    -- INSERTING 10 BLOG POSTS FOR THE "GAMING" CATEGORY
    
    INSERT INTO blogs (
	authorid,
	title,
	summary,
	content,
	categoryid,
	created
)
VALUES
	-- Blog Post 1
	(
		1,
		"The Evolution of Video Games: From Pixels to Virtual Reality",
		"Trace the remarkable journey of video games, from their humble beginnings to the immersive worlds of today.",
		"Join us as we embark on a nostalgic and awe-inspiring journey through the history of video games. From the classic arcade games that started it all to the mind-bending possibilities of virtual reality, this video blog post explores the evolution of gaming technology, storytelling, and player experiences. Discover the moments that defined each era and get ready to be amazed by the innovative horizons that gaming continues to push.",
		3, 
		'2023-08-10 14:45:00'
	),
	-- Blog Post 2
	(
		1,
		"The Art of Game Design: Crafting Immersive Virtual Worlds",
		"Uncover the creative process behind designing captivating and interactive video game universes.",
		"Dive into the creative realm of video game design, where imagination meets technology to craft incredible virtual worlds. In this video blog post, we take a behind-the-scenes look at the artistry, mechanics, and storytelling techniques that game developers employ to captivate players. From concept art to level design, you'll gain insight into the intricate process of bringing digital landscapes to life.",
		3, 
		'2023-08-15 12:30:00'
	),
	-- Blog Post 3
	(
		1,
		"The Competitive Edge: Esports and the Rise of Professional Gaming",
		"Explore the explosive growth of esports and its impact on the world of competitive gaming.",
		"Get ready to enter the thrilling arena of esports, where video games transform into fierce competitions and professional careers. This video blog post delves into the phenomenon of esports, from its grassroots beginnings to its current status as a global spectacle. Discover the passion, dedication, and strategies that drive professional gamers, and witness how esports is shaping a new era of sports entertainment.",
		3, 
		'2023-08-20 17:15:00'
	),
	-- Blog Post 4
	(
		1,
		"The RPG Revolution: From Dungeons & Dragons to Open-World Epics",
		"Embark on a quest to uncover the evolution of role-playing games and their impact on gaming culture.",
		"Venture into the world of role-playing games (RPGs) and explore their transformative journey through time. This video blog post takes you on a grand adventure from the origins of tabletop RPGs like Dungeons & Dragons to the sprawling open worlds of modern RPG video games. Discover the allure of character customization, immersive storytelling, and the way RPGs have shaped the way we experience virtual realms.",
		3, 
		'2023-08-25 10:00:00'
	),
	-- Blog Post 5
	(
		1,
		"The Magic of Gaming Soundtracks: How Music Enhances the Player Experience",
		"Dive into the enchanting world of gaming soundtracks and their role in creating memorable gameplay moments.",
		"Immerse yourself in the melodies and harmonies that breathe life into video game worlds. In this video blog post, we explore the art of crafting captivating gaming soundtracks that evoke emotions, enhance storytelling, and elevate the player experience. From iconic themes to dynamic compositions, you'll gain an appreciation for the integral role that music plays in making gaming moments unforgettable.",
		3, 
		'2023-08-30 09:45:00'
	),
    -- Blog Post 6
	(
		1,
		"The Influence of Gaming on Problem-Solving Skills",
		"Discover how video games contribute to the development of cognitive and strategic thinking.",
		"Explore the positive effects of gaming on cognitive abilities and problem-solving skills. In this video blog post, we delve into research that highlights how video games engage players' minds, fostering critical thinking, spatial awareness, and decision-making. From puzzle-solving adventures to real-time strategy games, discover the ways in which gaming can be an educational and enriching experience.",
		3, 
		'2023-09-05 14:30:00'
	),
	-- Blog Post 7
	(
		1,
		"The Psychology of Immersion: How Games Transport Us to Alternate Realities",
		"Unravel the psychological aspects of gaming immersion and its impact on player engagement.",
		"Dive into the fascinating realm of psychological immersion in video games. This video blog post delves into the concepts of presence, flow, and narrative engagement, explaining how game design elements captivate players and transport them to virtual worlds. Discover the ways in which immersive experiences can lead to heightened emotional connections and a deeper sense of enjoyment.",
		3, 
		'2023-09-10 12:15:00'
	),
	-- Blog Post 8
	(
		1,
		"Exploring Virtual Realms: A Guide to Open-World Exploration Games",
		"Embark on a journey through the vast landscapes and captivating narratives of open-world games.",
		"Embark on a quest through the expansive worlds of open-world exploration games. This video blog post takes you on an adventure across diverse landscapes, from lush forests to post-apocalyptic wastelands. Learn how these games encourage player agency, discovery, and freedom, all while weaving compelling narratives that unfold as you explore. Discover the allure of uncharted territories and the thrill of venturing into the unknown.",
		3, 
		'2023-09-15 09:00:00'
	),
	-- Blog Post 9
	(
		1,
		"The Role of Esports in Shaping Modern Gaming Culture",
		"Explore the rise of competitive gaming and its profound influence on the gaming community.",
		"Dive into the phenomenon of esports and its role in shaping the landscape of modern gaming. In this video blog post, we delve into the evolution of competitive gaming, from grassroots tournaments to sold-out arenas. Discover the passion, dedication, and camaraderie that define esports culture, and witness how it has transformed video games into a global spectacle.",
		3, 
		'2023-09-20 15:45:00'
	),
	-- Blog Post 10
	(
		1,
		"From Pixels to High Definition: The Technological Advancements in Gaming Graphics",
		"Trace the evolution of gaming graphics, from 8-bit sprites to stunningly realistic visuals.",
		"Embark on a visual journey through the history of gaming graphics, from the early days of pixel art to the cutting-edge realism of today's games. This video blog post explores the technological breakthroughs that have shaped the way we experience virtual worlds. Discover the hardware innovations, rendering techniques, and artistic mastery that have contributed to the breathtaking visuals that define modern gaming.",
		3, 
		'2023-09-25 11:30:00'
	);