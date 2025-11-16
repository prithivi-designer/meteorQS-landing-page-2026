// app/latest-posts/page.tsx

import ContactForm from "./contact-form";

export default function ContactUSInfo() {
  return (
    <>
      <div className="py-[8rem] px-[1.5rem]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <h1>
            Les’t talk <br />
            on something great <br />
            together
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
