import React from 'react';
import { PageProps } from 'gatsby';

import Seo from '../components/Seo';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/Layout/PageHeader';

const NowPage: React.FC<PageProps<{}>> = () => {
  const title = 'Now';
  const postTitle = ' as in <a href="https://nownownow.com/about" rel="external">nownownow</a>';
  const header = <PageHeader title={title} postTitle={postTitle} />;

  return (
    <Wrapper header={header}>
      <Seo title={`${title} | Jon Deaves as a point in time`} />

      <p>This is me within a point in time, as best I can summarise myself.</p>

      <article>
        <h2>Me time</h2>
        <ul>
          <li>
            I live in Glasgow, Scotland with my <small>[very]</small> significant other, our dog{' '}
            <small>(a Pomeranian)</small>, rabbit, 3 fish and hamster.
          </li>
          <li>
            I bought my first ever comic book,{' '}
            <a href="https://www.dccomics.com/comics/batman-2016/batman-95" rel="external">Batman #95</a>. I chose this
            one because I've been playing the Arkham games lately and always wanted to see if I would enjoy comics as much
            as I do the TV/Movies inspired by them.
          </li>
          <li>Skating in the form of Roller disco, Roller derby and Aggressive inline park skating.</li>
        </ul>

        <h3>Goals</h3>
        <p>
          Further down this page, you'll come across a few pursuits/goals I have for my work and educational areas. Many
          of these are to support the main goal in life right now.
        </p>

        <ul>
          <li><b>Move to Canada</b> - The driver for much of what I do.</li>
          <li>Learn to drive (Currently studying for theory test).</li>
          <li>
            Sort out a better daily routine. Ideally; early wake-up, a nice morning walk, work, lunch-time fitness and
            chilled evenings.
          </li>
        </ul>
      </article>

      <article>
        <h2>Self-improvement</h2>
        <p>Or more specifically, educational learning pursuits.</p>

        <ul>
          <li>
            Studying the <a href="https://cs50.harvard.edu/" rel="external">Harvard online Computer Science course</a>{' '}
            <small>(CS50)</small>
          </li>
          <li>
            Preparing to enrol in <a href="http://www.open.ac.uk/" rel="external">The Open University</a> with credit{' '}
            transfer from an unfinished degree I undertook over a decade ago.
          </li>
        </ul>
      </article>

      <article>
        <h2>Coding time</h2>
        <ul>
          <li>
            I've been a Software Engineer at <a href="https://www.fanduel.com/" rel="external">FanDuel</a> for
            just over 2 years. I was promoted to Senior at the beginning of this year.
          </li>
          <li>
            I mostly work in React and I build a lot of random sites using{' '}
            <a href="https://www.gatsbyjs.org/" rel="external">Gatsby</a>.
          </li>
          <li>
            I build small experimental apps in <a href="https://flutter.dev/" rel="external">Flutter</a>{' '}
            <small>(coincidentally FanDuel's parent company is also called Flutter)</small>.
          </li>
          <li>I build and manage a lightweight storage system for my friend's Games that I've codenamed Morpus.</li>
          <li>
            My main side project is called Pongstars, it's a native app for managing Table Tennis leagues{' '}
            <small>(we play a lot at work)</small>.
          </li>
        </ul>

        <h3>Goals</h3>

        <ul>
          <li>Become more focused and organised.</li>
          <li>Get back to full-stack development.</li>
          <li>Contribute to some open-source software.</li>
          <li>Build my partner a portfolio website.</li>
        </ul>
      </article>

      <article>
        <h2 id="fitness">Fitness</h2>
        <p>
          <a href="http://www.centralstrengthgym.com/" rel="external">The gym</a> is the only reason I manage to hold
          back the blubber that was my body. I used to be nearly 108kg <small>(17st, 237 pounds)</small> and
          then I took the gym, and my diet, more serious and managed to drop 25kg. Now that I'm in lockdown it's all
          unravelling.
        </p>
        <ul>
          <li>When not in lockdown I went to the gym every weekday on my lunch break (usually around 2 hours).</li>
          <li>
            I also attend training for{' '}
            <a href="https://en.wikipedia.org/wiki/Roller_derby" rel="external">Roller Derby</a>. I'm not very good and
            I haven't played a proper game yet, and may never as I came to realise I am not at all competitive and I
            just like the training.
          </li>
        </ul>

        <h3>Goals</h3>
        <ul>
          <li>
            As of August 3rd, 2020 I will be attempting to go full <a href="https://huel.com" rel="external">Huel</a> for
            a whole month.
          </li>
          <li>Start cycling again, I've had a punctured tyre since the week we went into lockdown.</li>
          <li>Start lifting again</li>
          <li>Start HIIT again</li>
        </ul>
      </article>

      <p><i><small>This page was last updated on 27th July 2020.</small></i></p>
    </Wrapper>
  )
};

export default NowPage;