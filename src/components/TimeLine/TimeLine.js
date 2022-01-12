import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';



const Timeline = () => {

  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <br /><br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am Electronics And Telecommunication graduate Engineer with a passion of
        developing scalable web application and working across the full stack. I
        have designed the clone of some of the websites using Node.js,
        Javascript, HTML, CSS and Mongodb. Curious to learn and apply my skills
        on a large scale.
      </SectionText>

    </Section>
  );
};

export default Timeline;
