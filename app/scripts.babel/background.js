'use strict';

let index = 0;

const daily = 1440;
const everyOtherDay = 4320;
const weekly = 10080;
const monthly = 43200;

const $ = (query) => {
  var res = document.querySelectorAll(query);

  if (res.length === 1) {
    return res[0];
  }

  return res;
};

const advice = [
               {
                 section: 'Fundamental Techniques in Handling People',
                 tagline: 'Don\'t criticize, condemn, or complain.',
                 more: 'Human nature does not like to admit fault. When people are criticized or humiliated, they rarely respond well and will often become defensive and resent their critic. To handle people well, we must never criticize, condemn or complain because it will never result in the behavior we desire.'
               },
               {
                 section: 'Fundamental Techniques in Handling People',
                 tagline: 'Give honest and sincere appreciation.',
                 more: 'Appreciation is one of the most powerful tools in the world. People will rarely work at their maximum potential under criticism, but honest appreciation brings out their best. Appreciation, though, is not simple flattery, it must be sincere, meaningful and with love.'
               },
               {
                 section: 'Fundamental Techniques in Handling People',
                 tagline: 'Arouse in the other person an eager want.',
                 more: 'To get what we want from another person, we must forget our own perspective and begin to see things from the point of view of others. When we can combine our desires with their wants, they become eager to work with us and we can mutually achieve our objectives.'
               },
               {
                 section: 'Six Ways to Make People Like You',
                 tagline: 'Become genuinely interested in other people.',
                 more: 'You can make more friends in two months by being interested in them, than in two years by making them interested in you. The only way to make quality, lasting friendships is to learn to be genuinely interested in them and their interests.'
               },
               {
                 section: 'Six Ways to Make People Like You',
                 tagline: 'Smile.',
                 more: 'Happiness does not depend on outside circumstances, but rather on inward attitudes. Smiles are free to give and have an amazing ability to make others feel wonderful. Smile in everything that you do.'
               },
               {
                 section: 'Six Ways to Make People Like You',
                 tagline: 'Remember that a person\'s name is, to that person, the sweetest and most important sound in any language.',
                 more: 'The average person is more interested in their own name than in all the other names in the world put together. People love their names so much that they will often donate large amounts of money just to have a building named after themselves. We can make people feel extremely valued and important by remembering their name.'
               },
               {
                 section: 'Six Ways to Make People Like You',
                 tagline: 'Be a good listener. Encourage others to talk about themselves.',
                 more: 'The easiest way to become a good conversationalist is to become a good listener. To be a good listener, we must actually care about what people have to say. Many times people don\'t want an entertaining conversation partner; they just want someone who will listen to them.'
               },
               {
                 section: 'Six Ways to Make People Like You',
                 tagline: 'Talk in terms of the other person\'s interest.',
                 more: 'The royal road to a person\'s heart is to talk about the things he or she treasures most. If we talk to people about what they are interested in, they will feel valued and value us in return.'
               },
               {
                 section: 'Six Ways to Make People Like You',
                 tagline: 'Make the other person feel important – and do it sincerely.',
                 more: 'The golden rule is to treat other people how we would like to be treated. We love to feel important and so does everyone else. People will talk to us for hours if we allow them to talk about themselves. If we can make people feel important in a sincere and appreciative way, then we will win all the friends we could ever dream of.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'The only way to get the best of an argument is to avoid it.',
                 more: 'Whenever we argue with someone, no matter if we win or lose the argument, we still lose. The other person will either feel humiliated or strengthened and will only seek to bolster their own position. We must try to avoid arguments whenever we can.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Show respect for the other person\'s opinions. Never say "You\'re wrong."',
                 more: 'We must never tell people flat out that they are wrong. It will only serve to offend them and insult their pride. No one likes to be humiliated, we must not be so blunt.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'If you\'re wrong, admit it quickly and emphatically.',
                 more: 'Whenever we are wrong we should admit it immediately. When we fight we never get enough, but by yielding we often get more than we expected. When we admit that we are wrong people trust us and begin to sympathize with our way of thinking.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Begin in a friendly way.',
                 more: '"A drop of honey can catch more flies than a gallon of gall." If we begin our interactions with others in a friendly way, people will be more receptive. Even if we are greatly upset, we must be friendly to influence people to our way of thinking.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Start with questions to which the other person will answer yes.',
                 more: 'Do not begin by emphasizing the aspects in which we and the other person differ. Begin by emphasizing and continue emphasizing the things on which we agree. People must be started in the affirmative direction and they will often follow readily. Never tell someone they are wrong, but rather lead them where we would like them to go with questions that they will answer \'yes\' to.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Let the other person do a great deal of the talking.',
                 more: 'People do not like listening to us boast, they enjoy doing the talking themselves. Let them rationalize and talk about the idea, because it will taste much sweeter to them in their own mouth.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Let the other person feel the idea is his or hers.',
                 more: 'People inherently like ideas they come to on their own better than those that are handed to them on a platter. Ideas can best be carried out by allowing others to think they arrived at it themselves.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Try honestly to see things from the other person\'s point of view.',
                 more: 'Other people may often be wrong, but we cannot condemn them. We must seek to understand them. Success in dealing with people requires a sympathetic grasp of the other person\'s viewpoint.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Be sympathetic with the other person\'s ideas and desires.',
                 more: 'People are hungering for sympathy. They want us to recognize all that they desire and feel. If we can sympathize with others, they will appreciate our side as well and will often come around to our way of thinking.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Appeal to the nobler motives.',
                 more: 'Everyone likes to be glorious in their own eyes. People believe that they do things for noble and morally upright reasons. If we can appeal to others\' noble motives we can successfully convince them to follow our ideas.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Dramatize your ideas.',
                 more: 'In this fast paced world, simply stating a truth isn\'t enough. The truth must be made vivid, interesting, and dramatic. Television has been doing it for years. Sometimes ideas are not enough and we must dramatize them.'
               },
               {
                 section: 'Twelve Ways to Win People to Your Way of Thinking',
                 tagline: 'Throw down a challenge.',
                 more: 'The thing that most motivates people is the game. Everyone desires to excel and prove their worth. If we want someone to do something, we must give them a challenge and they will often rise to meet it.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Begin with praise and honest appreciation.',
                 more: 'People will do things begrudgingly for criticism and an iron-fisted leader, but they will work wonders when they are praised and appreciated.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Call attention to people\'s mistakes indirectly.',
                 more: 'No one likes to make mistakes, especially in front of others. Scolding and blaming only serves to humiliate. If we subtly and indirectly show people mistakes, they will appreciate us and be more likely to improve.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Talk about your own mistakes before criticizing the other person.',
                 more: 'When something goes wrong, taking responsibility can help win others to your side. People do not like to shoulder all the blame and taking credit for mistakes helps to remove the sting from our critiques of others.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Ask questions instead of giving direct orders.',
                 more: 'No one likes to take orders. If we offer suggestions, rather than orders, it will boost others confidence and allow them to learn quickly from their mistakes.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Let the other person save face.',
                 more: 'Nothing diminishes the dignity of a man quite like an insult to his pride. If we don\'t condemn our employees in front of others and allow them to save face, they will be motivated to do better in the future and confident that they can.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Praise every improvement.',
                 more: 'People love to receive praise and admiration. If we truly want someone to improve at something, we must praise their every advance. "Abilities wither under criticism, they blossom under encouragement."'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Give the other person a fine reputation to live up to.',
                 more: 'If we give people a great reputation to live up to, they will desire to embody the characteristics with which we have described them. People will work with vigor and confidence if they believe they can be better.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Use encouragement. Make the fault seem easy to correct.',
                 more: 'If a desired outcome seems like a momentous task, people will give up and lose heart. But if a fault seems easy to correct, they will readily jump at the opportunity to improve. If we frame objectives as small and easy improvements, we will see dramatic increases in desire and success in our employees.'
               },
               {
                 section: 'Be a Leader: How to Change People Without Giving Offense or Arousing Resentment',
                 tagline: 'Make the other person happy about doing what you suggest.',
                 more: 'People will most often respond well when they desire to do the behavior put forth. If we want to influence people and become effective leaders, we must learn to frame our desires in terms of others\' desires.'
               }
             ];

const $section = $('.section');
const $tagline = $('.tagline');
const $more = $('.more');

const showAdvice = () => {
  $section.innerText = advice[index].section;
  $tagline.innerText = advice[index].tagline;
  $more.innerText = advice[index].more;
};

const prevAdvice = () => {
  let decrementIndex = () => {
    index--;
    if (index < 0) {
      index = advice.length-1;
    }
  }

  showAdvice();
};

const nextAdvice = () => {
  let incrementIndex = () => {
    index++;
    if (index == advice.length) {
      index = 0;
    }
  }

  showAdvice();
};



chrome.alarms.create('advice',{ when: Date.now(), periodInMinutes: daily});

chrome.alarms.onAlarm.addListener(function(a) {
  nextAdvice();
});

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

// chrome.browserAction.setBadgeText({ text: '\'Allo' });
console.log('\'Allo \'Allo! Event Page for Browser Action');
