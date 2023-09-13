// import bg_img from '../assets/images/jason-briscoe-KTrov7eujms-unsplash.jpg';

export default function One() {
  //   const backgroundImageStyle = {
  //     backgroundImage: `url('${bg_img}')`,
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     backdropFilter: 'blur(10px)',
  //   };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 h-[750px] ">

      <div className="md:py-4 text-center md:text-left md:px-10 px-2 ">
        <h1 className="text-4xl p-3">Introducing ebonyi e-mart</h1>
        <p className="text-lg md:leading-7 ">
         <span className="text-2xl font-semibold pl-4">W</span>elcome to ebonyi e-Mart, your one-stop solution for
          convenient and hassle-free grocery shopping. Say goodbye to long
          crowded markets and costly transport fare – we bring the market to your
          doorstep. With our commitment to quality and a wide selection of fresh
          groceries and food items, we aim to redefine how you shop for
          essentials. Let us take care of your grocery needs while you focus on
          what matters most.
        </p>
        <h1  className="text-4xl p-3"> What We Do</h1>
        <p className="text-xl leading-8  md:text-lg md:leading-8  antialiased md:tracking-wider">
        <span className="text-2xl pl-4 font-semibold">A</span>t ebonyi e-Mart, We specialize in delivering fresh, high-quality groceries and food
          directly to your door. Our dedicated team ensures you receive
          carefully selected products tailored to your preferences and dietary
          needs. With our user-friendly online platform, you can easily
          customize your grocery order and choose a convenient delivery time.
          Trust us for top-notch quality, from farm-fresh produce to sustainably
          sourced meats. We're your reliable partner in seamless grocery
          shopping, offering exceptional customer service. Experience
          convenience, quality, and personalized service with ebonyi e-Mart. Order today and enjoy more of what you love.
        </p>
      </div>

      <div className="flex text-center flex-col px-9 items-center justify-center ">
        <div className="h-[50%] flex flex-col justify-around">
          <div>
            <h2 className="text-4xl font-bold">
              Don't Miss Out on Exclusive Savings, Sign Up Today!
            </h2>
            <p>
              By signing up with your email, you automatically get a{' '}
              <span className="font-bold ">10%</span>discount for 12 months on
              every order. So what are you waiting for?{' '}
              This campaign only lasts for one week, so act fast.
            </p>
          </div>

          <div className="md:bg-gray-100 mt-3 rounded-lg w-full flex items-center justify-center h-[50%] md:h-[26%] ">
            <form action="#" className="relative w-full " method="post">
              <input
                className="outline-none border-2 border-orange-400 duration-200 focus:border-orange-600 w-full rounded-full px-3 py-2 md:py-3"
                type="email"
                placeholder="your email..."
              />
              <button
                className="z-10 right-0 px-2 rounded-r-full text-sm md:text-xl duration-200 w-[4rem] md:w-[7rem] h-full bg-orange-400 text-white hover:bg-orange-600 absolute"
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
