import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <Link href="/">
        {" "}
        <h3 className="text-2xl font-bold text-gray-300">Next CRUD</h3>
      </Link>
      <ul>
        <li>
          <Link href="/new" className="text-xl hover:text-green-300">
            Create new task
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
