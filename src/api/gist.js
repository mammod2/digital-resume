import axios from "axios";
const GIST_ID = "fbd9d76fd049f819be4ff5b47283a5f2";
const ENDPOINT = `https://api.github.com/gists/${GIST_ID}`;

export const getBasicInfo = async () => {
  const { data } = await axios.get(ENDPOINT);
  const basicInfo = JSON.parse(data.files["resume.json"].content);

  const {
    about,
    projects,
    skills,
    works,
    educations,
    languages: myLanguages,
  } = basicInfo;

  const aboutSection = {
    content: about.content,
  };

  const projectsSection = {
    github: projects.github,
  };

  // const skillsSection = {
  //   keywords: skills.keywords,
  //   cssFrameworks: skills.cssFrameworks,
  //   level: skills.level,
  //   name: skills.name,
  // };

  const join = (arr, separator = ", ") => arr.join(separator);

  const skillsSection = skills.map((skill) => {
    return {
      ...skill,
      keywords: join(skill.keywords),
      cssFrameworks: join(skill.cssFrameworks),
    };
  });

  const monthMap = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const workSection = works.map((work) => {
    const startMonth = monthMap[work.start.month];
    const endMonth = monthMap[work.end.month];

    const startDate = `${startMonth} ${work.start.year}`;
    const endDate = work.end.month ? `${endMonth} ${work.end.year}` : "Present";

    console.log(works);
    return {
      ...work,
      role: work.position,
      name: work.company,
      duration: `${startDate} - ${endDate}`,
    };
  });

  const educationSection = educations.map((education) => {
    const startMonth = monthMap[education.start.month];
    const endMonth = monthMap[education?.end?.month];

    const startDate = `${startMonth} ${education.start.year}`;
    const endDate = education?.end?.month
      ? `${endMonth} ${education?.end?.year}`
      : "Currently pursuing";

    return {
      area: education.area,
      activities: education.activities,
      duration: `${startDate} - ${endDate}`,
      institution: education.institution,
      studyType: education.studyType,
    };
  });
  return {
    basicInfo,
    aboutSection,
    projectsSection,
    skillsSection,
    workSection,
    educationSection,
    myLanguages,
  };
};
