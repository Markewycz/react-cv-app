import Avatar from "./Avatar";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";

const person = {
  number: "+45 39125322",
  email: "example@email.com",
  portfolio: "https://portfolio.com",
  address: {
    street: "Kornblomstens kvt 49",
    city: "Herning",
    postCode: "4700",
  },
};

const education = {
  course: "Course Studied",
  university: "University Details",
  yearStarted: "2019",
  yearEnded: "2023",
};

const skills = ["UI/UX", "JavaScript", "HTML5", "Tailwind CSS", "React"];

function Section({ section }) {
  return (
    <div className="bg-zinc-700 rounded-3xl font-semibold text-center uppercase mb-4 p-1">
      {section}
    </div>
  );
}

export default function LeftSide() {
  return (
    <div className="min-h-full max-w-[250px] bg-gray-200 grid grid-cols-1 grid-flow-row p-8 gap-4">
      <div className="flex justify-center">
        <Avatar />
      </div>
      <div>
        <Section section={"Contact Me"} />
        <Contact person={person} />
      </div>
      <div>
        <Section section={"Education"} />
        <Education education={education} />
      </div>
      <div>
        <Section section={"Skills"} />
        <Skills skillsList={skills} />
      </div>
    </div>
  );
}
