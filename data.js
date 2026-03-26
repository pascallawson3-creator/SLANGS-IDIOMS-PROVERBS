/* ═══════════════════════════════════════════════════════════════
   IdiomVault — Shared Data & Game Engine
   All 198 expressions + XP / Streak / Progress utilities
═══════════════════════════════════════════════════════════════ */

/* ── FULL DATASET ─────────────────────────────────────────────── */
const DATA = [
  {n:1,   expr:"A blessing in disguise",                         type:"idiom",       cat:"Luck & Fate",    meaning:"Something that seems bad at first but turns out to be good.",             example:"Losing that job was a blessing in disguise — I found a much better one."},
  {n:2,   expr:"A dime a dozen",                                 type:"idiom",       cat:"Value",          meaning:"Something very common and therefore of little value.",                    example:"Talented singers are a dime a dozen these days."},
  {n:3,   expr:"A piece of cake",                                type:"idiom",       cat:"Difficulty",     meaning:"Something very easy to do.",                                             example:"The exam was a piece of cake — I finished in 20 minutes."},
  {n:4,   expr:"Actions speak louder than words",                type:"proverb",     cat:"Character",      meaning:"What someone does matters more than what they say.",                     example:"He promised to help but never did — actions speak louder than words."},
  {n:5,   expr:"Add insult to injury",                           type:"idiom",       cat:"Bad Situations", meaning:"To make an already bad situation even worse.",                           example:"They cancelled my flight, then lost my bag — adding insult to injury!"},
  {n:6,   expr:"Barking up the wrong tree",                      type:"idiom",       cat:"Mistakes",       meaning:"Pursuing a mistaken or misguided course of action.",                    example:"If you think I took your keys, you're barking up the wrong tree."},
  {n:7,   expr:"Beat around the bush",                           type:"idiom",       cat:"Communication",  meaning:"Avoid the main topic; not speaking directly about the issue.",           example:"Stop beating around the bush and just tell me what happened."},
  {n:8,   expr:"Break a leg",                                    type:"idiom",       cat:"Encouragement",  meaning:"Good luck! (especially said to performers before going on stage).",     example:"You're on in five minutes — break a leg!"},
  {n:9,   expr:"Burn the midnight oil",                          type:"idiom",       cat:"Work & Effort",  meaning:"To work or study very late into the night.",                            example:"She burned the midnight oil to finish her dissertation."},
  {n:10,  expr:"By the skin of your teeth",                      type:"idiom",       cat:"Luck & Fate",    meaning:"Just barely; with very little margin to spare.",                        example:"I passed the exam by the skin of my teeth — I got 51%."},
  {n:11,  expr:"Call it a day",                                  type:"idiom",       cat:"Work & Effort",  meaning:"To stop working and rest for the remainder of the day.",                example:"We've done enough for now — let's call it a day."},
  {n:12,  expr:"Caught between a rock and a hard place",         type:"idiom",       cat:"Bad Situations", meaning:"Facing two equally difficult choices with no easy way out.",            example:"I can't afford rent or food — I'm caught between a rock and a hard place."},
  {n:13,  expr:"Cut corners",                                    type:"idiom",       cat:"Mistakes",       meaning:"Do something the cheapest or easiest way, sacrificing quality.",        example:"The builders cut corners and the roof started leaking."},
  {n:14,  expr:"Cry over spilled milk",                          type:"idiom",       cat:"Attitude",       meaning:"Be upset about something that cannot be changed.",                      example:"The deadline passed — no point crying over spilled milk."},
  {n:15,  expr:"Curiosity killed the cat",                       type:"proverb",     cat:"Character",      meaning:"Being too inquisitive can lead to trouble or danger.",                  example:"Don't snoop through his messages — curiosity killed the cat."},
  {n:16,  expr:"Don't count your chickens before they hatch",    type:"proverb",     cat:"Caution",        meaning:"Don't assume success before it actually happens.",                      example:"I haven't got the offer yet — don't count your chickens."},
  {n:17,  expr:"Don't put all your eggs in one basket",          type:"proverb",     cat:"Caution",        meaning:"Don't risk everything on a single venture.",                            example:"Invest in different assets — don't put all your eggs in one basket."},
  {n:18,  expr:"Draw the line",                                  type:"idiom",       cat:"Boundaries",     meaning:"Set a firm limit on what you will tolerate.",                           example:"I draw the line at working weekends — that's my family time."},
  {n:19,  expr:"Drop in the bucket",                             type:"idiom",       cat:"Value",          meaning:"A small, insignificant amount compared to what is needed.",             example:"The donation was generous, but it's just a drop in the bucket."},
  {n:20,  expr:"Dressed to the nines",                           type:"idiom",       cat:"Appearance",     meaning:"Dressed very elegantly and stylishly.",                                 example:"She arrived at the gala dressed to the nines."},
  {n:21,  expr:"Every cloud has a silver lining",                type:"proverb",     cat:"Optimism",       meaning:"There is something positive in every bad situation.",                   example:"I missed the flight, but every cloud has a silver lining — I met my partner."},
  {n:22,  expr:"Eye for an eye",                                 type:"idiom",       cat:"Justice",        meaning:"Punishment equivalent to the offense committed.",                       example:"He demanded justice — an eye for an eye."},
  {n:23,  expr:"Face the music",                                 type:"idiom",       cat:"Consequences",   meaning:"Accept and deal with the unpleasant consequences of your actions.",     example:"He made the mistake, and now he has to face the music."},
  {n:24,  expr:"Feeling under the weather",                      type:"idiom",       cat:"Health",         meaning:"Feeling ill or unwell.",                                                example:"I'm a bit under the weather — I think I'm getting a cold."},
  {n:25,  expr:"Fingers crossed",                                type:"idiom",       cat:"Luck & Fate",    meaning:"Hoping for good luck or a positive outcome.",                           example:"The results come out tomorrow — fingers crossed!"},
  {n:26,  expr:"Get out of hand",                                type:"idiom",       cat:"Control",        meaning:"Become uncontrolled or chaotic.",                                       example:"The party got completely out of hand by midnight."},
  {n:27,  expr:"Get your act together",                          type:"idiom",       cat:"Character",      meaning:"Organize yourself; start behaving more responsibly.",                   example:"If you want to pass, you need to get your act together."},
  {n:28,  expr:"Give the cold shoulder",                         type:"idiom",       cat:"Relationships",  meaning:"Deliberately ignore someone.",                                          example:"Ever since their argument, she's been giving him the cold shoulder."},
  {n:29,  expr:"Hit the nail on the head",                       type:"idiom",       cat:"Communication",  meaning:"Describe exactly what is causing a situation or problem.",              example:"You hit the nail on the head — that's exactly what the issue is."},
  {n:30,  expr:"Hold your horses",                               type:"idiom",       cat:"Caution",        meaning:"Wait a moment; be patient before acting.",                              example:"Hold your horses — we need to think this through first."},
  {n:31,  expr:"If it isn't broke, don't fix it",                type:"proverb",     cat:"Caution",        meaning:"Don't change something that is already working fine.",                  example:"The system runs perfectly — if it isn't broke, don't fix it."},
  {n:32,  expr:"In hot water",                                   type:"idiom",       cat:"Bad Situations", meaning:"In trouble or a difficult situation.",                                  example:"He's in hot water with his boss after missing three deadlines."},
  {n:33,  expr:"Jump on the bandwagon",                          type:"idiom",       cat:"Trends",         meaning:"Join a popular trend or activity many others are doing.",               example:"Everyone jumped on the bandwagon when the new app launched."},
  {n:34,  expr:"Kick the bucket",                                type:"slang",       cat:"Life & Death",   meaning:"To die (used humorously or informally).",                               example:"Old Mr. Thompson finally kicked the bucket at the age of 95."},
  {n:35,  expr:"Know the ropes",                                 type:"idiom",       cat:"Experience",     meaning:"Understand how something works; be experienced and knowledgeable.",      example:"She's been here for years — she really knows the ropes."},
  {n:36,  expr:"Let the cat out of the bag",                     type:"idiom",       cat:"Communication",  meaning:"Accidentally reveal a secret.",                                         example:"He let the cat out of the bag about the surprise party."},
  {n:37,  expr:"Like two peas in a pod",                         type:"idiom",       cat:"Relationships",  meaning:"Very similar to each other; inseparable.",                              example:"Those two sisters are like two peas in a pod — always together."},
  {n:38,  expr:"Make ends meet",                                 type:"idiom",       cat:"Money",          meaning:"To manage financially with limited resources.",                          example:"With two jobs, she was barely making ends meet."},
  {n:39,  expr:"Miss the boat",                                  type:"idiom",       cat:"Opportunities",  meaning:"Miss an opportunity; be too late to take advantage of something.",      example:"He missed the boat on investing early in that startup."},
  {n:40,  expr:"No pain, no gain",                               type:"proverb",     cat:"Work & Effort",  meaning:"You have to work hard to achieve something worthwhile.",                example:"Training hurts every day, but no pain, no gain."},
  {n:41,  expr:"Off the hook",                                   type:"idiom",       cat:"Consequences",   meaning:"Freed from blame, responsibility, or an obligation.",                   example:"The charges were dropped — he's completely off the hook."},
  {n:42,  expr:"On thin ice",                                    type:"idiom",       cat:"Bad Situations", meaning:"In a risky or precarious situation.",                                   example:"After the third warning, he's on thin ice with his employer."},
  {n:43,  expr:"Pull someone's leg",                             type:"idiom",       cat:"Humour",         meaning:"To joke with or tease someone.",                                        example:"Are you serious? Or are you pulling my leg?"},
  {n:44,  expr:"Put all your eggs in one basket",                type:"proverb",     cat:"Caution",        meaning:"Risk everything on a single venture or option.",                        example:"He invested everything in one stock — never put all your eggs in one basket."},
  {n:45,  expr:"Quick on the draw",                              type:"idiom",       cat:"Character",      meaning:"Quick to react or respond to a situation.",                             example:"She's quick on the draw — she answered before anyone else."},
  {n:46,  expr:"Read between the lines",                         type:"idiom",       cat:"Communication",  meaning:"Understand the hidden meaning behind what is said.",                   example:"Reading between the lines, it's clear she wasn't happy."},
  {n:47,  expr:"Right off the bat",                              type:"idiom",       cat:"Time",           meaning:"Immediately; without any delay.",                                       example:"Right off the bat, she knew something was wrong."},
  {n:48,  expr:"Spill the beans",                                type:"idiom",       cat:"Communication",  meaning:"Reveal secret information, often unintentionally.",                    example:"Don't spill the beans about the surprise — it's a secret!"},
  {n:49,  expr:"Steal someone's thunder",                        type:"idiom",       cat:"Relationships",  meaning:"Take attention or credit away from someone else.",                     example:"He announced his news right after hers — stealing her thunder."},
  {n:50,  expr:"Straight from the horse's mouth",                type:"idiom",       cat:"Communication",  meaning:"Directly from the original or most reliable source.",                  example:"I heard it straight from the horse's mouth — the CEO confirmed it."},
  {n:51,  expr:"Take it with a grain of salt",                   type:"idiom",       cat:"Attitude",       meaning:"Don't take it too seriously; be skeptical.",                           example:"Take his stories with a grain of salt — he tends to exaggerate."},
  {n:52,  expr:"The ball is in your court",                      type:"idiom",       cat:"Responsibility", meaning:"It's your decision or responsibility now.",                             example:"I've made my offer — the ball is in your court."},
  {n:53,  expr:"Under the weather",                              type:"idiom",       cat:"Health",         meaning:"Feeling ill or unwell.",                                                example:"She's been under the weather all week — probably the flu."},
  {n:54,  expr:"Up in arms",                                     type:"idiom",       cat:"Emotions",       meaning:"Angry and protesting about something.",                                example:"The workers were up in arms over the proposed pay cuts."},
  {n:55,  expr:"Variety is the spice of life",                   type:"proverb",     cat:"Optimism",       meaning:"Different experiences make life more interesting and enjoyable.",       example:"Try a new cuisine every week — variety is the spice of life!"},
  {n:56,  expr:"When pigs fly",                                  type:"idiom",       cat:"Impossibility",  meaning:"Something that will never happen.",                                    example:"He'll apologise when pigs fly — he never admits he's wrong."},
  {n:57,  expr:"Wild goose chase",                               type:"idiom",       cat:"Mistakes",       meaning:"A futile pursuit or hopeless search.",                                 example:"Searching for that file was a wild goose chase — it never existed."},
  {n:58,  expr:"You can't judge a book by its cover",            type:"proverb",     cat:"Character",      meaning:"Don't judge someone based solely on appearance.",                      example:"He looked scruffy but was brilliant — you can't judge a book by its cover."},
  {n:59,  expr:"A bird in the hand is worth two in the bush",    type:"proverb",     cat:"Caution",        meaning:"Better to keep what you have than risk losing it seeking more.",        example:"Take the job offer — a bird in the hand is worth two in the bush."},
  {n:60,  expr:"A penny for your thoughts",                      type:"idiom",       cat:"Communication",  meaning:"Asking someone what they are thinking about.",                          example:"You've been quiet all evening — a penny for your thoughts?"},
  {n:61,  expr:"All bark and no bite",                           type:"idiom",       cat:"Character",      meaning:"Someone who talks tough but never actually takes action.",              example:"Don't worry about his threats — he's all bark and no bite."},
  {n:62,  expr:"Bite off more than you can chew",                type:"idiom",       cat:"Mistakes",       meaning:"Take on more responsibility or work than you can handle.",              example:"He bit off more than he could chew by managing three projects at once."},
  {n:63,  expr:"Break the ice",                                  type:"idiom",       cat:"Communication",  meaning:"Initiate conversation or ease tension in a social situation.",          example:"He told a joke to break the ice at the start of the meeting."},
  {n:64,  expr:"Burning the candle at both ends",                type:"idiom",       cat:"Work & Effort",  meaning:"Working excessively hard without enough rest, leading to exhaustion.",  example:"She's burning the candle at both ends — work all day, study all night."},
  {n:65,  expr:"Caught red-handed",                              type:"idiom",       cat:"Consequences",   meaning:"Caught in the act of doing something wrong or illegal.",               example:"The shoplifter was caught red-handed by the security guard."},
  {n:66,  expr:"Cut to the chase",                               type:"idiom",       cat:"Communication",  meaning:"Get to the point without wasting time on unnecessary details.",         example:"Let's cut to the chase — how much will it cost?"},
  {n:67,  expr:"Every dog has its day",                          type:"proverb",     cat:"Optimism",       meaning:"Everyone will have their moment of success or good fortune.",           example:"Keep trying — every dog has its day, and yours will come."},
  {n:68,  expr:"Falling on deaf ears",                           type:"idiom",       cat:"Communication",  meaning:"When advice or requests are ignored and not listened to.",             example:"All her warnings fell on deaf ears — nobody listened."},
  {n:69,  expr:"Get your ducks in a row",                        type:"idiom",       cat:"Work & Effort",  meaning:"Organize yourself and prepare thoroughly for something.",              example:"Get your ducks in a row before the investors arrive."},
  {n:70,  expr:"Hit the ground running",                         type:"idiom",       cat:"Work & Effort",  meaning:"Start an activity with great enthusiasm and energy from the beginning.", example:"The new manager hit the ground running — she had a plan on day one."},
  {n:71,  expr:"In one ear and out the other",                   type:"idiom",       cat:"Communication",  meaning:"When information is not retained; quickly forgotten.",                  example:"I told him three times, but it goes in one ear and out the other."},
  {n:72,  expr:"Jump through hoops",                             type:"idiom",       cat:"Difficulty",     meaning:"Go through many complicated procedures to achieve something.",          example:"I had to jump through so many hoops just to get a visa."},
  {n:73,  expr:"Keep your chin up",                              type:"idiom",       cat:"Encouragement",  meaning:"Stay positive and remain optimistic during difficult times.",           example:"I know it's hard, but keep your chin up — things will improve."},
  {n:74,  expr:"Leave no stone unturned",                        type:"idiom",       cat:"Work & Effort",  meaning:"Make every possible effort; search thoroughly for solutions.",          example:"The detective left no stone unturned in the investigation."},
  {n:75,  expr:"Make hay while the sun shines",                  type:"proverb",     cat:"Opportunities",  meaning:"Take advantage of opportunities while conditions are favourable.",      example:"Sales are booming — make hay while the sun shines."},
  {n:76,  expr:"Not playing with a full deck",                   type:"slang",       cat:"Character",      meaning:"Not mentally sound; lacking good judgement.",                           example:"He agreed to that deal? He must not be playing with a full deck."},
  {n:77,  expr:"Out of left field",                              type:"idiom",       cat:"Surprise",       meaning:"Unexpectedly surprising; coming from an unexpected direction.",         example:"His resignation came completely out of left field — nobody saw it coming."},
  {n:78,  expr:"Put your money where your mouth is",             type:"idiom",       cat:"Character",      meaning:"Back up your words with concrete actions.",                             example:"If you believe in the project, put your money where your mouth is."},
  {n:79,  expr:"Raining cats and dogs",                          type:"idiom",       cat:"Weather",        meaning:"Raining very heavily.",                                                 example:"Bring an umbrella — it's raining cats and dogs out there."},
  {n:80,  expr:"See eye to eye",                                 type:"idiom",       cat:"Relationships",  meaning:"Agree with someone; share the same opinion.",                           example:"They rarely see eye to eye on business strategy."},
  {n:81,  expr:"Sink or swim",                                   type:"idiom",       cat:"Consequences",   meaning:"Succeed or fail entirely based on one's own efforts.",                  example:"The boss threw him in with no training — sink or swim."},
  {n:82,  expr:"Sit on the fence",                               type:"idiom",       cat:"Attitude",       meaning:"Avoid making a decision or taking a side.",                            example:"Stop sitting on the fence and tell us which option you prefer."},
  {n:83,  expr:"Smell a rat",                                    type:"idiom",       cat:"Suspicion",      meaning:"Suspect that something dishonest or wrong is happening.",              example:"When the numbers didn't add up, I started to smell a rat."},
  {n:84,  expr:"Speak of the devil",                             type:"idiom",       cat:"Surprise",       meaning:"Said when the person just mentioned appears unexpectedly.",             example:"Speak of the devil — we were just talking about you!"},
  {n:85,  expr:"Take with a pinch of salt",                      type:"idiom",       cat:"Attitude",       meaning:"View something skeptically; don't take it too seriously.",             example:"Take his statistics with a pinch of salt — he exaggerates."},
  {n:86,  expr:"The early bird catches the worm",                type:"proverb",     cat:"Work & Effort",  meaning:"Those who act early or promptly have an advantage.",                   example:"She arrived an hour before everyone — the early bird catches the worm."},
  {n:87,  expr:"The elephant in the room",                       type:"idiom",       cat:"Communication",  meaning:"An obvious problem everyone avoids discussing.",                        example:"Nobody mentioned the deficit — it was the elephant in the room."},
  {n:88,  expr:"Throw in the towel",                             type:"idiom",       cat:"Consequences",   meaning:"Give up after repeated failures; admit defeat.",                        example:"After five failed attempts, he finally threw in the towel."},
  {n:89,  expr:"Turn over a new leaf",                           type:"idiom",       cat:"Character",      meaning:"Make positive changes in your life; start behaving better.",            example:"After rehab, he turned over a new leaf and became a better person."},
  {n:90,  expr:"Under one's thumb",                              type:"idiom",       cat:"Control",        meaning:"Completely under someone else's control or influence.",                 example:"His manager has him completely under her thumb."},
  {n:91,  expr:"Up against the wall",                            type:"idiom",       cat:"Bad Situations", meaning:"In a very difficult situation with no easy way out.",                  example:"With debts piling up, the company was up against the wall."},
  {n:92,  expr:"Walking on eggshells",                           type:"idiom",       cat:"Relationships",  meaning:"Being extremely cautious to avoid upsetting someone.",                 example:"Everyone walks on eggshells around him when he's in a bad mood."},
  {n:93,  expr:"What goes around comes around",                  type:"proverb",     cat:"Justice",        meaning:"Actions — good or bad — eventually return to you.",                    example:"He treated everyone poorly for years — what goes around comes around."},
  {n:94,  expr:"When it rains, it pours",                        type:"proverb",     cat:"Bad Situations", meaning:"Problems or misfortunes tend to come all at once.",                    example:"Car broke down, then I lost my wallet — when it rains, it pours."},
  {n:95,  expr:"You can't have your cake and eat it too",        type:"proverb",     cat:"Choices",        meaning:"You cannot enjoy both sides of a situation; you must choose.",          example:"You want the salary but not the work? You can't have your cake and eat it too."},
  {n:96,  expr:"Your guess is as good as mine",                  type:"idiom",       cat:"Knowledge",      meaning:"I don't know either — we're equally uncertain.",                        example:"Where did he go? Your guess is as good as mine."},
  {n:97,  expr:"All's fair in love and war",                     type:"proverb",     cat:"Choices",        meaning:"In certain situations, any action is considered acceptable.",           example:"He took her number from a friend — all's fair in love and war."},
  {n:98,  expr:"Bite the dust",                                  type:"slang",       cat:"Life & Death",   meaning:"To fail or die.",                                                      example:"That startup bit the dust after just six months."},
  {n:99,  expr:"Burn bridges",                                   type:"idiom",       cat:"Relationships",  meaning:"Permanently destroy a relationship or opportunity.",                    example:"Don't burn bridges with your old employer — you may need them."},
  {n:100, expr:"Caught off guard",                               type:"idiom",       cat:"Surprise",       meaning:"Unprepared for an unexpected event.",                                   example:"The question caught her completely off guard during the interview."},
  {n:101, expr:"Chasing rainbows",                               type:"idiom",       cat:"Attitude",       meaning:"Pursuing unrealistic or impossible goals.",                             example:"He's been chasing rainbows with that invention for years."},
  {n:102, expr:"Cold feet",                                      type:"idiom",       cat:"Emotions",       meaning:"Nervousness or doubt before an important event or decision.",           example:"He got cold feet right before the wedding ceremony."},
  {n:103, expr:"Cross that bridge when you come to it",          type:"idiom",       cat:"Attitude",       meaning:"Deal with problems only when they actually arise.",                     example:"Don't worry about the next stage — cross that bridge when you come to it."},
  {n:104, expr:"Cut loose",                                      type:"idiom",       cat:"Freedom",        meaning:"Let go; become free from restrictions or obligations.",                 example:"After exams, we finally cut loose and had a great night out."},
  {n:105, expr:"Devil's advocate",                               type:"idiom",       cat:"Communication",  meaning:"Argue against something to test the argument, even if you agree.",     example:"Let me play devil's advocate — what if the plan fails?"},
  {n:106, expr:"Fly off the handle",                             type:"idiom",       cat:"Emotions",       meaning:"React suddenly and angrily; lose one's temper.",                       example:"He flies off the handle at the slightest criticism."},
  {n:107, expr:"Go down in flames",                              type:"idiom",       cat:"Consequences",   meaning:"Fail spectacularly and publicly.",                                      example:"The product launch went down in flames — nothing worked."},
  {n:108, expr:"Hit rock bottom",                                type:"idiom",       cat:"Emotions",       meaning:"Reach the lowest possible point emotionally or financially.",           example:"He hit rock bottom after losing his job, his home, and his family."},
  {n:109, expr:"In for a penny, in for a pound",                 type:"proverb",     cat:"Choices",        meaning:"If you're going to take a risk at all, you might as well go all in.",  example:"We've invested this much already — in for a penny, in for a pound."},
  {n:110, expr:"Jump ship",                                      type:"idiom",       cat:"Work & Effort",  meaning:"Abandon an organization or situation suddenly.",                        example:"Several key employees jumped ship right before the company collapsed."},
  {n:111, expr:"Keep your friends close but enemies closer",     type:"proverb",     cat:"Suspicion",      meaning:"Know your enemies well so you can be prepared for them.",              example:"He invited his rival to lunch — keep your friends close but enemies closer."},
  {n:112, expr:"Let sleeping dogs lie",                          type:"proverb",     cat:"Caution",        meaning:"Avoid stirring up old trouble or reopening resolved issues.",           example:"Don't bring up that argument again — let sleeping dogs lie."},
  {n:113, expr:"Make no bones about it",                         type:"idiom",       cat:"Communication",  meaning:"Speak plainly and directly without hesitation.",                        example:"She made no bones about it — she hated the new policy."},
  {n:114, expr:"Missed the boat",                                type:"idiom",       cat:"Opportunities",  meaning:"Missed an opportunity; arrived or acted too late.",                     example:"He missed the boat on buying that property when prices were low."},
  {n:115, expr:"No use crying over spilled milk",                type:"proverb",     cat:"Attitude",       meaning:"Don't waste time worrying about things that can't be changed.",         example:"The project failed — no use crying over spilled milk, start fresh."},
  {n:116, expr:"On cloud nine",                                  type:"idiom",       cat:"Emotions",       meaning:"Extremely happy; in a state of pure joy and elation.",                  example:"She was on cloud nine after getting engaged."},
  {n:117, expr:"Out of pocket",                                  type:"idiom",       cat:"Availability",   meaning:"Unavailable for contact; unreachable.",                                 example:"I'll be out of pocket all week — contact my assistant."},
  {n:118, expr:"Paint yourself into a corner",                   type:"idiom",       cat:"Mistakes",       meaning:"Create an impossible or inescapable situation for yourself.",           example:"By making all those promises, he painted himself into a corner."},
  {n:119, expr:"Penny pincher",                                  type:"slang",       cat:"Money",          meaning:"Someone extremely stingy or careful with money.",                       example:"He's such a penny pincher — he won't even tip at restaurants."},
  {n:120, expr:"Pull strings",                                   type:"idiom",       cat:"Influence",      meaning:"Use personal connections or influence to achieve a result.",            example:"She pulled strings to get her son into the best school."},
  {n:121, expr:"Sitting pretty",                                 type:"idiom",       cat:"Luck & Fate",    meaning:"In a very comfortable or favourable position.",                         example:"With a guaranteed contract, they're sitting pretty for two years."},
  {n:122, expr:"Sow wild oats",                                  type:"idiom",       cat:"Youth",          meaning:"Engage in youthful indiscretions before settling down.",                example:"He spent his twenties sowing wild oats before finally settling down."},
  {n:123, expr:"Tied up in knots",                               type:"idiom",       cat:"Emotions",       meaning:"Confused, anxious, or stressed about a situation.",                     example:"She was tied up in knots before her first public speech."},
  {n:124, expr:"Tighten one's belt",                             type:"idiom",       cat:"Money",          meaning:"Spend less money due to economic hardship.",                            example:"With rising prices, most families had to tighten their belts."},
  {n:125, expr:"Took the wind out of sails",                     type:"idiom",       cat:"Emotions",       meaning:"Disheartened someone by an unexpected setback.",                        example:"The negative review really took the wind out of her sails."},
  {n:126, expr:"Turn back the clock",                            type:"idiom",       cat:"Time",           meaning:"Return things to how they were before.",                                example:"If I could turn back the clock, I'd have studied harder."},
  {n:127, expr:"Under wraps",                                    type:"idiom",       cat:"Communication",  meaning:"Kept secret; not publicly revealed.",                                   example:"The new product is still under wraps until the official launch."},
  {n:128, expr:"Walk down memory lane",                          type:"idiom",       cat:"Time",           meaning:"Reminiscing about fond or significant past events.",                    example:"Looking at those old photos was a real walk down memory lane."},
  {n:129, expr:"Wipe the slate clean",                           type:"idiom",       cat:"Character",      meaning:"Start fresh, without past mistakes affecting the future.",              example:"They agreed to wipe the slate clean and rebuild their friendship."},
  {n:130, expr:"You can't teach an old dog new tricks",          type:"proverb",     cat:"Character",      meaning:"It's difficult for older people to learn new skills or change habits.", example:"He refuses to use a smartphone — you can't teach an old dog new tricks."},
  {n:131, expr:"A house divided against itself cannot stand",    type:"proverb",     cat:"Unity",          meaning:"Internal conflict leads to failure; unity is essential for strength.",  example:"The team kept arguing — a house divided against itself cannot stand."},
  {n:132, expr:"All hands on deck",                             type:"idiom",       cat:"Work & Effort",  meaning:"Everyone must help — a call for all available people.",                  example:"The deadline is tomorrow — all hands on deck!"},
  {n:133, expr:"Barking dogs seldom bite",                       type:"proverb",     cat:"Character",      meaning:"Those who make the loudest threats rarely follow through.",             example:"Ignore his shouting — barking dogs seldom bite."},
  {n:134, expr:"Birds of a feather flock together",              type:"proverb",     cat:"Relationships",  meaning:"People with similar interests or values tend to associate together.",    example:"They both love extreme sports — birds of a feather flock together."},
  {n:135, expr:"Can't see the forest for the trees",             type:"idiom",       cat:"Attitude",       meaning:"Too focused on small details to see the bigger picture.",               example:"You're obsessing over fonts — you can't see the forest for the trees."},
  {n:136, expr:"Don't bite the hand that feeds you",             type:"proverb",     cat:"Relationships",  meaning:"Don't harm or disrespect the person who supports you.",                 example:"Criticising your sponsor publicly? Don't bite the hand that feeds you."},
  {n:137, expr:"Every rose has its thorn",                       type:"proverb",     cat:"Life & Fate",    meaning:"Every good or beautiful thing has its own drawbacks.",                  example:"The job pays well but has long hours — every rose has its thorn."},
  {n:138, expr:"Fool me once, shame on you; twice, shame on me", type:"proverb",     cat:"Caution",        meaning:"After being deceived once, it's your own fault to allow it again.",     example:"He lied again? Fool me once, shame on you — fool me twice, shame on me."},
  {n:139, expr:"Good things come to those who wait",             type:"proverb",     cat:"Patience",       meaning:"Patience is eventually rewarded; good outcomes take time.",              example:"The visa finally came through — good things come to those who wait."},
  {n:140, expr:"Haste makes waste",                              type:"proverb",     cat:"Caution",        meaning:"Rushing leads to mistakes and poor results.",                           example:"Check your work before submitting — haste makes waste."},
  {n:141, expr:"Killing time",                                   type:"idiom",       cat:"Time",           meaning:"Passing time while waiting for something.",                             example:"He was killing time at the airport by reading a magazine."},
  {n:142, expr:"Might as well be hanged for a sheep as a lamb",  type:"proverb",     cat:"Choices",        meaning:"If you're already in trouble, you might as well go all in.",             example:"We're late anyway — might as well be hanged for a sheep as a lamb."},
  {n:143, expr:"Nail it",                                        type:"slang",       cat:"Success",        meaning:"Perfectly accomplish something.",                                        example:"She absolutely nailed the presentation — everyone was impressed."},
  {n:144, expr:"Nobody's perfect",                               type:"idiom",       cat:"Character",      meaning:"Everyone makes mistakes; no one is without flaws.",                     example:"I forgot the anniversary — but nobody's perfect, right?"},
  {n:145, expr:"Shooting fish in a barrel",                      type:"idiom",       cat:"Difficulty",     meaning:"An extremely easy task requiring very little effort.",                  example:"Selling to those customers was like shooting fish in a barrel."},
  {n:146, expr:"It takes two to tango",                          type:"proverb",     cat:"Responsibility", meaning:"Both parties involved in a situation share responsibility.",             example:"Don't blame only her — it takes two to tango."},
  {n:147, expr:"Tongue-in-cheek",                                type:"idiom",       cat:"Humour",         meaning:"Not meant seriously; said or done with humorous irony.",                example:"His speech was tongue-in-cheek — he was joking the whole time."},
  {n:148, expr:"A leopard can't change its spots",               type:"proverb",     cat:"Character",      meaning:"A person's fundamental nature cannot easily be changed.",               example:"He promised to be different but relapsed — a leopard can't change its spots."},
  // ── PHRASAL VERBS ──────────────────────────────────────────────
  {n:149, expr:"Back down",                                      type:"phrasal verb",cat:"Relationships",  meaning:"Withdraw from a position or argument you were defending.",              example:"He refused to back down even when everyone disagreed with him."},
  {n:150, expr:"Back up",                                        type:"phrasal verb",cat:"Communication",  meaning:"Support someone's claim or story; or move backwards.",                  example:"Can you back up that statement with some evidence?"},
  {n:151, expr:"Bear with",                                      type:"phrasal verb",cat:"Patience",       meaning:"Be patient with someone or something.",                                 example:"Please bear with me while I find the right document."},
  {n:152, expr:"Blow up",                                        type:"phrasal verb",cat:"Anger",          meaning:"Suddenly become very angry; or explode.",                               example:"He blew up at his team after the third mistake in a row."},
  {n:153, expr:"Break down",                                     type:"phrasal verb",cat:"Emotions",       meaning:"Stop functioning; or lose emotional control.",                          example:"She broke down in tears when she heard the news."},
  {n:154, expr:"Break into",                                     type:"phrasal verb",cat:"Work & Effort",  meaning:"Enter a new field or industry with effort.",                            example:"It took years to break into the film industry."},
  {n:155, expr:"Break up",                                       type:"phrasal verb",cat:"Relationships",  meaning:"End a romantic relationship; or separate into parts.",                  example:"They broke up after two years together."},
  {n:156, expr:"Bring about",                                    type:"phrasal verb",cat:"Consequences",   meaning:"Cause something to happen.",                                            example:"The new law brought about significant changes in the workplace."},
  {n:157, expr:"Bring up",                                       type:"phrasal verb",cat:"Communication",  meaning:"Introduce a topic; or raise a child.",                                  example:"She brought up the budget issue during the meeting."},
  {n:158, expr:"Call off",                                       type:"phrasal verb",cat:"Planning",       meaning:"Cancel something that was planned.",                                    example:"They called off the event due to bad weather."},
  {n:159, expr:"Calm down",                                      type:"phrasal verb",cat:"Emotions",       meaning:"Become less upset or agitated; or help someone do so.",                 example:"Calm down — there's no need to panic."},
  {n:160, expr:"Carry on",                                       type:"phrasal verb",cat:"Persistence",    meaning:"Continue doing something despite difficulties.",                         example:"Despite the setbacks, she carried on with the project."},
  {n:161, expr:"Catch up",                                       type:"phrasal verb",cat:"Progress",       meaning:"Reach the same level as others; or update someone on missed events.",   example:"I need to catch up on the work I missed while I was sick."},
  {n:162, expr:"Check in",                                       type:"phrasal verb",cat:"Communication",  meaning:"Register your arrival; or contact someone to see how they are.",        example:"Don't forget to check in online before your flight."},
  {n:163, expr:"Check out",                                      type:"phrasal verb",cat:"Socialising",    meaning:"Leave a hotel; or investigate something interesting.",                   example:"You should check out that new restaurant downtown."},
  {n:164, expr:"Cheer up",                                       type:"phrasal verb",cat:"Emotions",       meaning:"Become happier; or make someone feel better.",                          example:"Her friends tried to cheer her up after the breakup."},
  {n:165, expr:"Come across",                                    type:"phrasal verb",cat:"Surprise",       meaning:"Find or encounter something by chance; or make a certain impression.",  example:"I came across this old photo while cleaning my room."},
  {n:166, expr:"Come up with",                                   type:"phrasal verb",cat:"Work & Effort",  meaning:"Produce or think of an idea or solution.",                              example:"She came up with a brilliant idea to cut costs."},
  {n:167, expr:"Count on",                                       type:"phrasal verb",cat:"Relationships",  meaning:"Rely on someone to do something.",                                       example:"You can always count on him when things get difficult."},
  {n:168, expr:"Cut back on",                                    type:"phrasal verb",cat:"Money",          meaning:"Reduce the amount of something, especially spending.",                   example:"We need to cut back on expenses before the end of quarter."},
  {n:169, expr:"Deal with",                                      type:"phrasal verb",cat:"Consequences",   meaning:"Handle or take action to manage a problem or situation.",               example:"She knows how to deal with difficult customers calmly."},
  {n:170, expr:"Drop out",                                       type:"phrasal verb",cat:"Choices",        meaning:"Leave a course, school, or activity before finishing it.",              example:"He dropped out of university to start his own business."},
  {n:171, expr:"End up",                                         type:"phrasal verb",cat:"Consequences",   meaning:"Eventually reach a place, situation, or outcome.",                      example:"They took the wrong turn and ended up in the wrong city."},
  {n:172, expr:"Fall behind",                                    type:"phrasal verb",cat:"Work & Effort",  meaning:"Fail to keep up with the required pace or progress.",                   example:"He fell behind on his assignments and had to work all weekend."},
  {n:173, expr:"Fall for",                                       type:"phrasal verb",cat:"Relationships",  meaning:"Develop romantic feelings for someone; or be deceived by something.",   example:"She fell for him the moment they met."},
  {n:174, expr:"Figure out",                                     type:"phrasal verb",cat:"Knowledge",      meaning:"Understand or solve something after thinking about it.",                 example:"It took me a while to figure out how the software works."},
  {n:175, expr:"Get along with",                                 type:"phrasal verb",cat:"Relationships",  meaning:"Have a friendly relationship with someone.",                             example:"She gets along with everyone in the office."},
  {n:176, expr:"Get away with",                                  type:"phrasal verb",cat:"Consequences",   meaning:"Escape punishment or criticism for something wrong.",                    example:"He got away with being late because the boss wasn't in."},
  {n:177, expr:"Get over",                                       type:"phrasal verb",cat:"Emotions",       meaning:"Recover from an illness, disappointment, or difficult experience.",      example:"It took months to get over the loss of his job."},
  {n:178, expr:"Give in",                                        type:"phrasal verb",cat:"Attitude",       meaning:"Stop resisting; yield to pressure.",                                     example:"After hours of negotiation, they finally gave in."},
  {n:179, expr:"Give up",                                        type:"phrasal verb",cat:"Persistence",    meaning:"Stop trying; abandon an effort or habit.",                              example:"Don't give up — you're almost there."},
  {n:180, expr:"Go ahead",                                       type:"phrasal verb",cat:"Planning",       meaning:"Proceed with something; or give permission.",                            example:"The team decided to go ahead with the launch despite the risks."},
  {n:181, expr:"Go through",                                     type:"phrasal verb",cat:"Difficulty",     meaning:"Experience or endure a difficult situation.",                            example:"She went through a lot after the accident."},
  {n:182, expr:"Hand in",                                        type:"phrasal verb",cat:"Work & Effort",  meaning:"Submit work or a document.",                                             example:"Please hand in your reports by Friday afternoon."},
  {n:183, expr:"Hang out",                                       type:"phrasal verb",cat:"Socialising",    meaning:"Spend time relaxing with others.",                                       example:"We used to hang out at the park every weekend."},
  {n:184, expr:"Keep up with",                                   type:"phrasal verb",cat:"Progress",       meaning:"Stay at the same level or pace as someone or something.",                example:"It's hard to keep up with all the changes in technology."},
  {n:185, expr:"Let down",                                       type:"phrasal verb",cat:"Relationships",  meaning:"Disappoint someone who trusted you.",                                    example:"He promised to help but let her down at the last minute."},
  {n:186, expr:"Look after",                                     type:"phrasal verb",cat:"Relationships",  meaning:"Take care of someone or something.",                                     example:"Can you look after my cat while I'm away?"},
  {n:187, expr:"Look forward to",                                type:"phrasal verb",cat:"Emotions",       meaning:"Feel excitement or pleasure about something in the future.",             example:"I'm really looking forward to the holiday."},
  {n:188, expr:"Look into",                                      type:"phrasal verb",cat:"Knowledge",      meaning:"Investigate or examine something carefully.",                            example:"The manager agreed to look into the complaint."},
  {n:189, expr:"Make up",                                        type:"phrasal verb",cat:"Relationships",  meaning:"Reconcile after an argument; or invent a story.",                       example:"They argued yesterday but made up this morning."},
  {n:190, expr:"Move on",                                        type:"phrasal verb",cat:"Attitude",       meaning:"Stop dwelling on the past and continue with life.",                      example:"It's time to move on and focus on the future."},
  {n:191, expr:"Pass out",                                       type:"phrasal verb",cat:"Health",         meaning:"Lose consciousness; faint.",                                             example:"The heat was so intense that two runners passed out."},
  {n:192, expr:"Pick up",                                        type:"phrasal verb",cat:"Progress",       meaning:"Collect something or someone; or learn a skill informally.",             example:"She picked up Spanish just by watching TV shows."},
  {n:193, expr:"Point out",                                      type:"phrasal verb",cat:"Communication",  meaning:"Draw attention to something; indicate or mention clearly.",              example:"He pointed out several errors in the contract."},
  {n:194, expr:"Put off",                                        type:"phrasal verb",cat:"Avoidance",      meaning:"Postpone or delay something; or cause someone to lose interest.",        example:"Stop putting off the difficult conversations."},
  {n:195, expr:"Run into",                                       type:"phrasal verb",cat:"Surprise",       meaning:"Meet someone unexpectedly; or encounter a problem.",                     example:"I ran into my old teacher at the supermarket."},
  {n:196, expr:"Set up",                                         type:"phrasal verb",cat:"Planning",       meaning:"Arrange or prepare something; establish a business or system.",          example:"They set up the new office in just three days."},
  {n:197, expr:"Show up",                                        type:"phrasal verb",cat:"Consequences",   meaning:"Arrive or appear somewhere; make an appearance.",                        example:"Half the team didn't even show up for the meeting."},
  {n:198, expr:"Stand out",                                      type:"phrasal verb",cat:"Success",        meaning:"Be noticeably different or better than others.",                         example:"Her portfolio really stood out from the rest."},
];

