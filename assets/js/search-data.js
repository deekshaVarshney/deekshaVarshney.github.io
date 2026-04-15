// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-lab",
          title: "Research lab",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research_lab/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-empower-kare-deep-prompt-learning-for-knowledge-aware-response-generation-in-clinical-counseling-and-legal-support-conversations-has-been-accepted-in-ieee-transactions-on-artificial-intelligence-p-priya-a-m-tripathi-d-varshney-m-firdaus-a-ekbal-check-it-out-on-ieee-xplore",
          title: 'Our paper EMPOWER-KARE: Deep Prompt Learning for Knowledge-aware Response Generation in Clinical Counseling...',
          description: "",
          section: "News",},{id: "news-joined-as-assistant-professor-at-the-school-of-artificial-intelligence-and-data-science-saide-indian-institute-of-technology-jodhpur-iit-jodhpur-rajasthan-india",
          title: 'Joined as Assistant Professor at the School of Artificial Intelligence and Data Science...',
          description: "",
          section: "News",},{id: "news-our-paper-deriving-strategic-market-insights-with-large-language-models-a-benchmark-for-forward-counterfactual-generation-has-been-accepted-at-emnlp-2025-k-ong-r-mao-d-varshney-p-p-liang-e-cambria-g-mengaldo-check-it-out-on-emnlp",
          title: 'Our paper Deriving Strategic Market Insights with Large Language Models: A Benchmark for...',
          description: "",
          section: "News",},{id: "news-our-work-concept-based-interpretability-for-toxicity-detection-is-now-available-on-arxiv-s-garg-d-singh-d-varshney-mamta-check-it-out-on-arxiv",
          title: 'Our work Concept-Based Interpretability for Toxicity Detection is now available on arXiv. (S....',
          description: "",
          section: "News",},{id: "news-our-work-protein-secondary-structure-prediction-using-3d-graphs-and-relation-aware-message-passing-transformers-is-now-available-on-arxiv-d-varshney-s-garg-s-tyagi-d-varshney-n-deep-a-ekbal-check-it-out-on-arxiv",
          title: 'Our work Protein Secondary Structure Prediction Using 3D Graphs and Relation-Aware Message Passing...',
          description: "",
          section: "News",},{id: "news-our-paper-indic-tunedlens-interpreting-multilingual-models-in-indian-languages-has-been-accepted-at-the-13th-workshop-on-nlp-for-similar-languages-varieties-and-dialects-in-rabat-morocco-m-panchal-d-varshney-mamta-a-ekbal-check-it-out-on-acl-anthology",
          title: 'Our paper Indic-TunedLens: Interpreting Multilingual Models in Indian Languages has been accepted at...',
          description: "",
          section: "News",},{id: "pages-page-not-found",
          title: 'Page not found',
          description: "Looks like there has been a mistake. Nothing exists here.",
          section: "Pages",handler: () => {
              window.location.href = "/404.html";
            },},{id: "pages-",
          title: '',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/pages/about/";
            },},{id: "pages-bookshelf",
          title: 'bookshelf',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/books/";
            },},{id: "pages-cv",
          title: 'CV',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/cv/";
            },},{id: "pages-gallery",
          title: 'Gallery',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/gallery/";
            },},{id: "pages-news",
          title: 'news',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/news/";
            },},{id: "pages-people",
          title: 'People',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/people/";
            },},{id: "pages-projects",
          title: 'Projects',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/projects/";
            },},{id: "pages-publications",
          title: 'Publications',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/publications/";
            },},{id: "pages-repositories",
          title: 'repositories',
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Pages",handler: () => {
              window.location.href = "/repositories/";
            },},{id: "pages-research-lab",
          title: 'Research lab',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/research_lab/";
            },},{id: "pages-teaching",
          title: 'Teaching',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/Teaching/";
            },},{id: "projects-medical-reasoning",
          title: 'Medical Reasoning',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-interpretability",
          title: '⁠Interpretability',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ai-safety",
          title: 'AI safety',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-multilinguality",
          title: '⁠Multilinguality',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%65%6B%73%68%61@%69%69%74%6A.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/deekshaVarshney", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/deeksha-varshney-5922b57b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=a6T1uIUAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.iitj.ac.in/People/List?dept=school-of-artificial-intelligence-data-science&c=ce26246f-00c9-4286-bb4c-7f023b4c5460", "_blank");
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
