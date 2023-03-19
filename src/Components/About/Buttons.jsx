import styled from "styled-components";
import { useState } from "react";
import { LeftDiv } from "./LeftDiv";
import { RightDiv } from "./RightDiv";

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  column-gap: 15px;
  margin: 80px 0px 180px;

  @media (max-width: 1050px) {
    margin: 50px 0 100px;
  }
`;

const Button = styled.button`
  position: relative;
  padding: 6px 70px;
  cursor: pointer;
  border: 2px solid
    ${({ activetab, tab }) => (activetab.id === tab.id ? "black" : "#ffd700")};
  border-radius: 30px;
  font-size: 20px;
  color: ${({ activetab, tab }) =>
    activetab.id === tab.id ? "white" : "black"};
  background-color: ${({ activetab, tab }) =>
    activetab.id === tab.id ? "black" : "white"};
  transition: 0.2s ease-in;

  @media (max-width: 860px) {
    padding: 10px 20px;
    width: 100%;
    text-align: start;
    border-radius: 20px;
  }
`;

const DivWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 50px;
    display: none;
  }
`;

const StyledDivWrapper = styled.div`
  margin-top: 60px;
  display: none;
  @media (max-width: 860px) {
    display: ${({ tabData, tabs }) =>
      tabData.id === tabs.id ? "block" : "none"};
  }
`;

const Arrow = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: block;
    position: absolute;
    right: 0;
    padding-left: 20px;
    padding-right: 20px;
    transform: ${({ activetab, tab }) =>
      activetab.id === tab.id ? "rotate(180deg)" : ""};
  }
