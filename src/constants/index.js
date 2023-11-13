import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    micro,
    tlp,
    bylight,
    thread,
    azure,
    vmware,
    terra,
    proxmox,
    lambda,
    apod,
    playcast,
    kwikheim,
    greenportal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "System Administrator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Microsoft Azure",
      icon: azure,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "vmWare ESXI",
      icon: vmware,
    },
    {
      name: "Proxmox",
      icon: proxmox,
    },
    {
      name: "Terraform",
      icon: terra,
    },
    {
      name: "AWS",
      icon: lambda,
    },
    
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "Integral Thread",
      icon: thread,
      iconBg: "#383E56",
      date: " July 2018 - December 2018",
      points: [
        "Worked in the backend api that provided tools for possible vulnerabilities across the stack",
        "Managed Garbage data collection pipeline",
      ],
    },
    {
      title: "System Administrator",
      company_name: "Alien Technologies",
      icon: tlp,
      iconBg: "#E6DEDD",
      date: "August 2020 – March 2021",
      points: [
        "Managed Company Wide Infrastructure (servers, phones, time clock)",
        "Deployed new workstations for employees",
        "Managed Network Security/Integrity",
      ],
    },
    {
      title: "NOC Support",
      company_name: "Florida High-Speed Internet",
      icon: micro,
      iconBg: "#383E56",
      date: "August 2021 - June 2022",
      points: [
        "Confidently configured, managed, and deployed virtual machines/physical machines utilizing an understanding of project management resulting in smooth launches (Ubuntu Server, Gitlab, Debian)",
        "Quickly integrated the DocuSign api into the NOC ticketing/accounting portal, increasing functionality of the current toolset.",
        "Assisted in County wide rollout of internet, phone, & fax using an array of solutions ranging from Fiber, 5ghz point to point radios, POTS.",
        "Petitioned, revived, deployed, and actively administered new UISP sensor suite for network planning and profitability tracking. Used to consolidate new and pre-existing installs and increase data for troubleshooting.",
        "Monitored and administered state wide network (3000+ sensors), troubleshooting a vast range of devices from 5ghz point-to-point radios, cisco/mikrotik switches, to routers, voip phones, analog telephone adaptors (ATA’s), and fax machines.",
      ],
    },
    {
      title: "System Administrator",
      company_name: "Bylight IT Solutions LLC",
      icon: bylight,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "Maintained and administered computer networks and related computing environments including computer hardware, systems software, applications software, and all configurations.",
        "Used open source network monitoring solutions like Zabbix, to monitor system critical data points.",
        "Installed, configured, and tested operating systems, server-based and workstation software applications. (VMWare ESXI, VMWare vCenter/vSphere, Cisco IOS, Windows Server 2019)",
        "Developed documentation and procedures for the effective use of server-based and workstation software applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Photo of the Day",
      description:
        "A tool to help navigate the nasa APOD api",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "nasa_api",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: apod,
      web_link: "https://affectionate-kilby-98e840.netlify.app/",
      source_code_link: "https://github.com/Mcguffinn/Photo-of-the-day-",
    },
    {
      name: "Playcast",
      description:
        "Playcast is your go-to music companion for staying in tune with the weather. With Playcast, you can get a personalized and recommended weather playlist forecast based on your current location.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "spotify_api",
          color: "green-text-gradient",
        },
        {
          name: "tomorrow_api",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "jinja2",
          color: "pink-text-gradient",
        },
      ],
      image: playcast,
      web_link: "mcguffinn.pythonanywhere.com/",
      source_code_link: "https://github.com/Mcguffinn/Playcast",
    },
    {
      name: "MyGreenPortal",
      description:
        "A fully custom designed, drafted, & deployed dashboard created for my local manicupality",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: greenportal,
      web_link: "http://mygreenportal.com/",
      source_code_link: "https://mygreenportal.com",
    },
    {
      name: "Kwikheim",
      description:
        "A fun case study in using 3d objects in the browser and a fun landing page for a game server",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "steampowered_api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: kwikheim,
      web_link: "https://dancing-sopapillas-e16321.netlify.app/",
      source_code_link: "https://github.com/Mcguffinn/Kwikheim",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };