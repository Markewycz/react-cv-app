function Job({ job }) {
  const { jobTitle, company, location, description, yearStarted, yearEnded } =
    job;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-zinc-700">
        <div className="text-sm">{jobTitle}</div>
        <div>
          {yearStarted} - {yearEnded}
        </div>
      </div>
      <div className="font-semibold text-sm">
        {company} | {location}
      </div>
      <div className="text-xs text-zinc-600">{description}</div>
    </div>
  );
}

export default function WorkExperience({ jobDetails }) {
  return (
    <div className="flex flex-col gap-10 text-zinc-800 py-5 pb-8">
      <Job job={jobDetails} />
      <Job job={jobDetails} />
      <Job job={jobDetails} />
    </div>
  );
}
