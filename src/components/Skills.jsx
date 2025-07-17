import React, { useState } from 'react';
import useScrollFadeIn from '../utils/useScrollFadeIn';

const categories = ["All", "Programming", "DevOps", "Web Development", "Databases", "Libraries", "Tools & Platforms"];

const skillGroups = [
  {
    category: "Programming",
    title: "Programming Languages",
    items: [
      { label: "Python", logo: "/logos/python.svg" },
      { label: "Java", logo: "/logos/java.svg" },
      { label: "Javascript", logo: "/logos/javascript.svg" },
    ],
  },
  {
    category: "DevOps",
    title: "DevOps & Cloud",
    items: [
      { label: "AWS", logo: "/logos/aws.svg" },
      { label: "Azure", logo: "/logos/azure.svg" },
      { label: "Google Cloud", logo: "/logos/google-cloud.svg" },
      { label: "Docker", logo: "/logos/docker.svg" },
      { label: "Kubernetes", logo: "/logos/kubernetes.svg" },
      { label: "Terraform", logo: "/logos/terraform.svg" },
      { label: "Jenkins", logo: "/logos/jenkins.svg" },
      { label: "GitLab", logo: "/logos/gitlab.svg" },
      // { label: "ArgoCD", logo: "/logos/argocd.svg" },
      // { label: "Prometheus", logo: "/logos/prometheus.svg" },
      { label: "Grafana", logo: "/logos/grafana.svg" },
      // { label: "Helm", logo: "/logos/helm.svg" },
      { label: "Ansible", logo: "/logos/ansible.svg" },
      { label: "Nginx", logo: "/logos/nginx.svg" },
      { label: "Apache", logo: "/logos/apache.svg" },

    ],
  },
  {
    category: "Web Development",
    title: "Web Development",
    items: [
      { label: "HTML", logo: "/logos/html5.svg" },
      { label: "CSS", logo: "/logos/css3.svg" },
      { label: "Bootstrap", logo: "/logos/bootstrap.svg" },
      { label: "Javascript", logo: "/logos/javascript.svg" },
      { label: "Django", logo: "/logos/django.svg" },
      { label: "ReactJS", logo: "/logos/react.svg" },
      { label: "Flask", logo: "/logos/flask.svg" },
    ],
  },
  {
    category: "Databases",
    title: "Databases",
    items: [
      { label: "MySQL", logo: "/logos/mysql.svg" },
      { label: "Oracle SQL", logo: "/logos/oracle.svg" },
      { label: "PostgresSQL", logo: "/logos/postgressql.svg" },
      { label: "SQLite3", logo: "/logos/sqlite.svg" },
      { label: "Amazon RDS", logo: "/logos/rds.svg" },
      { label: "Amazon DynamoDB", logo: "/logos/dynamodb.svg" },

      
    ],
  },
  {
    category: "Libraries",
    title: "Libraries",
    items: [
      { label: "Numpy", logo: "/logos/numpy.svg" },
      { label: "Pandas", logo: "/logos/pandas.svg" },
      { label: "Matplotlib", logo: "/logos/matplotlib.svg" },
      { label: "Plotly", logo: "/logos/plotly.svg" },
      { label: "OpenCV", logo: "/logos/opencv.svg" },
      { label: "Tensorflow", logo: "/logos/tensorflow.svg" },
      { label: "Seaborn", logo: "/logos/seaborn.svg" },
      { label: "Pytest", logo: "/logos/pytest.svg" },
      { label: "Pytorch", logo: "/logos/pytorch.svg" },
      { label: "Pyjokes", logo: "/logos/seaborn.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    title: "Tools & Platforms",
    items: [
      { label: "Git", logo: "/logos/git.svg" },
      { label: "GitHub", logo: "/logos/github.svg" },
      { label: "Vim", logo: "/logos/vim.svg" },
      { label: "Nano", logo: "/logos/nano.svg" },
      { label: "Putty", logo: "/logos/putty.svg" },
      { label: "Visual Studio Code", logo: "/logos/visual-studio-code.svg" },
      { label: "Jira", logo: "/logos/jira.svg" },
      { label: "Selenium", logo: "/logos/selenium.svg" },
      { label: "Powershell", logo: "/logos/powershell.svg" },
      { label: "Linux", logo: "/logos/linux.svg" },
      { label: "Unix", logo: "/logos/unix.svg" },
      { label: "Debian", logo: "/logos/debian.svg" },
      { label: "RedHat", logo: "/logos/red-hat.svg" },
      { label: "Windows", logo: "/logos/windows-11.svg" },
    ],
  },
];

export default function Skills() {
  const fade = useScrollFadeIn();
  const [filter, setFilter] = useState("All");

  const filteredGroups =
    filter === "All"
      ? skillGroups
      : skillGroups.filter((group) => group.category === filter);

  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills & Technologies</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border ${
              filter === cat
                ? "bg-primary text-black"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            } transition hover:scale-105`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div {...fade} className="space-y-10">
        {filteredGroups.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-300 dark:border-gray-600">
              {group.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
              {group.items.map(({ logo, label }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group hover:scale-110 transition-transform duration-200 relative"
                >
                  <img
                    src={logo}
                    alt={label}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-md whitespace-nowrap z-10">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
