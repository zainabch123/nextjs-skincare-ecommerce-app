export default function NavBar() {
  return (
    <nav className="h-[40px] grid grid-cols-[100px_100px_100px_100px_100px] justify-center content-center">
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
