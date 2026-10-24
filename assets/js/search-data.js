// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order. An up-to-date list is also available on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "service",
          description: "Professional service to the research community.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Click the PDF icon to download the full CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching activities at Politecnico di Milano.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-started-my-visit-at-mit-as-a-visiting-ph-d-student-in-the-commit-group-led-by-prof-saman-amarasinghe",
          title: 'Started my visit at MIT as a visiting Ph.D. student in the COMMIT...',
          description: "",
          section: "News",},{id: "news-presented-alveare-a-domain-specific-framework-for-regular-expressions-at-the-61st-acm-ieee-design-automation-conference-dac-2024-in-san-francisco-the-paper-later-received-the-hipeac-paper-award",
          title: 'Presented ALVEARE: a Domain-Specific Framework for Regular Expressions at the 61st ACM/IEEE Design...',
          description: "",
          section: "News",},{id: "news-i-completed-my-ph-d-in-information-technology-at-politecnico-di-milano-thesis-exploiting-hardware-and-software-specialization-for-efficient-regular-expressions-processing",
          title: 'I completed my Ph.D. in Information Technology at Politecnico di Milano! Thesis: Exploiting...',
          description: "",
          section: "News",},{id: "news-joined-cnit-as-a-postdoctoral-researcher-in-the-antlab-networks-and-systems-group-at-politecnico-di-milano-supervised-by-prof-gianni-antichi-working-on-smartnic-dpu-offloading-for-network-security",
          title: 'Joined CNIT as a Postdoctoral Researcher in the ANTLab Networks and Systems group...',
          description: "",
          section: "News",},{id: "news-the-paper-combining-mlir-dialects-with-domain-specific-architecture-for-efficient-regular-expression-matching-appeared-at-cgo-2025",
          title: 'The paper Combining MLIR Dialects with Domain-Specific Architecture for Efficient Regular Expression Matching...',
          description: "",
          section: "News",},{id: "news-the-paper-design-principles-for-accelerated-programmable-edge-computing-in-future-6g-architectures-appeared-at-ieee-nfv-sdn-2025",
          title: 'The paper Design Principles for Accelerated Programmable Edge Computing in Future 6G Architectures...',
          description: "",
          section: "News",},{id: "news-my-ph-d-thesis-received-the-ieee-computer-society-italy-chapter-phd-thesis-award-2025-edition-i-presented-it-in-the-award-webinar-exploiting-hardware-and-software-specialization-for-efficient-regular-expressions-processing",
          title: 'My Ph.D. thesis received the IEEE Computer Society Italy Chapter PhD Thesis Award...',
          description: "",
          section: "News",},{id: "news-received-the-distinguished-artifact-evaluator-award-at-acm-eurosys-2026-in-edinburgh",
          title: 'Received the Distinguished Artifact Evaluator Award at ACM EuroSys 2026 in Edinburgh.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%69%6C%69%70%70%6F.%63%61%72%6C%6F%6E%69@%70%6F%6C%69%6D%69.%69%74", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7084-7184", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NeORMbQAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FilippoCarloni", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/filippo-carloni", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
