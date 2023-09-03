import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
  
];

const Header = () => {
  const [bounce, setBounce] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0.0);
  const [showBar, setShowBar] = useState(true);

  const handleScroll = (e) => {
      if (scrollPosition > window.scrollY) {
          setShowBar(true)
      } else {
          setShowBar(false)
      }
      setScrollPosition(window.scrollY);
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, [scrollPosition])
  const handleClick = (anchor) => () => {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({
              behavior: "smooth",
              block: "start",
          });
      }
  };

  return (
      <Slide direction='top' in={showBar}>
          <Box
              top={0}
              left={0}
              right={0}
              translateY={0}
              transitionProperty="transform"
              transitionDuration=".3s"
              transitionTimingFunction="ease-in-out"
              backgroundColor="#18181b"
          >
              <Box color="white" maxWidth="1280px" margin="0 auto">
                  <HStack
                      px={16}
                      py={4}
                      justifyContent="space-between"
                      alignItems="center"
                  >

                      <nav onMouseLeave={e => setBounce("")}>
                          <HStack
                              justifyContent="space-between"
                              alignItems="center"
                          >
                              {socials.map((site, index) =>
                                  <a href={site.url} key={site.url}>
                                      <FontAwesomeIcon size={"lg"}
                                                       id={site.url}
                                                       icon={site.icon}
                                                       bounce={bounce === site.url}
                                                       onMouseOver={e => setBounce(e.target.id)}
                                      />
                                  </a>)
                              }
                          </HStack>
                      </nav>
                      <nav>
                          <HStack spacing={8}>
                              <a href="/#projects" onClick={handleClick('projects')}>Projects</a>
                              <a href="/#contact-me" onClick={handleClick('contactme')}>Contact Me</a>
                          </HStack>
                      </nav>
                  </HStack>
              </Box>
          </Box>
      </Slide>
  );
};
export default Header;
