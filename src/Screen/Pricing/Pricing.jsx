import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { t } from "i18next";

const IconSection = (
  <span className="material-icons align-middle relative top-1">
    <AiOutlineCheckCircle />
  </span>
);
const iconText = (text, text1) => (
  <p className="font-semibold flex mb-5 text-gray-500 text-left">
    {IconSection}
    <span className="pl-2">
      {text} <span className=" dark:text-white text-gray-800"> {text1}</span>
    </span>
  </p>
);

const PricingText = (text, price) => (
  <>
    <h1 className=" text-gray-800 dark:text-white font-semibold text-2xl">
      {text}
    </h1>
    <p className="pt-2 tracking-wide">
      <span className="text-gray-900  dark:text-white align-top">{t("Pricing.Currency")} </span>
      <span className="text-3xl text-gray-900 dark:text-white font-semibold">
        {price}
      </span>
      <span className="text-gray-900 dark:text-white  font-medium">/{t("Pricing.Hour")}</span>
    </p>
    <hr className="mt-4 border-1" />
  </>
);

const pricingButton = (
  <button classNameName="" style={{ width: "200px" }}>
    <p className=" py-4 bg-blue-600 gradient mt-8 rounded-xl text-white">
      <a className="font-medium" href="#contact">{t("Pricing.Button")}</a>
    </p>
  </button>
);
function Pricing() {
  return (
    <div className="min-h-screen flex   justify-center items-center">
      <div className="">
        <div className="text-center font-semibold">
          <h1 className="text-5xl">
            <span className="text-gradient tracking-wide">{t("Pricing.Title1")} </span>
            <span className=" dark:text-white text-gray-700">{t("Pricing.Title2")}</span>
          </h1>
          <p className="pt-6 text-xl text-gray-400 dark:text-white  font-normal w-full px-8 md:w-full">
            {t("Pricing.Description")}
          </p>
        </div>
        <div className="pt-24 flex flex-wrap xssm:text-center xssm:justify-center ">
          <div className="w-96 p-8 shadow-black bg-white dark:bg-gray-900 text-center rounded-3xl pr-16 shadow-md dark:shadow-white">
            {PricingText(t("Pricing.Left-Plan"), t("Pricing.Left-Plan-Price"))}
            <div className="pt-8">
              {iconText(t("Pricing.Left-Plan-Point-1"))}
              {iconText(t("Pricing.Left-Plan-Point-2"))}
              {iconText(t("Pricing.Left-Plan-Point-3"))}

              {pricingButton}
            </div>
          </div>

          <div className="w-80 p-8 xssm:mt-9 lg:mt-0 bg-orange-300 dark:bg-white text-center rounded-3xl text-white border-4 shadow-xl border-black dark:border-orange-300 transform scale-125">
            <h1 className="text-white dark:text-gray-900 font-semibold text-2xl">
              {t("Pricing.Middle-Plan")}
            </h1>
            <p className="pt-2 tracking-wide">
              <span className="dark:text-gray-500 text-white align-top">
                {t("Pricing.Currency")}{" "}
              </span>
              <span className="text-3xl font-semibold dark:text-gray-900">
                {t("Pricing.Middle-Plan-Price")}
              </span>
              <span className="dark:text-gray-500 text-white font-medium">
                /{t("Pricing.Hour")}
              </span>
            </p>
            <hr className="mt-4 border-1 border-gray-600" />
            <div className="pt-8">
              <p className="font-semibold flex text-gray-600 text-left">
                {IconSection}
                <span className="pl-2">
                  {t("Pricing.Middle-Plan-Point-1")}
                </span>
              </p>
              <p className="font-semibold flex text-gray-600 text-left pt-5">
                {IconSection}
                <span className="pl-2">
                  {t("Pricing.Middle-Plan-Point-2")}
                </span>
              </p>
              <p className="font-semibold flex text-gray-600 text-left pt-5">
                {IconSection}
                <span className="pl-2">
                  {t("Pricing.Middle-Plan-Point-3")}
                  {/* <span className="dark:text-gray-900 text-white">Basic</span> */}
                </span>
              </p>

              {pricingButton}
            </div>
            <div className="absolute top-4 right-4">
              <p className="gradient font-semibold px-4 py-1 rounded-full uppercase text-xs">
              {t("Pricing.Popular")}
              </p>
            </div>
          </div>

          <div className="w-96 p-8  xssm:mt-9 lg:mt-0  text-center rounded-3xl bg-white dark:bg-gray-900 pl-16 dark:shadow-white shadow-md shadow-black">
            {PricingText(t("Pricing.Right-Plan"), t("Pricing.Right-Plan-Price"))}
            <div className="pt-8">
              {iconText(t("Pricing.Right-Plan-Point-1"))}
              {iconText(t("Pricing.Right-Plan-Point-2"))}
              {iconText(t("Pricing.Right-Plan-Point-3"))}
              {pricingButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