/* ── XP LEVEL THRESHOLDS ──────────────────────────────────────── */
const LEVELS = [
  {level:1,  minXP:0,    label:"Beginner",    emoji:"🌱"},
  {level:2,  minXP:100,  label:"Explorer",    emoji:"🔍"},
  {level:3,  minXP:250,  label:"Student",     emoji:"📖"},
  {level:4,  minXP:500,  label:"Learner",     emoji:"💡"},
  {level:5,  minXP:800,  label:"Practitioner",emoji:"⚡"},
  {level:6,  minXP:1200, label:"Fluent",      emoji:"🗣️"},
  {level:7,  minXP:1700, label:"Advanced",    emoji:"🎯"},
  {level:8,  minXP:2300, label:"Expert",      emoji:"🏆"},
  {level:9,  minXP:3000, label:"Master",      emoji:"👑"},
  {level:10, minXP:4000, label:"Legend",      emoji:"🌟"},
];

/* ── STORAGE KEYS ──────────────────────────────────────────────── */
const KEYS = {
  learned:   'iv2_learned',
  difficult: 'iv2_difficult',
  xp:        'iv2_xp',
  streak:    'iv2_streak',
  lastDate:  'iv2_last_date',
};

/* ── STATE HELPERS ─────────────────────────────────────────────── */
function getState() {
  return {
    learned:   new Set(JSON.parse(localStorage.getItem(KEYS.learned)   || '[]')),
    difficult: new Set(JSON.parse(localStorage.getItem(KEYS.difficult) || '[]')),
    xp:        parseInt(localStorage.getItem(KEYS.xp)     || '0', 10),
    streak:    parseInt(localStorage.getItem(KEYS.streak) || '0', 10),
    lastDate:  localStorage.getItem(KEYS.lastDate) || '',
  };
}

