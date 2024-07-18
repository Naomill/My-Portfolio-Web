'use client';

import { useState, useEffect } from "react";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

export default function Home() {
  const [sectionIds, setSectionIds] = useState([]);
  const [sideBarItems, setSideBarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState();

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent;
    const obj = { title: elementTitle, sectionId: elementId };
    setSideBarItems((prev) => {
      if (prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  }

  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      // console.log('scrool', el)

      const elOffsetTop = document.getElementById(el).getClientRects()[0].y;
      const height = document.getElementById(el).getClientRects()[0].height;
      const viewHeight = window.innerHeight*0.3;

      if (elOffsetTop <= 0) {
        if ((elOffsetTop + height) > viewHeight) {
        setCurrentSection(el)
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSection(el)
      }
    }
  }

  useEffect(() => {
    if (sideBarItems.length > 0) {
      // console.log(sectionIds[0]);
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [sectionIds]);

  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection sideBarItems={sideBarItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  );
}
