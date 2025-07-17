import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

import pyspider from './assets/pyspider.jpg';
import usrya from './assets/usrya.jpeg';

export default function Training() {
  const fade = useScrollFadeIn();
  const trainings = [
    {
      companylogo: pyspider,
      role: "Python Full Stack Development with AWS DevOps",
      company: "Pyspider Training and Development Center",
      duration: "July 2024 – May 2025",
      points: [
        "Completed comprehensive training in Python-full stack with hands-on experience in Django framework, ORM Concept, SQLite, PostgreSQL, MongoDB.",
        "Built a project to analyze and visualize sales data using Pandas and Matplotlib.",
        "Gained proficiency in SQL for querying and managing relational databases, including complex joins and performance optimization.",
        "Designed a relational database schema for a mock e-commerce system and implemented advanced queries to analyze customer behavior.",
        "Completed hands-on training in DevOps tools and methodologies, including CI/CD pipelines, Docker, and Kubernetes.",
        "Built and deployed a containerized web application using Docker and orchestrated it with Kubernetes.",
      ],
    },
    {
      companylogo: usrya,
      role: "AWS Solution Architect",
      company: "Usrya Artivision Pvt. Ltd.",
      duration: "July 2023 – Dec 2023",
      points: [
        "Gained in-depth knowledge of AWS cloud computing services, including EC2, S3, RDS, Lambda, IAM, VPC, and other core services.",
        "Designed, deployed, and managed highly available, fault-tolerant, and scalable AWS solutions tailored to real-world use cases.",
        "Applied AWS Well-Architected Framework principles to optimize security, performance, reliability, and cost efficiency in cloud architectures.",
        "Developed hands-on expertise in cloud infrastructure provisioning, monitoring, and automation using AWS Management Console and AWS CLI.",
        "Implemented IAM roles and policies to enforce security best practices, ensuring controlled access and compliance.",
        "Configured and optimized AWS monitoring tools (CloudWatch, CloudTrail) to track system performance and security events."
      ],
    },
  ];

  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl text-center font-bold mb-6">Training and Internships</h2>
      <div className="grid md:grid-cols-1 gap-6">
        {trainings.map((trn, idx) => (
          <div
            key={idx}
            className="glass-card rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-white/10 backdrop-blur"
          >
            <div className="flex items-center gap-4 mb-2">
              {trn.companylogo && (
                <img
                  src={trn.companylogo}
                  alt={`${trn.role} logo`}
                  className="w-12 h-12 object-contain rounded"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-primary">{trn.role}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{trn.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{trn.duration}</p>
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-200">
              {trn.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
