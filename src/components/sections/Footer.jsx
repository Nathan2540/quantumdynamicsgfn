import { Box, Flex, Text } from "@chakra-ui/react";
import colors from "../../theme/color";
import { LuInstagram, LuMail } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import { PiWhatsappLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <Box
      as="footer"
      fontSize={"13px"}
      color={"#9c9999"}
      p={"70px 30px 20px 30px"}
      width={"100%"}
      height={"fit-content"}
      background={colors.main}
    >
      <Flex
        justifyContent={{ base: "center", lg: "space-between" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap={"30px"}
        width={"100%"}
        alignItems={{ base: "flex-start", lg: "flex-start" }}
      >
        {/* Brand Info & Socials */}
        <Box>
          <Text marginBottom={"8px"} fontWeight={"900"} color="#ffffff">
            Quantum Dynamics <br />
            <Text as="span" fontSize={"10px"} fontWeight={"900"} color={colors.basic}>
              GFN
            </Text>
          </Text>
          <Text>
            Oduduwa Street, 2/2 Kubwa <br /> FCT Abuja, Nigeria
          </Text>
          <Text>
            <a 
              href="mailto:quantumdynamicsgfn@gmail.com" 
              aria-label="Send email to Quantum Dynamics GFN"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              quantumdynamicsgfn@gmail.com
            </a>
          </Text>
          <Text>
            <a 
              href="tel:+2348169942060" 
              aria-label="Call Quantum Dynamics GFN phone number"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              +234 816 994 2060
            </a>
          </Text>

          {/* Social Media Links with Accessible aria-labels */}
          <Box display={"flex"} gap={"20px"} marginTop={"20px"}>
            <a
              href="https://wa.me/message/XJ4ZFMWWOHF4C1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Quantum Dynamics GFN on WhatsApp"
              style={{ color: "#9c9999", fontSize: "18px", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#9c9999")}
            >
              <PiWhatsappLogoLight />
            </a>
            <a
              href="https://www.instagram.com/quantumdynamics?stkn=YmxzN2JlY3NhZmgx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Quantum Dynamics GFN on Instagram"
              style={{ color: "#9c9999", fontSize: "18px", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#9c9999")}
            >
              <LuInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@quantum.dynamics.g?_r=1&_t=ZS-99oZKtgEMrM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Quantum Dynamics GFN on TikTok"
              style={{ color: "#9c9999", fontSize: "18px", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#9c9999")}
            >
              <RiTiktokLine />
            </a>
            <a
              href="mailto:quantumdynamicsgfn@gmail.com"
              aria-label="Send an email to Quantum Dynamics GFN"
              style={{ color: "#9c9999", fontSize: "18px", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#9c9999")}
            >
              <LuMail />
            </a>
          </Box>
        </Box>

        {/* Services Column */}
        <Box display="flex" flexDirection="column" gap="8px">
          <Text marginBottom={"4px"} fontWeight={"900"} color="#ffffff">
            SERVICES
          </Text>
          <Text as="a" href="#services" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Website Development
          </Text>
          <Text as="a" href="#services" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Cybersecurity
          </Text>
          <Text as="a" href="#services" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            AI in Application
          </Text>
          <Text as="a" href="#services" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Graphic Design
          </Text>
        </Box>

        {/* Training Column */}
        <Box display="flex" flexDirection="column" gap="8px">
          <Text marginBottom={"4px"} fontWeight={"900"} color="#ffffff">
            TRAINING
          </Text>
          <Text as="a" href="#training" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Web Development
          </Text>
          <Text as="a" href="#training" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Cybersecurity
          </Text>
          <Text as="a" href="#training" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            AI in Application
          </Text>
          <Text as="a" href="#training" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Graphic Design
          </Text>
          <Text as="a" href="#training" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Intro to Computer
          </Text>
        </Box>

        {/* Company Column */}
        <Box display="flex" flexDirection="column" gap="8px">
          <Text marginBottom={"4px"} fontWeight={"900"} color="#ffffff">
            COMPANY
          </Text>
          <Text as="a" href="#about" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            About us
          </Text>
          <Text as="a" href="#portfolio" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Portfolio
          </Text>
          <Text as="a" href="#blog" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Blog
          </Text>
          <Text as="a" href="#privacy" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Privacy Policy
          </Text>
          <Text as="a" href="#terms" _hover={{ color: "#ffffff" }} style={{ textDecoration: "none", color: "inherit" }}>
            Terms of Service
          </Text>
        </Box>
      </Flex>

      {/* Divider */}
      <Box
        height={"1px"}
        width={"100%"}
        background={"#9c999933"}
        margin={"30px 0"}
      ></Box>

      {/* Bottom Copyright Row */}
      <Flex
        fontSize={"12px"}
        fontWeight={"200"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
        gap={"20px"}
        alignItems={"center"}
      >
        <Text>© 2026 Quantum Dynamics GFN, All rights reserved. Registered September 22, 2024</Text>
        <Text>Governed under Nigerian Law. Abuja, FCT</Text>
      </Flex>
    </Box>
  );
};

export default Footer;