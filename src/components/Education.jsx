function Course({ details }) {
  const { course, university, yearStarted, yearEnded } = details;
  return (
    <div>
      <h3 className="text-sm font-semibold">{course}</h3>
      <h6 className="text-xs font-medium">{university}</h6>
      <p className="text-xs text-zinc-500">
        {yearStarted} - {yearEnded}
      </p>
    </div>
  );
}

export default function Education({ education }) {
  return (
    <div className="text-zinc-700 flex flex-col gap-3">
      <Course details={education} />
      <Course details={education} />
      <Course details={education} />
    </div>
  );
}
