import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../child/icons";
import ContactForm from "../child/molecule/form";

const CONTACT = [
  {
    title: "Address",
    icon: LocationIcon,
    discription: "chandigarh, India",
  },
  {
    title: "Phone",
    icon: PhoneIcon,
    discription: "+91 8360395467",
  },
  {
    title: "Email",
    icon: EmailIcon,
    discription: "akshaykumar13147@gmail.com",
  },
];

export const SOCIAL_LINKS = [
  {
    title: "Whatsapp",
    icon: WhatsappIcon,
    link: "https://api.whatsapp.com/send?phone=918360395467",
  },
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/akshay-kumar-a3397920a/",
  },
  {
    title: "Github",
    icon: GithubIcon,
    link: "https://github.com/akshay3377",
  },
];

const ContactSection = () => {
  return (
    <section className=" w-[100%] bg-grey py-[150px]">
      <div className=" w-[75%]  flex flex-col   md:grid grid-cols-2    mx-auto ">
        <div className="w-[100%]  md:max-w-[500px]   ">
          <p className="font-[700] w-[auto] text-[36px] mb-[20px] ">
            Have You Any Project? Please Drop a Message
          </p>
          <p className="mb-[36px]">
            Get in touch and let me know how i can help. Fill out the form and
            i'll be in touch as soon as possible.
          </p>

          {CONTACT.map((contact, index) => {
            return (
              <div key={index} className="mb-[22px] flex">
                <div className="mr-[18px]"> {<contact.icon />}</div>
                <ul>
                  <h3 className="font-[700]">{contact.title}</h3>
                  <li>{contact.discription}</li>
                </ul>
              </div>
            );
          })}

          <div className="flex gap-3 my-[46px]">
            {SOCIAL_LINKS.map((social, index) => {
              return (
                <a href={social.link} target="_blank" key={index}>
                  {<social.icon className="h-[40px] w-[40px]" />}
                </a>
              );
            })}
          </div>
        </div>
        <div className=" w-[100%]  md:max-w-[500px]  bg-white flex justify-center items-center py-[24px] my-[20px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
