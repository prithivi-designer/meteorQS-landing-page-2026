import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@heroui/react";
// import ContactUSInfo from "@/components/contactus";
import { useState } from "react";
import { client } from "@/lib/contentful";
export async function getStaticProps() {
  const resIndustries = await client.getEntries({
    content_type: "meteoriqsIndustries",
  });
  const resServices = await client.getEntries({
    content_type: "meteoriqsServices",
  });
  return {
    props: {
      industries: resIndustries.items,
      metServices: resServices.items,
    },
  };
}
export default function ContactUs({ industries, metServices }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header industries={industries} />
      {/* <ContactUSInfo /> */}
      <div className="py-[8rem] px-[1.5rem]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <h1
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
            className="md:text-[4rem] text-[3rem] leading-[1.3] font-bold text-center md:text-left"
          >
            Les’t talk <br />
            on something <span className="text-[#1093FF]">great</span> <br />
            together
          </h1>

          <div
            className="contact-form br-10 bgc-lighter rmt-60 bg-[#FFFEFE] rounded-lg p-8 shadow-lg w-full md:w-1/2"
            name="contact-form"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <form
              id="contactForm"
              className="contactForm"
              name="contactForm"
              //   action="assets/php/form-process.php"
              //   method="post"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="form-group">
                  <label className="text-[#787878] flex mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control w-full p-3 !text-[#000] !bg-[#f8f8f8] rounded-md mb-4 border-none border-[#787878] "
                    defaultValue=""
                    placeholder="Enter your name"
                    required=""
                    data-error="Please enter your Name"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="text-[#787878] flex mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control w-full p-3 !text-[#000] !bg-[#f8f8f8] rounded-md mb-4 border-none border-[#787878] "
                    defaultValue=""
                    placeholder="Enter your email"
                    required=""
                    data-error="Please enter your Email"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="text-[#787878] flex mb-1" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="form-control w-full p-3 !text-[#000] !bg-[#f8f8f8] rounded-md mb-4 border-none border-[#787878] "
                    defaultValue=""
                    placeholder="Enter your mobile number"
                    required=""
                    data-error="Please enter your phone"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="text-[#787878] flex mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control w-full p-3 !text-[#000] !bg-[#f8f8f8] rounded-md mb-4 border-none border-[#787878] "
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    data-error="Please enter your Message"
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group mb-0">
                  <Button
                    type="submit"
                    className="w-full bg-[#1093FF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
                    disabled={loading}
                    color="primary"
                  >
                    {loading ? "Sending..." : "Send Us Message"}
                  </Button>
                </div>
                <div className="form-group mt-4">
                  {status && <p className="text-primary text-end">{status}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer metServices={metServices} />
    </>
  );
}
