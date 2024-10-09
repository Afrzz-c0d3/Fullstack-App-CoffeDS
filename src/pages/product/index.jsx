import Navbar from "../homepage/navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex mt-8">
        <aside className="w-1/4 p-4">
          <div className="bg-slate-100 p-6 text-center justify-center rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-10">Promo for you</h2>
            <p className="text-sm text-slate-600 mb-10">
              Coupons will be updated every weeks. Check them out!
            </p>
            <div className="bg-[#FF6A65] text-white p-4 rounded-lg mb-4">
              <img
                src="https://placehold.co/100x100"
                alt="Beef Spaghetti"
                className="w-32 h-32 flex  justify-center items-center mx-auto object-cover rounded-full mb-2"
              />
              <h3 className="text-xl font-bold text-black mb-5">
                Beef Spaghetti
                <br />
                20% OFF
              </h3>
              <p className="text-sm mt-2 text-black">
                Buy 1 Choco Oreo and get 20% off <br /> for Beef Spaghetti
              </p>
              <hr className="my-6 border-t-2 border-dashed border-black" />
              <h4 className="text-lg text-black font-medium">COUPON CODE</h4>
              <div className="text-black text-4xl p-2 text-center font-bold">
                FNPR15RG
              </div>
              <p className="text-sm text-black mt-2">Valid until October 10th 2020</p>
            </div>
            <button className="bg-[#6A4029] text-white py-4 px-4 rounded-full w-full">
              Apply Coupon
            </button>
            <div className="mt-16 text-xs text-start justify-start  text-gray-600">
              <p className="font-bold">Terms and Condition</p>
              <ul className="list-disc list-inside">
                <li>You can only apply 1 coupon per day</li>
                <li>Only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
              </ul>
            </div>
          </div>
        </aside>
        <section className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className=""
              >
                Favorite Product
              </a>
              <a href="#" className="text-gray-600">
                Coffee
              </a>
              <a href="#" className="text-gray-600">
                Non Coffee
              </a>
              <a href="#" className="text-gray-600">
                Foods
              </a>
              <a href="#" className="text-gray-600">
                Add-on
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
