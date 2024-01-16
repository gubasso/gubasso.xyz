# ripissue draft

- [ ] adjust to resume instructions
- [ ] resume: page per application
  - [ ] 100% at https://app.jobscan.co/scan/
- readme/adjust my projects repositories
- dynamic posts import from static, not from posts
- [ ] footer: get contact infos/icons from resume yaml
- linkedin:
  - add a post after gubasso.xyz is online
- cwnt's
  - [ ] publish basic website
  - linkedin page: update company links
  - update resume links and linkedin link
- [ ] deploy cadelab stack
- [ ] after publish gubasso.xyz
  - add link to ripissue article to ripissue project at resume
- [ ] cadelab: upload server and update project link
- [ ] cwnt.io simple website (bearkshire hathaway)?
  - then substitute it on resume company link
  - "An innovative IT firm specializing in investment management. We leverage advanced mathematical, statistical, and AI methodologies to develop and implement state-of-the-art automated investment algorithms."
  - "Expertise in low-level and high-performance technologies, with a strong focus on the Rust programming language."
  - "At the forefront of integrating technology in the financial market, particularly focusing on the dynamic web3 market."
  - update resume yaml
- check if commits services are being updated
- landing page: projects:
  - from resume yaml
  - add some summ to landing page

- [ ] vitest for unit testing
  - https://vitest.dev/
- [ ] playwright tests
  - videos/tutorials for which are the basic tests to do

- optimize html/site head meta tags: Open Graph checker tools (many are available online).
- [ ] add relative links to resume page? anchor to # (e.g. company name to the respective session)

- [x] chart at hero landing page



---

I am doing some adjustments to my resume. It is built in a yaml format, composed by multiple files. The yaml files that composes as my resume is attached to this message. Use this as input to analize and give me answers in this chat.

So, I have to make a bullet point description of a job experience for my resume. This job experience description must be in the following format:
- in bullet points

Mention the projects in each one of your positions/experiences and their main outcome. General proposed
structure for the bullets:
Action verb (past tense) + WHAT + using/applying + HOW + to/that (similars) + Objective (WHY) + for +
WHO/WITH WHOM (nice-to-have when applicable).
Answer for each bold W/H - Examples
- Action verb (past tense)
Designed
- WHAT did you do/build/improve and what tools did you use
dashboards
- HOW did you do WHAT? Mention all relevant tools and techniques used
several toolssuch as PowerBI, Python, SQL, and Excel
- WHY did these tasks/work matter? (explaining business problem that was being solved / objective of the
models developed)
decision-making, control, monitoring, processsupport, and search of business opportunities
- For/with WHO did you build/develop/improve this? (areas/departments or client industry / type of
company)
a large Finance company in Latam

the final bullet example:

Designed dashboards using several tools such as PowerBI, Python, SQL, and Excel for decision-making, control,
monitoring, processsupport, and search of business opportunitiesfor a large Finance company in LatAm.

Record this orientation that we will use it for the next messages

The input that I will give you for those description bullets are:
- roles that I have assumed for each job experience
- projects that I have executed in each job experience
- other additional information that I'll give

I'll give you other bullet descriptions examples so you keep that in mind:

