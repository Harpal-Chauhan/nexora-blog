"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    topics: "Topics",
    about: "About",
    search: "Search",
    explore: "Explore",
    latestStories: "Latest stories",
    readArticle: "Read article",
    featuredStory: "Featured Story",
    featured: "Featured",
    exploreArticle: "Explore article",
    modernTech: "Modern Tech Intelligence",

    title: "Discover",
    title2: "what's next.",
    subtitle: "Ideas, technology and digital trends shaping the future.",

    exploreStories: "Explore stories",
    noImage: "No image",
    noStories: "More stories coming soon.",
    browseByCategory: "Browse by category",
    topicsComingSoon: "Topics coming soon.",

    categories: {
      AI: "AI",
      Programming: "Programming",
      "Web Development": "Web Development",
      "Future Tech": "Future Tech",
      Internet: "Internet",
      Sports: "Sports",
      Trending: "Trending",
    },

    footerDescription:
      "Modern technology, digital ideas and emerging trends shaping the world of tomorrow.",

    footerIdentity:
      "A modern space for discovering what's next in technology and the digital world.",

    allRightsReserved: "All rights reserved.",
    builtForFuture: "Built for the future.",

    aboutPage: {
      label: "About NEXORA",
      heroTitle1: "Technology,",
      heroTitle2: "without the noise.",
      heroDescription:
        "NEXORA is a modern technology publication focused on the ideas, products and digital trends shaping what comes next.",
      modernTech: "Modern Tech Intelligence",

      perspective: "Our perspective",
      perspectiveTitle: "Clear ideas for a fast-moving digital world.",
      paragraph1:
        "Technology changes quickly. New frameworks, AI systems, platforms and digital products appear every day.",
      paragraph2:
        "NEXORA brings these developments together in a simple, readable format so readers can understand what is changing and why it matters.",
      paragraph3:
        "From AI and programming to the internet and future technology, our goal is to make complex topics easier to explore.",

      whatWeCover: "What we cover",
      exploreTopics: "Explore our topics.",
      topicsDescription: "From today's technology to tomorrow's possibilities.",

      topics: {
        AI: {
          title: "AI",
          description:
            "Artificial intelligence, intelligent systems and the technologies changing how we work.",
        },
        webDevelopment: {
          title: "Web Development",
          description:
            "Modern frameworks, websites and digital experiences built for the web.",
        },
        programming: {
          title: "Programming",
          description:
            "Development tools, coding practices, workflows and ideas for modern developers.",
        },
        futureTech: {
          title: "Future Tech",
          description:
            "Emerging technologies and digital ideas that could shape the years ahead.",
        },
      },

      quote:
        "“The future belongs to people who understand technology, not just people who use it.”",

      exploreNexora: "Explore NEXORA",
      discoverNext: "Discover what's next.",
      ctaDescription:
        "Explore the latest ideas, technologies and digital trends.",
      exploreArticles: "Explore articles",
    },

    searchPage: {
      label: "Search",
      title: "Find something",
      titleHighlight: "interesting.",
      description:
        "Search through NEXORA's collection of technology, programming, AI and digital stories.",
      placeholder: "Search articles...",
      hint: "Try searching for AI, React, JavaScript, web development...",
      results: "Search results",
      searching: "Searching...",
      article: "article",
      articles: "articles",
      found: "found",
      resultsFor: "Results for",
      startExploring: "Start exploring",
      startDescription:
        "Enter a keyword above to discover stories from the NEXORA technology archive.",
      readArticle: "Read article",
      noResults: "No articles found",
      noResultsDescription: "We couldn't find anything matching",
      clearSearch: "Clear search",
    },
  },

  gu: {
    home: "હોમ",
    topics: "વિષયો",
    about: "અમારા વિશે",
    search: "શોધ",
    explore: "એક્સપ્લોર",
    latestStories: "નવીનતમ લેખો",
    readArticle: "લેખ વાંચો",
    featuredStory: "મુખ્ય લેખ",
    featured: "મુખ્ય",
    exploreArticle: "લેખ વાંચો",
    modernTech: "આધુનિક ટેક ઇન્ટેલિજન્સ",

    title: "આગળ શું",
    title2: "છે તે શોધો.",
    subtitle: "ભવિષ્યને આકાર આપતા વિચારો, ટેકનોલોજી અને ડિજિટલ ટ્રેન્ડ્સ.",

    exploreStories: "લેખો જુઓ",
    noImage: "ઈમેજ નથી",
    noStories: "વધુ લેખો ટૂંક સમયમાં આવશે.",
    browseByCategory: "કેટેગરી પ્રમાણે જુઓ",
    topicsComingSoon: "વિષયો ટૂંક સમયમાં આવશે.",

    categories: {
      AI: "AI",
      Programming: "પ્રોગ્રામિંગ",
      "Web Development": "વેબ ડેવલપમેન્ટ",
      "Future Tech": "ફ્યુચર ટેક",
      Internet: "ઇન્ટરનેટ",
      Sports: "સ્પોર્ટ્સ",
      Trending: "ટ્રેન્ડિંગ",
    },

    footerDescription:
      "આધુનિક ટેકનોલોજી, ડિજિટલ વિચારો અને આવતીકાલની દુનિયાને આકાર આપતા નવા ટ્રેન્ડ્સ.",

    footerIdentity:
      "ટેકનોલોજી અને ડિજિટલ દુનિયામાં શું નવું આવી રહ્યું છે તે શોધવા માટેની આધુનિક જગ્યા.",

    allRightsReserved: "તમામ હકો સુરક્ષિત.",
    builtForFuture: "ભવિષ્ય માટે બનાવેલ.",

    aboutPage: {
      label: "NEXORA વિશે",
      heroTitle1: "ટેકનોલોજી,",
      heroTitle2: "કોઈ વધારાના ઘોંઘાટ વિના.",
      heroDescription:
        "NEXORA એક આધુનિક technology publication છે, જે આગળ શું આવી રહ્યું છે તેને આકાર આપતા વિચારો, products અને digital trends પર ધ્યાન કેન્દ્રિત કરે છે.",
      modernTech: "આધુનિક ટેક ઇન્ટેલિજન્સ",

      perspective: "અમારો દૃષ્ટિકોણ",
      perspectiveTitle: "ઝડપથી બદલાતી digital દુનિયા માટે સ્પષ્ટ વિચારો.",
      paragraph1:
        "Technology ઝડપથી બદલાઈ રહી છે. નવા frameworks, AI systems, platforms અને digital products દરરોજ સામે આવી રહ્યા છે.",
      paragraph2:
        "NEXORA આ developments ને simple અને readable format માં રજૂ કરે છે જેથી readers સમજી શકે કે શું બદલાઈ રહ્યું છે અને તે શા માટે મહત્વપૂર્ણ છે.",
      paragraph3:
        "AI અને programming થી લઈને internet અને future technology સુધી, અમારો હેતુ complex topics ને સરળતાથી explore કરવામાં મદદ કરવાનો છે.",

      whatWeCover: "અમે શું આવરીએ છીએ",
      exploreTopics: "અમારા topics explore કરો.",
      topicsDescription: "આજની technology થી લઈને આવતીકાલની શક્યતાઓ સુધી.",

      topics: {
        AI: {
          title: "AI",
          description:
            "આર્ટિફિશિયલ ઇન્ટેલિજન્સ, intelligent systems અને આપણે કેવી રીતે કામ કરીએ છીએ તે બદલતી technologies.",
        },
        webDevelopment: {
          title: "વેબ ડેવલપમેન્ટ",
          description:
            "વેબ માટે બનાવવામાં આવેલા modern frameworks, websites અને digital experiences.",
        },
        programming: {
          title: "પ્રોગ્રામિંગ",
          description:
            "આધુનિક developers માટે development tools, coding practices, workflows અને વિચારો.",
        },
        futureTech: {
          title: "ફ્યુચર ટેક",
          description:
            "આવનારા વર્ષોને આકાર આપી શકે તેવી emerging technologies અને digital ideas.",
        },
      },

      quote:
        "“ભવિષ્ય એવા લોકોનું છે જે technology ને માત્ર ઉપયોગ કરતા નથી, પરંતુ તેને સમજે છે.”",

      exploreNexora: "NEXORA explore કરો",
      discoverNext: "આગળ શું છે તે શોધો.",
      ctaDescription:
        "નવીનતમ ideas, technologies અને digital trends explore કરો.",
      exploreArticles: "લેખો જુઓ",
    },

    searchPage: {
      label: "શોધ",
      title: "તમને કંઈક",
      titleHighlight: "રસપ્રદ શોધો.",
      description:
        "NEXORA ના technology, programming, AI અને digital stories માંથી શોધો.",
      placeholder: "લેખ શોધો...",
      hint: "AI, React, JavaScript, web development વગેરે શોધવાનો પ્રયાસ કરો...",
      results: "શોધ પરિણામો",
      searching: "શોધી રહ્યા છીએ...",
      article: "લેખ",
      articles: "લેખો",
      found: "મળ્યા",
      resultsFor: "આ માટેના પરિણામો",
      startExploring: "શોધ શરૂ કરો",
      startDescription:
        "NEXORA ના technology archive માંથી stories શોધવા માટે ઉપર keyword દાખલ કરો.",
      readArticle: "લેખ વાંચો",
      noResults: "કોઈ લેખ મળ્યો નથી",
      noResultsDescription: "આ શબ્દ સાથે મેળ ખાતું કંઈ મળ્યું નથી",
      clearSearch: "શોધ સાફ કરો",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language
  useEffect(() => {
    const savedLanguage = localStorage.getItem("nexora-language");

    if (savedLanguage === "gu" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setMounted(true);
  }, []);

  // Save language whenever it changes
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("nexora-language", language);
  }, [language, mounted]);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
