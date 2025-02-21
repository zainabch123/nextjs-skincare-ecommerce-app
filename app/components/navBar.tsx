export default function NavBar() {
  return (
    <nav className="flex flex-wrap justify-center items-center px-4 gap-x-9">
      <a href="best-sellers" className="text-center">
        Best Sellers
      </a>
      <a href="face" className="text-center">
        Face
      </a>
      <a href="body" className="text-center">
        Body
      </a>
      <a href="hair" className="text-center">
        Hair
      </a>
      <a href="sets" className="text-center">
        Sets
      </a>
    </nav>
  );
}
