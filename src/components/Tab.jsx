const Tab = ({ name, currentTab }) => {
  const tabName = name.split(".")[0];
  return (
    <>
      {currentTab == tabName ? (
        <a
          href={tabName === "hello" ? "/" : `/${tabName}`}
          className="flex text-sm lg:text-sm sm:text-2xl  items-center w-40 lg:w-40 sm:w-60 h-full justify-center cursor-pointer bg-[#3a3d43] text-[#828488] border-b"
        >
          {name}
        </a>
      ) : (
        <a
          href={tabName === "hello" ? "/" : `/${tabName}`}
          className="flex sm:text-2xl lg:text-sm text-md items-center w-40 lg:w-40 sm:w-60 h-full justify-center cursor-pointer bg-[#2e3136] text-[#828488]"
        >
          {name}
        </a>
      )}
    </>
  );
};

export default Tab;