`;
export const Buttons = () => {
  const tabsData = [
    {
      id: 1,
      title: "Law firms",
      text: "Overall, AI has the potential to significantly increase the efficiency and effectiveness of the legal industry by helping lawyers provide better and more cost-effective legal services to their clients.",
      span: [
        "Evaluation and analysis of contracts:",
        "Predictive legal analysis:",
        "Predictive coding:",
        "Legal risk management:",
        "Legal research:",
        "eDiscovery:",
        "Chatbots and virtual assistants:",
      ],
      content: [
        "helping lawyers evaluate and analyze large volumes of contracts and legal documents, reducing the time and effort required for manual evaluation.",
        "AI can help lawyers predict the outcome of cases, analyze legal trends, and make more informed decisions.",
        "AI can help lawyers prioritize and categorize legal documents, reducing the time and cost associated with manually evaluating documents.",
        "AI can help companies identify and mitigate potential legal risks, such as compliance issues and liability risks.",
        "helping lawyers to search and analyze legal databases, jurisprudence and other sources of information faster and more efficiently.",
        "in identifying, collecting and analyzing relevant electronic documents in a timely and cost-effective manner.",
        " AI can help lawyers automate repetitive tasks, such as answering frequently asked questions, and improve their overall productivity and efficiency.",
      ],
    },

    {
      id: 2,
      title: "Marketing and advertising - Agencies",
      text: "All in all, AI can add value to a marketing company by enabling it to automate and improve processes, as well as helping it better understand customer needs and behavior",
      span: [
        "Customer service automation:",
        "Content generation: ",
        "Data analysis and personalization:",
        "Forecasting and prediction:",
        "Linguistic analysis:",
        "Support for advertising campaigns:",
      ],
      content: [
        "can be used to automate customer service by answering frequently asked questions and providing 24/7 support.",
        "generate unique and valuable content such as product descriptions, articles and reports.",
        "can analyze customer data such as preferences and purchasing behavior to personalize communications and marketing offers.",
        "can use machine learning and data analytics to forecast and anticipate customer behavior and needs.",
        "it can help in linguistic analysis and capture trends and consumer needs, which can be used in marketing campaigns.",
        "can be used to automate and optimize advertising campaigns such as social media and email marketing campaigns.",
      ],
    },

    {
      id: 3,
      title: "Market researchers",
      text: "All in all, it can add value to research companies by enabling them to automate and improve processes, as well as helping them better understand customer needs and behavior.",
      span: [
        "Automation of surveys and research:",
        "Linguistic analysis: ",
        "Forecasting and forecasting:",
        "Content generation:",
        "Integration with other tools:",
      ],
      content: [
        "can be used to automate surveys and research, which can shorten the time needed to complete them and increase their effectiveness.",
        "can help with language analysis and capture trends and consumer needs, which can be used in market research.",
        "can use machine learning and data analytics to forecast and anticipate customer behavior and needs, which can be useful in market research.",
        "can be used to generate content such as product descriptions, reports and analysis, which can help you get a complete picture of the market and customer needs.",
        "can be easily integrated with other market research tools, such as data analysis tools, which can enable more detailed data analysis.",
      ],
    },

    {
      id: 4,
      title: "Finance / financial consulting / Insurance",
      text: "we can help financial businesses optimize and improve their financial processes, which can translate into greater savings and better financial decisions.",
      span: [
        "Financial data analysis:",
        "Financial advice:",
        "Automation of financial processes:",
        "Integration with financial systems:",
      ],
      content: [
        "analysis of financial data, such as financial results, balance sheet and income statement. It can also help generate financial reports and identify potential problems.",
        "providing advice on financial management, such as saving money, investing and managing risk.",
        "automation of financial processes, such as invoicing and bookkeeping.",
        "integration with financial systems, such as accounting systems and financial management platforms, which allows you to perform everyday financial tasks faster and more efficiently.",
      ],
    },

    {
      id: 5,
      title:
        "Medical companies (e.g. Medicover or private companies such as diagnostics.pl)",
      text: "We help to contribute to improving the quality of care, improving processes and increasing operational efficiency.",
      span: [
        "Health information:",
        "Automation of administrative processes:",
        "Integration with healthcare systems:",
        "Providing health advice:",
        "Data analysis:",
      ],
      content: [
        "can provide quick and accurate health and medical information, which can be especially helpful in the healthcare industry where access to information is key. Or inform about test results or new information (security system needed)",
        "Automate administrative processes such as patient registration, FAQs, and appointment reminders.",
        "integration with healthcare systems such as EHR (Electronic Health Records) systems, faster access to patient information and improved quality of care.",
        "providing health advice to patients, which may help them make better decisions about their health and well-being before contacting a doctor.",
        "analysis of data from the healthcare industry, such as patient demographics, research findings and healthcare trends.",
      ],
    },

    {
      id: 6,
      title: "Retail / stores / wholesalers",
      text: "",
      span: [
        "Customer service:",
        "Order management:",
        "Warehouse management:",
        "Personalization of the offer:",
      ],
      content: [
        "supporting customers 24/7 by answering frequently asked questions and helping them find the right products.",
        "help analyze order data and predict which products will be most in demand, which allows wholesalers to optimize their pricing and marketing strategies.",
        "automation of customer orders and notifications about the status of the order, stock status.",
        "personalization of the offer for each customer, based on their purchase history and preferences, which can increase customer loyalty and satisfaction.",
      ],
    },
  ];

  const [activeTabData, setTabData] = useState(tabsData[0]);

  return (
    <>
      <ButtonsWrapper>
        {tabsData.map((tab) => (
          <>
            <Button
              key={tab.id}
              // className={activeTabData.id === tab.id ? "active-button" : ""}
              tab={tab}
              activetab={activeTabData}
              onClick={(id) => setTabData(tab)}
            >
              <Arrow tab={tab} activetab={activeTabData}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
                </svg>
              </Arrow>
              {tab.title}
            </Button>

            <StyledDivWrapper tabData={activeTabData} tabs={tab}>
              <LeftDiv tabData={activeTabData} allTabs={tabsData} />
              <RightDiv
                span={activeTabData.span}
                content={activeTabData.content}
              />
            </StyledDivWrapper>
          </>
        ))}
      </ButtonsWrapper>
      <DivWrapper>
        <LeftDiv tabData={activeTabData} allTabs={tabsData} />
        <RightDiv span={activeTabData.span} content={activeTabData.content} />
      </DivWrapper>
    </>
  );
};
