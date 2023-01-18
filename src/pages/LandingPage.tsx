import Header from "../components/shared/Header";

const LandingPage = () => {
  return (
    <div className="">
      <Header></Header>
      <main className="w-1/2 mt-20">
        <h2 className="text-2xl">
          Train With Me in your phone and document your workouts!
        </h2>
        <p>
          Perfect for weightlifters, crossfitters, powerlifters and general
          fitness people. Made by a lifter for lifters. Create and account
          today!
        </p>
      </main>
    </div>
  );
};

export default LandingPage;
