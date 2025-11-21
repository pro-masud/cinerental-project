import { useContext, useState } from "react";

import moon from "../assets/icons/moon.svg";
import Logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { MovieContext } from "../context/movieContext";
import CardDetails from "./Movie/CardDetails";

const Header = () => {
  const [showCardDetails, setShowDetails] = useState(false);

  const { cardData } = useContext(MovieContext);

  return (
    <>
      <header>
        {showCardDetails && (
          <CardDetails closeCart={() => setShowDetails(false)} />
        )}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center gap-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] relative rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowDetails(true)}
              >
                <img src={shoppingCart} width="24" height="24" alt="" />

                {cardData.length > 0 && (
                  <span className="bg-primary text-white text-xs font-semibold rounded-full px-2 py-1 absolute top-[-10px] right-[-10px]">
                    {cardData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
