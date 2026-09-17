import { Box, Button, Flex, Text } from "@chakra-ui/react";
import colors from "../../theme/color";
import Price from "./Price";

const Hero = () => {
  return (
    <Flex
      className="Hero"
      width={{ base: "100%", lg: "100%" }}
      height={{ base: "fit-content", lg: "100vh" }}
      px={{ base: "30px", lg: "90px" }}
      py={"20px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      gap={{ base: "80px", lg: "0" }}
      id="home"
      marginTop={{ base: "80px", lg: "10px" }}
    >
      {/* Hero text */}
      <Box width={{ base: "100%", lg: "50%" }}>
        <Box>
          <Flex justifyContent={"start"} alignItems={"center"} gap={"10px"}>
            <Box
              width={"60px"}
              height={"2px"}
              background={colors.basic}
            ></Box>
            <Text color={colors.basic}>
              RESEARCH-BASED TECHNOLOGY . ABUJA, NIGERIA
            </Text>
          </Flex>
          <Text
            fontSize={{ base: "50px", lg: "80px" }}
            fontWeight={"900"}
            lineHeight={{ base: "55px", lg: "90px" }}
            margin={"15px 0"}
          >
            Precision. <br />
            Innovation. <br />
            <Text as="span" color={colors.basic}>
              Momentum.
            </Text>
          </Text>

          <Text fontSize={"16px"} fontWeight={"200"}>
            We engineer high-performance digital ecosystems — secure
            infrastructure, intelligent automation, and brand identities built
            for tomorrow. One integrated team. Every tech need, covered.
          </Text>
        </Box>

        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap={"40px"}
          marginTop={"30px"}
        >
          <Button
            px={"50px"}
            py={"30px"}
            color={colors.primary}
            borderRadius={"15px"}
            background={colors.secondary}
            fontSize={"15px"}
          >
            Get a Free Security Audit
          </Button>

          <Price />
        </Flex>
      </Box>

      {/* Image section */}
      <Flex
        flexDirection={"column"}
        width={{ base: "100%", lg: "50%" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box display={"flex"} gap={"20px"} marginBottom={"30px"} width={"100%"}>
          <Box
            width={"50%"}
            background={"#ffffff16"}
            p={"20px"}
            color={colors.primary}
            border={"1px solid " + colors.primary}
            borderRadius={"15px"}
          >
            <Text fontSize={"50px"} fontWeight={"900"}>
              4+
            </Text>
            <Text>Integrated service areas under one roof</Text>
          </Box>

          <Box
            width={"50%"}
            background={"#ffffff16"}
            p={"20px"}
            color={colors.primary}
            border={"1px solid " + colors.primary}
            borderRadius={"15px"}
          >
            <Text fontSize={"50px"} fontWeight={"900"}>
              2024
            </Text>
            <Text>Founded in FCT Abuja, Nigeria</Text>
          </Box>
        </Box>

        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap={"30px"}
          marginBottom={"30px"}
          width={"100%"}
          height={{ base: "fit-content", lg: "300px" }}
          background={colors.secondary}
          borderRadius={"15px"}
          p={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            textAlign={"center"}
          >
            <Text fontSize={"50px"} fontWeight={"900"}>
              G
            </Text>
            <Text fontSize={"20px"} fontWeight={"700"}>
              GROWTH
            </Text>
            <Text textAlign={"center"}>Expanding knowledge, skill & impact</Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            textAlign={"center"}
          >
            <Text fontSize={"50px"} fontWeight={"900"}>
              F
            </Text>
            <Text fontSize={"20px"} fontWeight={"700"}>
              FORESIGHT
            </Text>
            <Text textAlign={"center"}>Anticipating & shaping future trends</Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            textAlign={"center"}
          >
            <Text fontSize={"50px"} fontWeight={"900"}>
              N
            </Text>
            <Text fontSize={"20px"} fontWeight={"700"}>
              NOVELTY
            </Text>
            <Text textAlign={"center"}>Innovation through original ideas</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;