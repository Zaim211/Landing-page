import { Button } from "@/components/ui/button";



const Contact = () => {
  return (
    <section className="w-full border-t">
      <h1 className="h3-bold mt-6 text-center">Contact</h1>
      <div className="wrapper grid mt-4 grid-cols md:grid-cols 2xl:gap-0">
        <form className="mt-12 border rounded-md p-4  flex flex-col gap-8">
          <label htmlFor="" className="flex flex-col">
            <span className="h1-bold mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              className="bg-gray-300 py-4 px-6 placeholder:text-secondary
              rounded-lg text-black outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="h1-bold  mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your Email?"
              className="bg-gray-300 py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className="flex flex-col">
            <span className="h1-bold mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              placeholder="What do you want to say?"
              className="bg-gray-300 py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <Button className="text-white">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
