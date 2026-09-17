import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import confetti from "canvas-confetti";
import colors from "../../theme/color";
// Adjust path to match your theme location

const messages = [
  "Thanks for visiting Quantum Dynamics! 🚀",
  "Ready to upgrade your skills? 💻",
  "We build extraordinary digital experiences! ✨",
  "Feel free to drop us a message anytime! 📩",
  "You're awesome! Have a great day! 🎉",
];

const RobotMascot = () => {
  const [msgIndex, setMsgIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  const handleClick = (e) => {
    // 1. Trigger Confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
    });

    // 2. Cycle Message
    setMsgIndex((prev) => (prev + 1) % messages.length);
    setShowBubble(true);

    // Auto hide bubble after 4 seconds
    setTimeout(() => {
      setShowBubble(false);
    }, 6000);
  };

  return (
    <Box
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex={99999}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
    >
      {/* Interactive Speech Bubble */}
      {showBubble && (
        <Box
          bg="#ffffff"
          color="#0d1b2a"
          px="15px"
          py="10px"
          borderRadius="12px"
          boxShadow="0 8px 24px rgba(0,0,0,0.3)"
          mb="10px"
          maxWidth="220px"
          position="relative"
          fontSize="13px"
          fontWeight="600"
          css={{
            animation: "fadeIn 0.3s ease-in-out",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              right: "20px",
              borderWidth: "8px 8px 0",
              borderStyle: "solid",
              borderColor: "#ffffff transparent",
              display: "block",
              width: 0,
            },
          }}
        >
          <Text>{messages[msgIndex]}</Text>
        </Box>
      )}

      {/* Floating Robot Icon */}
      <Box
        onClick={handleClick}
        cursor="pointer"
        width="60px"
        height="60px"
        borderRadius="50%"
        background={colors?.basic || "#00b4d8"}
        color="#ffffff"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow={`0 0 20px ${colors?.basic || "#00b4d8"}aa`}
        css={{
          animation: "floatRobot 3s ease-in-out infinite",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.15)",
            boxShadow: `0 0 30px ${colors?.basic || "#00b4d8"}`,
          },
          "@keyframes floatRobot": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
          },
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "translateY(10px)" },
            to: { opacity: 1, transform: "translateY(0px)" },
          },
        }}
      >
        <FaRobot size={32} />
      </Box>
    </Box>
  );
};

export default RobotMascot;