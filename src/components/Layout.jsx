import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-6 text-center font-bold text-3xl">
        SpaceX Rockets
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-center text-white p-4 text-sm">
        &copy;2025 SpaceX&reg; Api Integration
      </footer>
    </div>
  );
};

export default Layout;
