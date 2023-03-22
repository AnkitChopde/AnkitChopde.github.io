
import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {AiOutlineArrowUp} from "react-icons/ai"
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a  href="#top">
      <IconButton
                  
                      size="md"
                      isRound={true}
                     
                      icon={<AiOutlineArrowUp size="20px" color="#E11D48" />}
                    />
        
       
      </a>
    </div>
  ) : null;
};

