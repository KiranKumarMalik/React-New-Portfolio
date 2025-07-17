import React from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

export default function Certifications() {
  const fade = useScrollFadeIn();
  const certs = [
    {
      name: "AWS Certified: Cloud Practitioner Foundational",
      logo: "/certified_logos/awscp.jpg",
      url: "https://www.credly.com/badges/827885ff-09b4-475f-8536-1af22d3fa8a3/linked_in_profile",
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      logo: "/certified_logos/awssolution.jpg",
      url: "https://www.credly.com/badges/6144acf0-4472-4e34-b9ec-c83a38e6bf8d/linked_in_profile",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      logo: "/certified_logos/azure_fund.png",
      url: "https://www.credly.com/badges/54545019-04cb-4d12-a445-be049b690ba3/linked_in_profile",
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      logo: "/certified_logos/ai_fund.png",
      url: "https://www.credly.com/badges/ff45cf38-6328-4f00-a5e7-e60a8a5c6086/linked_in_profile",
    },
    {
      name: "AWS Certified Cloud Practitioner (in-progress)",
      logo: "/certified_logos/salesforce_admin.png",
      url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    },
  ];

  return (
    <section id="certifications" className="py-20 scroll-mt-24" >
      <h2 className="text-3xl font-bold mb-10 text-center">Certifications and Courses</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center" >
        {certs.map((cert, i) => (
          <a
            key={i}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition bg-white/80 dark:bg-white/10 backdrop-blur max-w-sm"
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-snug">
              {cert.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
