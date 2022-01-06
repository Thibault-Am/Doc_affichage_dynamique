export default {
  "title": "InterDisplay",
  "tagline": "Projet d'affichage dynamique",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "projectName": "docusaurus",
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\PC-Thibault\\my-website\\sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "C:\\Users\\PC-Thibault\\my-website\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Interdisplay",
      "items": [
        {
          "type": "doc",
          "docId": "fonctionnalitees",
          "position": "left",
          "label": "Documentation"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "Copyright © 2022 Projet affichage dynamique : ANTOLINI, AMAGAT, GEORG, BARDET.",
      "style": "light",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};