For a job experience: Statistical Consultant
These are some other bullet points examples:
Proposed and implemented the calculation of the Antitrust Defense Index (IDC) of Brazil, utilizing R,
Python and Excel, which assesses how well Brazil’s antitrust authority has achieved its competencies.
● Created the statistical procedures and methods for calculating the Antitrust Defense Index (IDC) using
R and Python.
● Worked on back-end structuring using MySQL, MongoDB, Flask and Python to serve a JavaScriptbased dashboard, leading to real-time updates of the IDC and improved data visualization for
policymakers.
● Created reports, spreadsheets, and maps using Excel, R and Python, and GIS tools respectively,
containing the first/second set of variables and indicators and the composite index and sub-indices of
competition, with the justification of the methodology used, metadata and a complete dictionary of
variables on AirTable.
● Trained CADE employees using Shiny and Streamlit applications on the methodologies used in the
process of preparing statistics and competition indicators, leading to enhanced understanding and
improved self-sufficiency in their data analysis capabilities.
Developed a report with a description of the methodology used using Latex, Markdown, Word and
Excel, containing metadata, and a complete dictionary of the third/fourth set of variables and
indicators.
● Worked on reports containing proposals using Shiny, Streamlit, R, Python, and Excel for optimizing
calls, calculating indexes, and processing data performed on the server.
● Developed proposals for automating the data loading process on the server using Python, Flask and
MongoDB with checking and validation by metadata hosted on AirTable.
● Developed proposals for the implementation of improvements and updates of the indicator calculation
processes and implementation of algorithms using Python, Flask and MongoDB. This resulted in a 89%
reduction in calculation time.

As you read at the `experience.yaml` file, some job experiences already have the descriptions bullets with the correct text and format. Use this as valid examples as well.

Give me the answers in the yaml format and structure used by my resume data.

Given all of the inputs above... I want the following:

# 1) review some description bullet points at the job Research Consultanto, company ipea

- make the review taking in consideration the orientation inside the square brackets `[]`

```yaml
    description:
      - "Led a multidisciplinar team of developers, data analysts, statisticians and economists [led, coordinated, managed... review this text]"
      - "Contributed as a developer to the 'IpeaGEO' project, a .NET C# application for spatial data analysis, enhancing GIS capabilities and geographic data interpretation."
      - "Led, managed, and developed 'IpeaData', a highly accessed web application in Brazil for public social and economic data analysis. Built using the Riot.js web framework with a SQL Server and .NET C# Odata backend, ensuring its robustness and scalability."
      - "Managed and coordinated the 'Ipea Data Extractor' project, leveraging Suite Pentaho, Mondrian, and Saiku for efficient data querying and aggregation, using PosgreSQL as a database."
      - "Spearheaded the 'Ipea Publica' project, an internal web application to automate the review process of institutional publications. [I was the project manager and system analyst of this project... is 'spearheaded' the best word for the role? review this text with the correct roles that I assumed for this project]"
      - "Oversaw 'Ipea Projetos', enhancing the management of organizational projects and initiatives through effective system design and coordination."
      - "Played a pivotal role in the 'Atlas of Social Vulnerability' project, contributing to the development of a dynamic web platform for social data analysis.[plyed pivotal role is not good here... I was a developer, tech lead and project manager of this project... change the description to better represent the roles I assumed]"
      - "Contributed to 'Portal of Metropolitan Governance in Brazil', focusing on regional development and governance data analysis. [at this project I had the same roles as the previous one (IVS, Atlas of Social Vulnerability). I think you can make these two bullet points as one, since the roles are the same. But keep each project description]"
      - "Conducted economic research data analysis and reporting, creating databases, reports, and charts to support research studies."
      - "Delivered Riot.js training programs, sharing knowledge on web development frameworks.[enphasize that Riot.js is a web frameork to build web apps, and the training also taught a web frontend architechture]"
```

# 2) build the description bullet points for all of the job experiences that doesn't have one already. (return in a yaml format)

---

# 1) Here:

```yaml
      - "Fulfilled multiple roles (developer, tech lead, and project manager) in the 'Atlas of Social Vulnerability' project, contributing to the development of a dynamic web platform for analyzing social data."
      - "Worked on 'Portal of Metropolitan Governance in Brazil', similar to the 'Atlas of Social Vulnerability' project, focusing on regional development and governance data analysis."
```

- The second bullet, about `Portal of Metropolitan Governance in Brazil`...
  - the similitarity of both is about the roles that I assumed... not necessarily the projects are similar.
  - It has to be clearer that te project is focused on regional development and governance data for economic analysis
  - I suggested to unify both bullets because my roles (i.e. developer, tech lead, and project manager) were the same on both

