import React, { useState } from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Projects() {
  const fade = useScrollFadeIn();
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "College ERP System",
      github: "https://github.com/KiranKumarMalik/College-ERP",
      details: [
        "A full-stack web-based College Management System designed to digitize and streamline academic and administrative workflows across institutions. The ERP provides role-based dashboards for Admins, Teachers, and Students, and supports real-time data visualization, communication, and academic tracking.",
        "Separate dashboards and access controls for Admin, Teacher, and Student roles.",
        "Dynamic dashboard with data visualization for student/staff performance.",
        "Full CRUD operations for Students, Teachers, Courses, Subjects, Sessions.",
        "Attendance and leave management with approval workflows.",
        "Subject-wise performance insights and attendance management.",
        "Manage exam results, leave requests, and feedback submissions.",
        "Dashboard displaying real-time attendance and academic data.",
        "Configured email notifications for password resets and alerts using SMTP (Gmail server setup with Django).",
      ],
      techStack: [
        { name: "HTML5", logo: "/logos/html5.svg" },
        { name: "CSS3", logo: "/logos/css3.svg" },
        { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "Django", logo: "/logos/django.svg" },
        { name: "SQLite3", logo: "/logos/sqlite.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "SMTP", logo: "/logos/smtp.svg" },
      ]
    },
    {
      title: "Doctor Appointment Management System",
      github: "https://github.com/KiranKumarMalik/Doctor-Appointment-System-using-Django-and-gmail-SMTP",
      details: [
        "Developed a full-featured Django-based web application for managing doctor-patient appointments at Kenyatta University Health Centre (KUHC).",
        "Implemented user registration for Students, Staff, Doctors, and Admins with dynamic roles and permissions.",
        "Enabled patients to book, cancel, and view appointment statuses (Scheduled, Completed, Failed, etc.) while doctors and admins could manage appointments accordingly.",
        "Integrated PayStack API for electronic payments using M-Pesa and Visa with secure verification for scheduling appointments.",
        "Configured SMTP email notifications to alert users on events such as booking, cancelation, and payment confirmation.",
        "Added OTP-based login for Doctors/Admins to strengthen security with time-sensitive 6-digit verification codes.",
        "Designed admin features like user activity logging, account activation/deactivation, and report generation for appointments and payments.",
        "Included partial implementation of Next-of-Kin linking, data analytics dashboards, and downloadable reports for all users.",
      ],
      techStack: [
        // HTML5, CSS3, Bootstrap, Javascript, Django, SQLite3, Python, PayStack Payment Gateway
        { name: "HTML5", logo: "/logos/html5.svg" },
        { name: "CSS3", logo: "/logos/css3.svg" },
        { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "Django", logo: "/logos/django.svg" },
        { name: "SQLite3", logo: "/logos/sqlite.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "PayStack", logo: "/logos/paystack.svg" },
        { name: "SMTP", logo: "/logos/smtp.svg" },
        
      ]
    },
    {
      title: "Face Recognition with AWS Rekognition",
      youtube: "https://www.youtube.com/watch?v=3Nj-2mLAb7s",
      github: "https://github.com/KiranKumarMalik/Facial-Recognition-App-using-AWS-rekognition-and-Python",
      details: [
        "A cloud-based face recognition system leveraging Amazon Rekognition to detect, analyze, and compare human faces for authentication and identification purposes.",
        "Image Upload & Processing: Users can upload images via a web interface for face detection and matching.",
        "Uses Lambda for serverless computing and S3 for scalable storage.",
        "Face Comparison: Matches input images against a stored face collection to verify identity.",
        "AWS Rekognition Integration: Utilizes Rekognition APIs for face indexing, search, and comparison.",
        "Real-Time Feedback: Displays matching confidence scores and identified user details.",
        "Security & Privacy: Handles image data securely using AWS SDK and IAM roles.",
      ],
      techStack: [
        { name: "Python", logo: "/logos/python.svg" },
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "AWS DynamoDB", logo: "/logos/dynamodb.svg" },
        { name: "AWS Lambda", logo: "/logos/lambda.svg" },
        { name: "AWS SDK", logo: "/logos/sdk.svg" },
        { name: "AWS S3", logo: "/logos/s3.svg" },
        { name: "AWS IAM", logo: "/logos/iam.svg" },
        { name: "AWS Rekognition", logo: "/logos/rekognition.svg" },
      ]
    },

    {
      title: "JioHotstar Application using Django",
      github: "https://github.com/KiranKumarMalik/Jiohotstar-Application-using-Django",
      details: [
        "Problem: Web app deployments were error-prone and environment-dependent.",
        "Action: Dockerized the game and deployed using AWS Elastic Beanstalk, enabling rapid, scalable hosting with container-based architecture.",
        "Configured Docker images and automated environment provisioning for seamless CI/CD integration.",
        "Result: Achieved 40% faster deployments, reduced manual provisioning by 50%, and maintained 99.8% uptime.",
      ],
      // Docker, AWS, YAML
      techStack: [
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "AWS EC2", logo: "/logos/ec2.svg" },
        { name: "AWS", logo: "/logos/aws.svg" },
        { name: "YAML", logo: "/logos/yaml.svg" },
      ]
    },

    {
      title: "Build Alexa Personal Assistant",
      youtube: "https://www.youtube.com/watch?v=5Ljesb4KJ-A",
      github: "https://github.com/KiranKumarMalik/Build-Alexa-Personal-Assistant-",
      details: [
        "A Python-based virtual assistant inspired by Amazon Alexa, designed to understand voice commands and perform a wide range of tasks using speech recognition and automation libraries.",
        "Voice Recognition: Converts speech to text using SpeechRecognition and processes it in real-time.",
        "Text-to-Speech: Responds verbally using pyttsx3, making interactions seamless and conversational.",
        "Task Automation: Search Wikipedia, open websites, play music, and tell the time, Send emails, open applications, fetch weather, and more.",
        "Wake Word Activation: Listens for a custom wake word to initiate interactions.",
        "Modular Command Handling: Easily extendable architecture to add more voice commands.",
        "Libraries: SpeechRecognition, pyttsx3, wikipedia, ecapture, wolframalpha, PyAudio, beautifulsoup4, pyperclip, pyshorteners, PyAutoGUI, Pillow, qrcode, speedtest-cli, librosa , smtplib, datetime, os, webbrowser",
      ],
      techStack: [
        { name: "Python", logo: "/logos/python.svg" },
        { name: "Python Libraries", logo: "/logos/libraries.png" },
      ]
    },

    {
        title: "Linux Server setup and configuration",
        // live: "https://madycloud-md.github.io/Book-Review-System/",
        github: "https://github.com/KiranKumarMalik/Linux-Server-Setup-Configuration",
        details: [
          "Problem: Traditional book recommendation platforms often lack community engagement, scalability, and personalized insights.",
          "Action:",
          "Designed and developed a cloud-based book review system enabling users to register, browse books, post ratings, and write detailed reviews.",
          "Built a searchable book database with review threads, allowing users to connect and share literary opinions in a centralized platform.",
          "Integrated user authentication and profile management using Firebase for secure, cloud-based account handling.",
          "Implemented social sharing features and interactive UI to foster community discussion and book recommendations.",
          "Deployed the application on GitHub Pages and utilized cloud storage for data handling, ensuring 24/7 availability and scalability.",
          "Result: Improved reader decision-making and increased engagement by creating a virtual space for 100+ early users to review, rate, and discuss books. System supports real-time feedback, helping authors gain exposure and readers build trusted recommendations."
        ],
        techStack: [
          { name: "Firebase", logo: "/logos/firebase.svg" },
          { name: "AWS", logo: "/logos/aws.svg" },
          { name: "GitHub Pages", logo: "/logos/github.svg" },
          { name: "Linux", logo: "/logos/linux.svg" },
        ]
      }
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   return (
    <section id="projects" className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div {...fade} className="space-y-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white/70 dark:bg-white/10 backdrop-blur p-4 transition-all"
          >
            {/* Title and toggle */}
            <button
              onClick={() => toggleIndex(i)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-primary hover:underline"
            >
              {proj.title}
              {openIndex === i ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </button>

            {/* Opened description */}
            {openIndex === i && (
              <>
                <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300">
                  {proj.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

                {/* Tech Stack Logos */}
                {proj.techStack && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {proj.techStack.map((tech, k) => (
                      <div key={k} className="flex flex-col items-center text-center w-16">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-10 h-10 object-contain"
                          title={tech.name}
                        />
                        <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                {(proj.live || proj.youtube || proj.github) && (
                  <div className="mt-6 flex gap-4 flex-wrap">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full 
                                  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium 
                                  shadow hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src="/logos/live.svg"
                          alt="Live"
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        Live Demo
                      </a>
                    )}

                    {proj.youtube && (
                      <a
                        href={proj.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full 
                                  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium 
                                  shadow hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src="/logos/youtube.svg"
                          alt="YouTube"
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        YouTube
                      </a>
                    )}
                    

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-gray-900 text-white font-medium shadow hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
                      >
                        <img
                          src="/logos/github2.svg"
                          alt="GitHub"
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}