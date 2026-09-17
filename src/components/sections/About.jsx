import { Box, Flex, Text } from "@chakra-ui/react";
import colors from "../../theme/color";
import { FaHtml5, FaRobot } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { SiTaichigraphics } from "react-icons/si";

const About = () => {
  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      px={{ base: "30px", lg: "90px" }}
      py={"100px"}
      background={colors.primary}
      color={colors.main}
      id="about"
    >
      <Flex
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection={"column"}
        width={"100%"}
        textAlign={"center"}
        marginBottom={"90px"}
      >
        <Flex className="sectionheader">
          <Box className="sectionbox"></Box>
          WHAT WE DO
          <Box className="sectionbox"></Box>
        </Flex>

        <Text
          fontSize={{ base: "50px", lg: "40px" }}
          color={colors.main}
          fontWeight={"700"}
        >
          Our Core Pillars of Excellence
        </Text>
        <Text fontSize={"17px"} fontWeight={"200"}>
          From code to design to security -- everything your business needs to
          lead digitally, built by one cohesive team.
        </Text>
      </Flex>

      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={"50px"}
      >
        {/* Description boxes */}
        <Flex
          flexDirection={"column"}
          padding={"30px"}
          background={"#ffffff"}
          borderRadius={"20px"}
          boxShadow={"0 2px 8px rgba(0,0,0,0.08)"}
          border={"1px solid " + colors.secondary}
        >
          <Box
            width={"70px"}
            height={"70px"}
            borderRadius={"10px"}
            background={colors.primary}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={"30px"}
          >
            <FaHtml5 size={"50px"} />
          </Box>
          <Text fontSize={"25px"} fontWeight={"900"}>
            Website Development
          </Text>
          <Text fontSize={"20px"} fontWeight={"200"}>
            We don't just build websites - we engineer digital experiences. From
            e-commerce to complex web applications built for performance.
          </Text>
          <ul className="list1">
            <li>Scalable architecture</li>
            <li>Responsive Design</li>
            <li>SEO-Ready Frameworks</li>
            <li>Lightning-Fast Load Times</li>
          </ul>
        </Flex>

        <Flex
          flexDirection={"column"}
          padding={"30px"}
          background={"#ffffff"}
          borderRadius={"20px"}
          boxShadow={"0 2px 8px rgba(0,0,0,0.08)"}
          border={"1px solid " + colors.secondary}
        >
          <Box
            width={"70px"}
            height={"70px"}
            borderRadius={"10px"}
            background={colors.primary}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={"30px"}
          >
            <GiCyberEye size={"50px"} />
          </Box>
          <Text fontSize={"25px"} fontWeight={"900"}>
            Cybersecurity
          </Text>
          <Text fontSize={"20px"} fontWeight={"200"}>
            In an era of evolving threats, a proactive Security-First approach
            to protect your data and digital assets before incidents occur.
          </Text>
          <ul className="list1">
            <li>Vulnerability Assessments</li>
            <li>End-to-End Encryption</li>
            <li>Penetration Testing</li>
            <li>Incident Response</li>
          </ul>
        </Flex>

        <Flex
          flexDirection={"column"}
          padding={"30px"}
          background={"#ffffff"}
          borderRadius={"20px"}
          boxShadow={"0 2px 8px rgba(0,0,0,0.08)"}
          border={"1px solid " + colors.secondary}
        >
          <Box
            width={"70px"}
            height={"70px"}
            borderRadius={"10px"}
            background={colors.primary}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={"30px"}
          >
            <FaRobot size={"50px"} />
          </Box>
          <Text fontSize={"25px"} fontWeight={"900"}>
            AI in Application
          </Text>
          <Text fontSize={"20px"} fontWeight={"200"}>
            Machine learning and intelligent automation integrated into
            practical, real-world business workflows that actually move the
            needle.
          </Text>
          <ul className="list1">
            <li>Predictive Analytics</li>
            <li>Smart Bot Development</li>
            <li>Natural Language Processing</li>
            <li>Custom AI Models</li>
          </ul>
        </Flex>

        <Flex
          flexDirection={"column"}
          padding={"30px"}
          background={"#ffffff"}
          borderRadius={"20px"}
          boxShadow={"0 2px 8px rgba(0,0,0,0.08)"}
          border={"1px solid " + colors.secondary}
        >
          <Box
            width={"70px"}
            height={"70px"}
            borderRadius={"10px"}
            background={colors.primary}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={"30px"}
          >
            <SiTaichigraphics size={"50px"} />
          </Box>
          <Text fontSize={"25px"} fontWeight={"900"}>
            Graphic Design
          </Text>
          <Text fontSize={"20px"} fontWeight={"200"}>
            Visual storytelling blended with psychological precision -- brand
            identities that are both beautiful and functionally flawless.
          </Text>
          <ul className="list1">
            <li>Brand Identity Systems</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing Assets</li>
            <li>Logo & Style Guides</li>
          </ul>
        </Flex>
      </Flex>

      <Box
        width={"100%"}
        height={"1px"}
        background={"#01010133"}
        marginTop={"90px"}
        marginBottom={"90px"}
      ></Box>

      {/* Why Choose Us */}
      <Flex
        width={"100%"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "90px", lg: "90px" }}
      >
        <Box width={{ base: "100%", lg: "50%" }} textAlign={"start"}>
          <Flex className="sectionheader" justifyContent={"flex-start"}>
            <Box className="sectionbox"></Box>
            WHY CHOOSE US
          </Flex>

          <Text
            fontSize={{ base: "50px", lg: "40px" }}
            color={colors.main}
            fontWeight={"700"}
          >
            The Quantum Dynamics GFN Advantage
          </Text>
          <Text fontSize={"17px"} fontWeight={"200"}>
            With countless tech companies in the market, we stand apart through
            a commitment to "Dynamics" - constant movement towards perfection.
          </Text>

          <Flex
            width={{ base: "100%", lg: "100%" }}
            gap={"20px"}
            marginTop={"90px"}
          >
            <Box
              width={"170px"}
              height={"70px"}
              background={colors.main}
              borderRadius={"20px"}
            ></Box>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Integrated Synergy
              </Text>
              <Text fontWeight={100}>
                Unlike niche agencies, we understand how design affects code
                and how AI influences security. We offer a holistic tech
                ecosystem where every service complements the other.
              </Text>
            </Box>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "100%" }}
            gap={"20px"}
            marginTop={"90px"}
          >
            <Box
              width={"170px"}
              height={"70px"}
              background={colors.main}
              borderRadius={"20px"}
            ></Box>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Security-Centric Engineering
              </Text>
              <Text fontWeight={100}>
                Most firms treat security as an afterthought. At Quantum Dynamics,
                security is baked into the foundation of every line of code and
                every design file we produce.
              </Text>
            </Box>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "100%" }}
            gap={"20px"}
            marginTop={"90px"}
          >
            <Box
              width={"170px"}
              height={"70px"}
              background={colors.main}
              borderRadius={"20px"}
            ></Box>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Future-Proof Technology
              </Text>
              <Text fontWeight={100}>
                We build with the tools of tomorrow - JavaScript/Python
                frameworks, AI models, and cloud infrastructure - ensuring your
                investment remains relevant for years to come.
              </Text>
            </Box>
          </Flex>

          <Flex
            width={{ base: "100%", lg: "100%" }}
            gap={"20px"}
            marginTop={"90px"}
          >
            <Box
              width={"170px"}
              height={"70px"}
              background={colors.main}
              borderRadius={"20px"}
            ></Box>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Agile Collaboration
              </Text>
              <Text fontWeight={100}>
                We operate as your internal tech partner. Transparent
                communication and interactive development mean you are involved
                in every breakthrough.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          width={{ base: "100%", lg: "40%" }}
          className="Abt1"
          borderRadius={"20px"}
          p={"30px"}
          color={colors.primary}
          height={{ base: "fit-content", lg: "70vh" }}
        >
          <Text
            color={colors.basic}
            fontSize={"15px"}
            fontWeight={900}
            marginBottom={"30px"}
          >
            THE PRINCIPLE BEHIND OUR NAME
          </Text>

          <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Text
              color={colors.secondary}
              fontSize={"100px"}
              fontWeight={900}
            >
              G
            </Text>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Growth
              </Text>
              <Text fontWeight={100}>
                Expanding knowledge, skill, and impact - within our team, our
                clients' businesses, and our community.
              </Text>
            </Box>
          </Flex>

          <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Text
              color={colors.secondary}
              fontSize={"100px"}
              fontWeight={900}
            >
              F
            </Text>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Foresight
              </Text>
              <Text fontWeight={100}>
                Anticipating future trends and shaping them - so your business
                leads the curve rather than chasing it.
              </Text>
            </Box>
          </Flex>

          <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Text
              color={colors.secondary}
              fontSize={"100px"}
              fontWeight={900}
            >
              N
            </Text>
            <Box>
              <Text fontSize={"22px"} fontWeight={"900"}>
                Novelty
              </Text>
              <Text fontWeight={100}>
                Driving innovation through fresh, original ideas - because
                yesterday's solutions can't solve tomorrow's problems.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;