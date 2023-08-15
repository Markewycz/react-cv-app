import Title from "./Title";
import WorkExperience from "./WorkExp";
import Certificates from "./Certificates";
import { v4 as uuidv4 } from "uuid";

const details = {
  name: "Gracjan",
  surname: "Markiewicz",
  title: "Frontend Developer",
};

const jobs = {
  jobTitle: "Job position",
  company: "Company",
  location: "Location",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dolore expedita sed ipsam aliquid unde error dolores ex perspiciatis distinctio, quasi ratione sit qui numquam excepturi accusantium eveniet suscipit laudantium.",
  yearStarted: "2019",
  yearEnded: "2023",
};

function Section({ sectionName }) {
  return (
    <div className="border-t-2 border-black relative h-4">
      <h1 className="absolute -top-4 left-0 overflow-hidden font-semibold text-xl text-zinc-800 uppercase block bg-white pr-4">
        {sectionName}
      </h1>
    </div>
  );
}

export default function RightSide() {
  return (
    <div className="flex flex-col p-8 max-w-lg">
      <Title details={details} />
      <div>
        <Section key={uuidv4()} sectionName="Work Experience" />
        <WorkExperience jobDetails={jobs} />
      </div>
      <div>
        <Section key={uuidv4()} sectionName="Certificates" />
        <Certificates />
      </div>
    </div>
  );
}
