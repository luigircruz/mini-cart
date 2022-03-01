import MyCart from "./MyCart";

const MainHeader = () => {
  return (
    <header className="w-full bg-header-background">
      <div className="mx-auto flex max-w-6xl justify-end">
        <MyCart />
      </div>
    </header>
  );
};

export default MainHeader;
