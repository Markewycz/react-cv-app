function Credential({ credential, icon, address }) {
  if (address) {
    const { street, city, postCode } = address;
    const fullAddress = `${street}, ${city}, ${postCode}`;
    credential = fullAddress;
  }

  return (
    <li className="flex items-center gap-2 text-zinc-600">
      <span className="material-symbols-outlined">{icon}</span>
      {credential}
    </li>
  );
}

export default function Contact({ person }) {
  return (
    <ul className="text-xs flex flex-col gap-3">
      <Credential credential={person.number} icon={"call"} />
      <Credential credential={person.email} icon={"mail"} />
      <Credential credential={person.portfolio} icon={"laptop_mac"} />
      <Credential address={person.address} icon={"location_on"} />
    </ul>
  );
}
