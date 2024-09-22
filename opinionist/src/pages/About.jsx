import React from "react";

const About = () => {
  return (
    <div className=" py-12 px-6 lg:px-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are ?</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
        {/* Image */}
        <img
          src="https://img.freepik.com/free-photo/smiling-confident-young-business-lady-with-curly-hair-standing-common-desk-looking-while-drinking-coffee-open-space-office_231208-5901.jpg?ga=GA1.1.1930709560.1720245751&semt=ais_hybrid" // Replace this with your actual image URL
          alt="Restaurant"
          className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg mb-8 lg:mb-0"
        />

        {/* Text Section */}
        <div className="text-lg text-gray-700 leading-relaxed max-w-lg">
          <p className="mb-6">
            Welcome to our Restaurant Feedback App! We believe that customer
            feedback is essential to continually improving our services and
            delivering an exceptional dining experience. Whether you had an
            amazing meal or feel there’s room for improvement, your thoughts
            matter to us.
          </p>
          <p>
            Thank you for being part of our journey to excellence. We look
            forward to hearing from you and making your next visit even more
            enjoyable.
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default About;