# 2) For the example you gave for the job title "CTO and Co-founder" at the company "cwnt"

You just need to give me descritions for the experiences that I don't already have. In this example, I already have the description bullet points.

# 3) generate the description for the next job experience

```yaml
  - jobTitle: Consultant
    company: iaed
    dateOfEmployment: 10/2011 - 12/2017
    roles:
      - dataAnalyst
      - developer
      - technologyEducator
      - researcher
    projects:
      - alm
      - actuarialflow
      - futurerentability
    teaching:
      - sasguidecourse
    skills:
      - financialModel
      - asset
      - portfolio
      - bloomberg
      - regression
      - time
      - econometrics
      - qualitative
      - quantitative
      - optimizationMethods
      - csharp
      - dotnet
      - r
      - sas
      - sql
      - postgresql
      - git
      - agile
      - risk
```

---

# 1) iaed add a description

Here:

```yaml
    description:
      - "Analyzed and developed financial models for 'ALM' using C#, .NET, R, SAS, and SQL, optimizing asset and portfolio management strategies."
      - "Led the 'Actuarial Flow' project as a developer and researcher, utilizing R, SAS, and SQL for actuarial data processing, significantly enhancing data accuracy and efficiency."
      - "Designed and implemented 'Future Rentability', a predictive model for asset performance using regression and econometric methods in R and SAS, improving long-term investment decisions."
      - "Conducted extensive qualitative and quantitative research, applying econometrics and optimization methods to generate insightful financial analyses."
      - "Facilitated 'SAS Guide Course' as a technology educator, imparting crucial data analysis skills using SAS to professionals, enhancing their analytical capabilities."
```

Add a first bullet point highlighting that I have worked at this company, in all of those projects, as a consultant and implemented those projects on big banks, financial institutions and pensions funds in Brazil.

# 3) generate descriptions:

Generate the description for the following job experiences:

```yaml
  - jobTitle: Technology Coordinator
    company: cerme
    dateOfEmployment: 01/2015 - 12/2016
    roles:
      - managerProj
      - managerDev
      - systemsAnalyst
      - systemsAdmin
      - technologyEducator
    projects:
      - odr
    skills:
      - html
      - css
      - javascript
      - wordpress
      - git
      - agile
      - gitlab
      - arcgisDesktop
      - vagrant
      - shellScripting
      - linux
      - systemSecurity
      - geoportal
      - collector
      - storymaps
      - dashboards
      - appbuilder
      - postgresql
      - r
      - sql
  - jobTitle: General Coordinator of Monitoring and Evaluation of Regional Policies
    company: sdr
    dateOfEmployment: 01/2014 - 12/2014
    roles:
      - managerAdmin
      - managerProj
      - systemsAdmin
      - dataAnalyst
    projects:
      - odr
    teaching:
      - speakerLauc
      - speakerGeonordeste
    skills:
      - git
      - agile
      - gitlab
      - arcgisDesktop
      - postgresql
      - r
      - sql
  - jobTitle: University Professor
    company: unb
    dateOfEmployment: 01/2012 - 12/2014
    roles:
      - professor
      - researcher
    teaching:
      - mmqd
      - finances1
      - financialCalculus
    skills:
      - sas
      - r
      - optimizationMethods
      - quantitative
      - qualitative
      - forecasting
      - econometrics
      - time
      - regression
      - bloomberg
      - portfolio
      - asset
      - risk
      - financialModel
```

---

# 1) Technology Coordinator at Cerme

Add to the description the first bullet point that says that this project was executed for the Brazilian Government, and had the purpouse of It serves as a hub for economic and social policy indicators, offering an array of web-based solutions for detailed regional analysis. Made easier the access to regional social, economic and demographic data, applied policy metrics to follow up the execution and results of regional public policies.




