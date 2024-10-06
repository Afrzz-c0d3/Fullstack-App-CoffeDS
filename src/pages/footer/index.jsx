const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center lg:pt-[30vh] pt-[10vh] sm:pt-[10vh] bg-slate-50">
      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-20">
        {/* Logo dan deskripsi */}
        <div className="flex flex-col items-center lg:items-start mb-6 text-base font-bold lg:w-1/3">
          <div className="flex items-center mb-2">
            <img src="/assets/img/coffee-logo.png" alt="Coffee Logo" className="hidden lg:block mr-2" />
            <div>Coffee DS</div>
          </div>
          <div className="text-center lg:text-left font-bold mb-4 text-slate-500">
            CoffeeDS is a store that sells some good <br />
            meals, and especially coffee. We provide <br />
            high quality beans
          </div>
        </div>

        {/* Product dan Engage */}
        <div className="flex lg:justify-between justify-center gap-20 md:gap-96 lg:gap-0 lg:w-2/4 lg:ml-auto">
          <div className="flex flex-col m-2 lg:w-1/2">
            <div className="font-semibold mb-5">Product</div>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col m-2 lg:w-1/2">
            <div className="font-semibold mb-5">Engage</div>
            <p>CoffeDS?</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
          </div>
        </div>
      </div>

      {/* Icon Sosial Media dan Copyright */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex mb-4 justify-center space-x-4">
          <img className="w-8 h-8 grayscale hover:filter-none hover:text-yellow-500 duration-200 cursor-pointer" src="/assets/img/fb.png" alt="Facebook" />
          <img className="w-8 h-8 grayscale hover:filter-none hover:text-yellow-500 duration-200 cursor-pointer" src="/assets/img/twitter.png" alt="Twitter" />
          <img className="w-8 h-8 grayscale hover:filter-none hover:text-yellow-500 duration-200 cursor-pointer" src="/assets/img/ig.png" alt="Instagram" />
        </div>
        <div className="text-slate-600">
          <p>&copy; 2024 CoffeeDS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
