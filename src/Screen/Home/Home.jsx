import React, { lazy, useEffect } from "react";
import ThemData from "../../Resource/Theme/Data";
import { t } from "i18next";
import Nav from "../Nav/Nav";
import profile from "../../Assets/Image/Home/profile-pic.png";
import frontend_card from "../../Assets/Image/Home/static_webiste.svg";
import two_factor_card from "../../Assets/Image/Home/two_factor.svg";
import cloud_card from "../../Assets/Image/Home/cloud.svg";
import { TypeAnimation } from 'react-type-animation';
const Card = lazy(() => import("../Card/"));
const Footer = lazy(() => import("../Footer"));
const Pricing = lazy(() => import("../Pricing"));

function Home() {
  const cardData = [
    {
      title: t("Footer.Front-end-Development"),
      text: t("Footer.Front-end-Development-text"),
      image: frontend_card,
    },
    {
      title: t("Footer.Back-end-Development"),
      text: t("Footer.Back-end-Development-text"),
      image: two_factor_card,
    },
    {
      title: t("Footer.DevOps"),
      text:  t("Footer.DevOps-text"),
      image: cloud_card,
    },
  ];

  useEffect(() => {

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;

    function check(e) {
      var target = (e && e.target) || (e && e.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t === elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }
  }, []);
  return (
    <div classNameName="h-screen leading-normal tracking-normal text-white" id="home">
      <Nav />
      <div className="pt-24 px-10">
        <div>
          <section class="px-2 lg:px-0 flex w-full container mx-auto pb-16">
            <div class="w-full text-white flex  flex-wrap flex-row justify-center md:justify-start text-center md:text-left">
              <div class="md:w-1/2 w-full md:mt-20">
                <h1 className="my-4 text-black dark:text-white text-5xl font-bold leading-tight">
                  {t("Home.title")}{" "}
                  <span class="text-gradient"> {t("Home.title2")}</span>
                </h1>
                <div className="w-full mb-4">
                  <div className="h-1 gradient opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <p className="font-mono leading-normal text-2xl mb-8 text-black dark:text-white">
                  {/* {t("Home.text")} */}
                  <TypeAnimation
                    sequence={[
                      t("Home.text")
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.4em', display: 'inline-block'}}
                  />
                </p>
              </div>
              <div class="md:w-1/2 mt-5 -mb-10 md:justify-center flex xssm:w-2/4 ">
                <img
                  src={ profile }
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className=" border-b py-8" id="skills">
        <div className="container max-w-6xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
            {t("Footer.Skills")}
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                <span className="text-gradient">Frontend フロントエンド</span>
              </h3>
              <p className="text-gray-600 dark:text-white mb-8">
                <ul className="font-mono">
                  {/* <li>React</li>
                  <li>Redux & Redux Saga</li>
                  <li>Vue</li>
                  <li>Angular</li>
                  <li>Chrome Extension</li>
                  <li>Unit Testing</li>
                  <li>Progressive Web App (PWA)</li> */}
                  <TypeAnimation
                    style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                    speed={30}
                    sequence={[
                      `Javascript\nReact\nRedux & Redux Saga\nVue\nAngular\nChrome Extension\nUnit Testing\nProgressive Web App (PWA)`
                    ]}
                  />
                </ul>
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src={ThemData.Image.Frontend} alt="Frontend imagss" />
            </div>
          </div>

          <div className="flex flex-wrap  flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src={ThemData.Image.Backend} alt="Frontend imagss" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  <span className="text-gradient">Backend サーバサイド</span>
                </h3>
                <p className="text-gray-600 dark:text-white mb-8">
                  <ul className="font-mono">
                    {/* <li>Node & Express</li>
                    <li>Kong API Gateway</li>
                    <li>Python & Flask</li>
                    <li>Lua</li>
                    <li>Nginx</li>
                    <li>Docker & Kubernetes</li>
                    <li>MariaDB</li>
                    <li>Amazon Web Services (AWS)</li>
                    <li>PostgresSQL</li>
                    <li>Jenkins</li> */}
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                        speed={30}
                        sequence={[
                          `Node & Express\nKong API Gateway\nPython & Flask\nLua\nNginx\nDocker & Kubernetes\nMariaDB\nAmazon Web Services (AWS)\nPostgresSQL\nJenkins`
                        ]}
                      />
                  </ul>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" border-b py-8 bg-orange-200 dark:bg-gray-800" id="services">
        <div className="container max-w-6xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
            {t("Nav.Services")}
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="py-16 ">
            <div className="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-0">
              <div className="mx-auto grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3">
                {cardData.map((item, i) => (
                  <Card item={item} key={i + 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" border-b py-8" id="pricing">
        <Pricing />
      </section>

      <section className=" mx-auto border-b text-center  py-6  text-gray-600 bg-orange-200 dark:bg-gray-800" id="contact">
        <h1 className="w-full my-2 text-5xl font-bold dark:text-white leading-tight text-center ">
          {t("Home.Contact Us")}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="hover:opacity-75 cursor-pointer font-mono text-gradient my-4 text-2xl leading-tight dark:text-white">
          {t("Home.Click_message")}
        </h3>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
