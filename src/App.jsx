import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function Document() {
  return (
    <div className="bg-slate-50 shadow-md shadow-black grid grid-cols-[1fr_2fr] ">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default function App() {
  return (
    <div className="w-screen h-screen grid justify-center">
      {/* <Editor /> */}
      <div className="flex justify-center items-center p-8">
        <Document />
      </div>
    </div>
  );
}
