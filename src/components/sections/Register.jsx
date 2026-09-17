import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import colors from "../../theme/color";
import { FaHtml5, FaRobot } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { SiTaichigraphics } from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";
import Coursereg from "./CourseRegistrationModal";

const Reg = () => {
  const [showContact, setShowContact] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleContact = () => setShowContact(!showContact);

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/quantumdynamicgfn@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: contactData.name,
            Email: contactData.email,
            Message: contactData.message,
            _replyto: contactData.email,
            _subject: `New Contact Inquiry from ${contactData.name}`,
          }),
        }
      );

      if (response.ok) {
        alert("Message Sent! We will get back to you shortly.");
        setContactData({ name: "", email: "", message: "" });
        setShowContact(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("Submission Error: Could not send message. Please try again.");
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <Flex
      width={"100%"}
      height={"fit-content"}
      background={colors.main}
      flexDirection={"column"}
      id="courses"
    >
      <Box
        px={{ base: "20px", md: "40px", lg: "90px" }}
        py={"100px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Flex className="sectionheader" color={colors.basic}>
          <Box className="sectionbox" background={colors.basic}></Box>
          TECH TRAINING
          <Box className="sectionbox" background={colors.basic}></Box>
        </Flex>

        <Text
          fontSize={{ base: "28px", sm: "34px", lg: "40px" }}
          color={colors.primary}
          fontWeight={"700"}
          mt={"10px"}
        >
          Learn From Practitioners, Not Professors
        </Text>
        <Text fontSize={"17px"} fontWeight={"200"} color={"#9c9999"} maxW={"700px"}>
          Hands-on training that grooms you into a competent, job-ready tech
          professional. Learn real-world skills in a real-world environment.
        </Text>

        {/* Course Cards Container */}
        <Flex
          flexWrap="wrap"
          width={"100%"}
          gap={"20px"}
          justifyContent={"center"}
          alignItems={"stretch"}
          marginTop={"50px"}
        >
          {/* Web Development */}
          <Box
            width={{ base: "100%", sm: "48%", md: "30%", lg: "18%" }}
            background={"#ffffff16"}
            padding={"20px"}
            border={"1px solid #999999"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontSize={"50px"} color={"#ffffff"}>
              <FaHtml5 size={60} />
            </Box>
            <Text fontSize={"20px"} color={colors.primary} fontWeight={900} mt="10px">
              Web Development
            </Text>
            <Text fontSize={"30px"} color={colors.basic} fontWeight={"900"}>
              ₦30,000
            </Text>
            <Text fontSize={"14px"} color={"#999999"} mb="15px">
              per month
            </Text>
            <Coursereg />
          </Box>

          {/* Cybersecurity */}
          <Box
            width={{ base: "100%", sm: "48%", md: "30%", lg: "18%" }}
            background={"#ffffff16"}
            padding={"20px"}
            border={"1px solid #999999"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontSize={"50px"} color={"#ffffff"}>
              <GiCyberEye size={60} />
            </Box>
            <Text fontSize={"20px"} color={colors.primary} fontWeight={900} mt="10px">
              Cybersecurity
            </Text>
            <Text fontSize={"30px"} color={colors.basic} fontWeight={"900"}>
              ₦30,000
            </Text>
            <Text fontSize={"14px"} color={"#999999"} mb="15px">
              per month
            </Text>
            <Coursereg />
          </Box>

          {/* AI Application */}
          <Box
            width={{ base: "100%", sm: "48%", md: "30%", lg: "18%" }}
            background={"#ffffff16"}
            padding={"20px"}
            border={"1px solid #999999"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontSize={"50px"} color={"#ffffff"}>
              <FaRobot size={60} />
            </Box>
            <Text fontSize={"20px"} color={colors.primary} fontWeight={900} mt="10px">
              AI in Application
            </Text>
            <Text fontSize={"30px"} color={colors.basic} fontWeight={"900"}>
              ₦25,000
            </Text>
            <Text fontSize={"14px"} color={"#999999"} mb="15px">
              per month
            </Text>
            <Coursereg />
          </Box>

          {/* Graphic Design */}
          <Box
            width={{ base: "100%", sm: "48%", md: "30%", lg: "18%" }}
            background={"#ffffff16"}
            padding={"20px"}
            border={"1px solid #999999"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontSize={"50px"} color={"#ffffff"}>
              <SiTaichigraphics size={60} />
            </Box>
            <Text fontSize={"20px"} color={colors.primary} fontWeight={900} mt="10px">
              Graphic Design
            </Text>
            <Text fontSize={"30px"} color={colors.basic} fontWeight={"900"}>
              ₦25,000
            </Text>
            <Text fontSize={"14px"} color={"#999999"} mb="15px">
              per month
            </Text>
            <Coursereg />
          </Box>

          {/* Intro to Computer */}
          <Box
            width={{ base: "100%", sm: "48%", md: "30%", lg: "18%" }}
            background={"#ffffff16"}
            padding={"20px"}
            border={"1px solid #999999"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box fontSize={"50px"} color={"#ffffff"}>
              <GrCloudComputer size={60} />
            </Box>
            <Text fontSize={"20px"} color={colors.primary} fontWeight={900} mt="10px">
              Intro to Computer
            </Text>
            <Text fontSize={"30px"} color={colors.basic} fontWeight={"900"}>
              ₦20,000
            </Text>
            <Text fontSize={"14px"} color={"#999999"} mb="15px">
              per month
            </Text>
            <Coursereg />
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box
        className="Contact1"
        px={{ base: "20px", md: "40px", lg: "90px" }}
        py={"100px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        width={"100%"}
        id="contact"
        borderTop={"1px solid #ffffff22"}
      >
        <Text
          fontSize={{ base: "28px", sm: "35px", lg: "40px" }}
          color={colors.main}
          fontWeight={"700"}
        >
          Ready to Redefine Your Digital Landscape?
        </Text>
        <Text fontSize={"16px"} fontWeight={"200"} color={"#012a4a"}>
          The next era of your business starts here. Let's build something
          extraordinary together.
        </Text>

        <Flex
          width={"100%"}
          maxWidth={"600px"}
          flexDirection={{ base: "column", sm: "row" }}
          gap={"15px"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"40px"}
        >
          <Button width={{ base: "100%", sm: "50%" }} className="button" onClick={toggleContact}>
            {showContact ? "Close Contact" : "Contact Us Today"}
          </Button>

          <Button
            as="a"
            href="https://canva.com" // Replace with portfolio URL
            target="_blank"
            rel="noopener noreferrer"
            width={{ base: "100%", sm: "50%" }}
            className="button"
          >
            View Our Portfolio
          </Button>
        </Flex>

        {/* FULL SCREEN CONTACT POPUP OVERLAY */}
        {showContact && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(1, 42, 74, 0.85)",
              backdropFilter: "blur(8px)",
              zIndex: 999999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#0d1b2a",
                borderRadius: "12px",
                padding: "30px",
                width: "100%",
                maxWidth: "500px",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                color: "#ffffff",
                fontFamily: "sans-serif",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
                  Send Us a Message
                </h3>
                <button
                  onClick={toggleContact}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={handleContactSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <input
                  name="name"
                  placeholder="Your Name"
                  value={contactData.name}
                  onChange={handleContactChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "15px",
                    outline: "none",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={contactData.email}
                  onChange={handleContactChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "15px",
                    outline: "none",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  value={contactData.message}
                  onChange={handleContactChange}
                  required
                  rows={4}
                  style={{
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "15px",
                    resize: "vertical",
                    outline: "none",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />

                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <button
                    type="submit"
                    disabled={contactLoading}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: "#0077b6",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    {contactLoading ? "Sending..." : "Send Message"}
                  </button>
                  <button
                    type="button"
                    onClick={toggleContact}
                    style={{
                      padding: "12px 20px",
                      borderRadius: "6px",
                      border: "1px solid #999",
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Box>
    </Flex>
  );
};

export default Reg;