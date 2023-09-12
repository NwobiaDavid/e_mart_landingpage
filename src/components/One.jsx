// import bg_img from '../assets/images/jason-briscoe-KTrov7eujms-unsplash.jpg';

export default function One() {
  //   const backgroundImageStyle = {
  //     backgroundImage: `url('${bg_img}')`,
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     backdropFilter: 'blur(10px)',
  //   };

  return (
    <div className="grid grid-cols-1 mg:grid-cols-2 gap-4 h-[850px] ">
      <div className="py-4 px-10 ">
        <h1 className="text-4xl p-3">Introducing [Food Delivery Service]</h1>
        <p className="text-lg leading-7">
          Welcome to [Food Delivery Service], your one-stop solution for
          convenient and hassle-free grocery shopping. Say goodbye to long
          supermarket lines and heavy bags – we bring the store to your
          doorstep. With our commitment to quality and a wide selection of fresh
          groceries and food items, we aim to redefine how you shop for
          essentials. Let us take care of your grocery needs while you focus on
          what matters most.
        </p>
        <h1> What We Do: At [Food Delivery Service], </h1>
        <p className="text-lg leading-7">
          We specialize in delivering fresh, high-quality groceries and food
          directly to your door. Our dedicated team ensures you receive
          carefully selected products tailored to your preferences and dietary
          needs. With our user-friendly online platform, you can easily
          customize your grocery order and choose a convenient delivery time.
          Trust us for top-notch quality, from farm-fresh produce to sustainably
          sourced meats. We're your reliable partner in seamless grocery
          shopping, offering exceptional customer service. Experience
          convenience, quality, and personalized service with [Food Delivery
          Service]. Order today and enjoy more of what you love.
        </p>
      </div>

      <div className="flex text-center flex-col items-center justify-center ">
        <div className="h-[50%] flex flex-col justify-around">
          <div>
            <h2 className="text-4xl font-bold">
              Don't Miss Out on Exclusive Savings, Sign Up Today!
            </h2>
            <p>
              By inputting your email, you automatically get a{' '}
              <span className="font-bold ">10%</span>iscount for 12 months on
              every order.{' '}
            </p>
          </div>
          <div className="bg-gray-100 mt-10 rounded-lg w-full flex items-center justify-center h-[26%] ">
            <form action="#" className="relative w-[50%]" method="post">
              <input
                className="outline-none w-full rounded-full px-3 py-3"
                type="email"
                placeholder="your email..."
              />
              <button
                className="z-10 right-0 px-2 rounded-r-full text-xl duration-200 w-[7rem] h-full bg-orange-400 text-white hover:bg-orange-500 absolute"
                type="submit"
              >
                Act Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
