import { FaMailBulk, FaPhone } from "react-icons/fa";

export const metadata = {
  title: "Contact",
  description: "",
};
function contact() {
  return (
    <div className="myaccountmar">
      <div className="flex justify-between px-[5%] py-10 mt-[3%] mb-[6%] pl-[13%]">
        <div>
          Home / <span className="font-bold">Contact</span>
        </div>
      </div>
      <div className="grid grid-cols-8 pl-[13%] px-[5%] py-10  mycontact">
        {/* LeftBar */}
        <div className="col-span-3 w-[95%] pr-8 space-y-6 px-8 py-8 shadow-xl rounded-md ">
          {/* Call to Us */}
          <div className="flex flex-col gap-2 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <FaPhone
                size={22}
                className="text-white text-lg bg-red-500 rounded-full p-2 w-8 h-8"
              />
              <h1 className="text-lg font-semibold">Call To Us</h1>
            </div>
            <p className="text-sm text-foreground">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm font-medium text-foreground">
              Phone: <span className="text-black">+8801611112222</span>
            </p>
          </div>

          {/* Write to Us */}
          <div className="flex flex-col gap-2  border-gray-200 pb-4">
            <div className="flex items-center gap-2">
              <FaMailBulk
                size={12}
                className="text-white text-lg bg-red-500 rounded-full p-2 w-8 h-8"
              />
              <h1 className="text-lg font-semibold">Write To Us</h1>
            </div>
            <p className="text-sm text-foreground">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm font-medium text-foreground">
              Emails: <span className="text-black">customer@exclusive.com</span>
            </p>
            <p className="text-sm font-medium text-gray-800">
              Emails:
              <span className="text-foreground">support@exclusive.com</span>
            </p>
          </div>
        </div>

        {/* Main Form */}
        <div className="col-span-5 px-8 shadow-xl rounded-md">
          <form className=" bg-background p-8 space-y-5 mt-5 ">
            {/* Name */}
            <div className="grid grid-cols-3 gap-6 form">
              <div>
                <input
                  name="Name"
                  placeholder="Your Name"
                  className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
                />
              </div>
              <div>
                <input
                  name="email"
                  placeholder="Your Email"
                  className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
                />
              </div>
              <div>
                <input
                  name="phone"
                  placeholder="Your Phone"
                  className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 gap-6">
              <div className="h-[300%]">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm min-h-[150px] sm:min-h-[200px] lg:min-h-[250px] resize-y"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button className="bg-red-500 hover:bg-red-600 transition-colors text-white px-8 py-4 rounded text-sm cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
