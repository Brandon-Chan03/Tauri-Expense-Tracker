const Header = () => {
  return (
    <div className="w-full h-12 mb-8">
      <div className="grid grid-cols-3 h-full">
        <div 
          className="col-span-1 h-full flex items-center font-bold text-2xl"
        >
          Stay Broke
        </div>
        <div className="col-span-2 flex items-center">Search Bar</div>
      </div>
    </div>
  )
}

export default Header;
