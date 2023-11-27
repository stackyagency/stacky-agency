import Email from "../components/Email";
import Header from "../components/Header";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.header":
      return <Header key={index} data={section} />;
    default:
      return null;
  }
}
