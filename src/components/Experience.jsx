import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

import volksara from './assets/volksara.png';
import xobit from './assets/xobit.jpeg';

export default function Experience() {
  const fade = useScrollFadeIn();
  const experiences = [
    {
      companylogo: volksara,
      role: "Cloud Engineer",
      company: "Volksara Techno Solutions Pvt Ltd.",
      duration: "Jan 2026 – Present",
      points: [
        "Currently working as a QA Engineer at Omnicom, focusing on the quality assurance of digital marketing platforms and enterprise applications.",
        "Perform both manual and automated testing using tools like Selenium, Postman, JIRA, and TestNG to ensure functionality, performance, and reliability.",
        "Work in an Agile environment, collaborating with cross-functional teams to deliver high-quality releases.",
        "Experience with API testing, cross-browser testing, and regression testing across web and mobile platforms.",
        "Utilize technologies such as Python, Java, Cloud, SQL, Git, CI/CD tools (like Jenkins), and browser developer tools for debugging and validation.",
      ],
    },
    {
      companylogo: xobit,
      role: "Software Engineer",
      company: "XOBIT Technologies Pvt Ltd.",
      duration: "Nov 2024 – Nov 2025",
      points: [
        "Developed and maintained full-stack web applications using Django, ReactJS, and REST APIs for seamless user experiences.",
        "Utilized advanced Data Structures and Algorithms (DSA), including trees, graphs, dynamic programming, hashing, and complexity analysis, to design efficient solutions, optimize backend services, and improve application scalability and performance.",
        "Designed and deployed containerized microservices using Docker and Kubernetes for high availability and scalability.",
        " Implemented CI/CD pipelines using Jenkins and GitHub Actions to automate test, build, and deployment workflows.",
        "Managed AWS infrastructure (EC2, S3, IAM, CloudWatch) and leveraged Terraform for Infrastructure as Code (IaC).",
        "Integrated Ansible playbooks for server configuration and deployment automation across multiple environments.",
        "Collaborated with Agile/Scrum teams to ensure high-quality feature delivery and iterative improvements.",
        "Conducted performance optimization, code reviews, and troubleshooting in Python, NodeJS, and front-end logic.",
        "Ensured database optimization and reliability across MySQL, PostgreSQL, and SQLite instances.",
        "Monitored application performance and cost efficiency through AI monitoring and logging tools.",
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
