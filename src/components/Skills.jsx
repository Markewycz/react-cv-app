import { v4 as uuidv4 } from "uuid";

export default function Skills({ skillsList }) {
  const listItems = skillsList.map((item) => <li key={uuidv4()}>{item}</li>);

  return (
    <ul className="list-disc list-inside flex flex-col gap-4 text-zinc-600 text-xs">
      {listItems}
    </ul>
  );
}
