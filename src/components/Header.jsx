import AddEntryModal from "./AddEntryModal";
const Header = () => {
  return (
    <>
      <header className="bg-slate-900 flex items-center justify-between  mx-auto py-8 px-4">
        <p className="text-white">Personal Dairy</p>
        <AddEntryModal />
      </header>
    </>
  );
};

export default Header;
