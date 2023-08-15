export default function Title({ details }) {
  const { name, surname, title } = details;

  return (
    <div className="flex flex-col pt-16 pb-20">
      <h1 className="text-5xl font-bold text-zinc-800">{name}</h1>
      <h3 className="text-3xl font-medium tracking-widest text-zinc-700">
        {surname}
      </h3>
      <p className="text-xl tracking-wider font-light text-zinc-500">{title}</p>
    </div>
  );
}
