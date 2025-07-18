import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

import omnicom from './assets/omnicom.png';
import pearlthought from './assets/pearl.jpeg';

export default function Experience() {
  const fade = useScrollFadeIn();
  const experiences = [
    {
      companylogo: omnicom,
      role: "QA Engineer",
      company: "Omnicom Group",
      duration: "June 2025 – Present",
      points: [
        "Currently working as a QA Engineer at Omnicom, focusing on the quality assurance of digital marketing platforms and enterprise applications.",
        "Perform both manual and automated testing using tools like Selenium, Postman, JIRA, and TestNG to ensure functionality, performance, and reliability.",
        "Work in an Agile environment, collaborating with cross-functional teams to deliver high-quality releases.",
        "Experience with API testing, cross-browser testing, and regression testing across web and mobile platforms.",
        "Utilize technologies such as Python, Java, Cloud, SQL, Git, CI/CD tools (like Jenkins), and browser developer tools for debugging and validation.",
      ],
    },
    {
      companylogo: pearlthought,
      role: "DevOps Engineer",
      company: "PearlThought Solutions Pvt Ltd.",
      duration: "June 2024 – June 2025",
      points: [
        "Worked as a DevOps Engineer at PearlThought Technologies, supporting the automation and optimization of CI/CD pipelines across multiple projects.",
        "Managed cloud infrastructure AWS and deployment environments, ensuring scalability, availability, and security.",
        "Implemented Infrastructure as Code (IaC) using tools like Terraform and Ansible, enabling consistent and repeatable environments.",
        "Collaborated with development and QA teams to streamline release processes using tools like Jenkins, Docker, Kubernetes, and Git.",
        "Monitored application performance and system health using Prometheus, Grafana, and ELK stack, contributing to faster issue resolution and system stability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl text-center font-bold mb-6">Experience</h2>
      <div className="grid md:grid-cols-1 gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="glass-card rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur"
          >
            <div className="flex items-center gap-4 mb-2">
              {exp.companylogo && (
                <img
                  src={exp.companylogo}
                  alt={`${exp.role} logo`}
                  className="w-12 h-12 object-contain rounded"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
