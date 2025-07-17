import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

import centurion from './assets/cutm.jpeg';
import khaira from './assets/khaira.jpg';
import hhems from './assets/hhmes.png';

export default function Education() {
  const fade = useScrollFadeIn();

  const education = [
    {
      collegelogo: centurion,
      degree: "Bachelor of Technology in Computer Science and Engineering [ B. Tech CSE ]",
      institution: "Centurion University of Technology and Management, Bhubaneswar, Odisha.",
      score: "CGPA: 9.53",
      year: "2020 - 2024"
    },
    {
      collegelogo: khaira,
      degree: "Class XII in Science [ CHSE ]",
      institution: "Khaira Higher Secondary School, Balasore, Odisha.",
      score: "47.7 %",
      year: "2018 - 2020"
    },
    {
      collegelogo: hhems,
      degree: "Class X [ ICSE ]",
      institution: "Happy Home English Medium School, Bhadrak, Odisha",
      score: "47.7 %",
      year: "2018"
    }
  ];

  return (
    <section id="education" className="py-12 scroll-mt-20" {...fade}>
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-7">
        {education.map((item, i) => (
          <div
            key={i}
            className="glass-card p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur flex items-center gap-4"
          >
            <img
              src={item.collegelogo}
              alt={`${item.institution} logo`}
              className="w-12 h-12 object-contain rounded"
            />
            <div>
              <h3 className="text-lg font-semibold text-primary">{item.degree}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.institution}</p>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.score}
              </p> */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
