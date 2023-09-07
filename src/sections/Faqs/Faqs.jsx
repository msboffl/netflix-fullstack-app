import { Divider } from "../../components";
import "./Faqs.scss";
import { PlusIcon } from "../../Assets/icons";
import { useState } from "react";

const faqsData = [
  {
    id: 1,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <h3 className="faq__question" onClick={handleToggle}>
        <button className="faq-btn">
          <span>{question}</span>
          <img
            src={PlusIcon}
            alt="Plus Icon"
            className={isOpen ? "crossIcon" : ""}
          />
        </button>
      </h3>
      {isOpen && (
        <div className="faq__answer">
          <span>{answer}</span>
        </div>
      )}
    </>
  );
};
const Faqs = () => {
  return (
    <section className="hero__card-row faq__row">
      <div className="faq__hero">
        <div className="hero__card hero__faqs">
          <h2 className="hero__title">Frequently Asked Questions</h2>
          <div className="faqs__container">
            <ul className="faq__accordian">
              {faqsData.map((faq) => (
                <li key={faq.id}>
                  <Accordian question={faq.question} answer={faq.answer} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Faqs;