function saveState(state) {
  localStorage.setItem(KEYS.learned,   JSON.stringify([...state.learned]));
  localStorage.setItem(KEYS.difficult, JSON.stringify([...state.difficult]));
  localStorage.setItem(KEYS.xp,        state.xp);
  localStorage.setItem(KEYS.streak,    state.streak);
  localStorage.setItem(KEYS.lastDate,  state.lastDate);
}

/* ── STREAK LOGIC ──────────────────────────────────────────────── */
function todayStr() {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function updateStreak(state) {
  const today = todayStr();
  if (state.lastDate === today) return state; // already counted today
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (state.lastDate === yStr) {
    state.streak += 1; // consecutive day
  } else if (state.lastDate !== today) {
    state.streak = 1;  // reset — gap in days
  }
  state.lastDate = today;
  return state;
}

/* ── XP + LEVEL ────────────────────────────────────────────────── */
function getLevel(xp) {
  let current = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.minXP) current = l; }
  return current;
}

function getNextLevel(xp) {
  for (const l of LEVELS) { if (xp < l.minXP) return l; }
  return null; // max level
}

function xpProgressPct(xp) {
  const curr = getLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.minXP - curr.minXP;
  const done  = xp - curr.minXP;
  return Math.round((done / range) * 100);
}

/* ── SHUFFLE ───────────────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── TYPE BADGE COLOR ──────────────────────────────────────────── */
const TYPE_COLOR = {
  "idiom":       "#4A8FD9",
  "proverb":     "#4DC48A",
  "slang":       "#D96AB0",
  "phrasal verb":"#7ED4F7",
};
function typeColor(type) { return TYPE_COLOR[type] || "#888"; }
