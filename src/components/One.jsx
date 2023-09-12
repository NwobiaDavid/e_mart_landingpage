// import bg_img from '../assets/images/jason-briscoe-KTrov7eujms-unsplash.jpg';

export default function One() {
  //   const backgroundImageStyle = {
  //     backgroundImage: `url('${bg_img}')`,
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     backdropFilter: 'blur(10px)',
  //   };

  return (
    <div className=" ">
      <div>
        <h1>Introducing [Food Delivery Service]</h1>
        <p>
          Get ready for a revolution in grocery shopping. [Food Delivery
          Service] brings you the convenience of having fresh groceries and food
          items delivered right to your door. No more long lines or heavy bags –
          just order online and we'll take care of the rest. With our focus on
          high-quality ingredients and flexible weekly/monthly subscriptions, we
          make it easier than ever to enjoy delicious meals without the hassle.
          Try [Food Delivery Service] today and experience the convenience of
          fresh food delivered to your doorstep.
        </p>
      </div>
      <div>
      <h2>Don't Miss Out on Exclusive Savings, Sign Up Today!</h2>
        <p>By inputting your email, you automatically get a 10% discount for 12 months on every order. </p>
        <form action="#" className="relative" method="post">
          <input
            className="outline-none w-[25rem] rounded-full px-3 py-2"
            type="text"
          />
          <button
            className="z-10 right-0 px-2 rounded-r-full text-xl duration-200 w-[7rem] h-full bg-green-600 text-white hover:bg-green-800 absolute"
            type="submit"
          >
            Act Now
          </button>
        </form>
      </div>
    </div>
  );
}
