import { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import colors from "../../theme/color";
import { LuArrowRight } from "react-icons/lu";

// Brand Colors
const brand = {
  primary: "#eaeef3",
  secondary: "#023e8a",
  main: "#012a4a",
  basic: "#7cc4f4",
};

const Price = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [regLoading, setRegLoading] = useState(false);

  const [regData, setRegData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    courseSelection: "",
    description: "",
  });

  const toggleRegister = () => setShowRegister((prev) => !prev);

  const handleRegChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setRegLoading(true);

    try {
      // Direct FormSubmit AJAX endpoint
      const response = await fetch(
        "https://formsubmit.co/ajax/quantumdynamicgfn@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "Full Name": regData.name,
            "Email Address": regData.email,
            "Phone Number": regData.phone,
            "Selected Service": regData.serviceType,
            "Selected Course": regData.courseSelection,
            Description: regData.description,
            _replyto: regData.email,
            _subject: `New Registration Request from ${regData.name}`,
          }),
        }
      );

      if (response.ok) {
        alert(
          "Registration Submitted! We will contact you at " +
            regData.email +
            " shortly."
        );
        setRegData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          courseSelection: "",
          description: "",
        });
        setShowRegister(false);
      } else {
        throw new Error("Failed to send submission");
      }
    } catch (error) {
      alert(
        "Submission Error: Could not send registration. Please check your internet connection."
      );
    } finally {
      setRegLoading(false);
    }
  };

  return (
    <Flex width={"100%"} flexDirection={"column"} position="relative">
      {/* REGISTER TRIGGER BUTTON */}
      <Button
        width={{ base: "100%", lg: "70%" }}
        onClick={toggleRegister}
        px={"50px"}
        py={"30px"}
        borderRadius={"15px"}
        border={"1px solid #999999"}
        color={colors?.primary || brand.primary || "#ffffff"}
        fontSize={"15px"}
        fontWeight={500}
        cursor="pointer"
        background={"transparent"}
        boxShadow={"0 0 1rem #999999"}
      >
        Explore Our Services <LuArrowRight style={{ marginLeft: "8px" }} />
      </Button>

      {/* REGISTRATION MODAL */}
      {showRegister && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(1, 42, 74, 0.85)",
            backdropFilter: "blur(4px)",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(1, 42, 74, 0.85)",
              borderRadius: "12px",
              padding: "30px",
              width: "100%",
              maxWidth: "500px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              color: "#ffffff",
              fontFamily: "sans-serif",
              border: "1px solid #ffffff38",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
                Registration Request
              </h3>
              <button
                onClick={toggleRegister}
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

            {/* Form Direct to FormSubmit */}
            <form
              onSubmit={handleRegSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <input
                name="name"
                placeholder="Your Full Name"
                value={regData.name}
                onChange={handleRegChange}
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
                placeholder="Your Email Address"
                value={regData.email}
                onChange={handleRegChange}
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
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={regData.phone}
                onChange={handleRegChange}
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

              {/* DROPDOWN 1: SERVICES */}
              <select
                name="serviceType"
                value={regData.serviceType}
                onChange={handleRegChange}
                required
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "15px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option value="" disabled>
                  Select Service Type
                </option>
                <option value="Cyber Security Work">
                  Cybersecurity Services (Secure Project)
                </option>
                <option value="Website for Brand">
                  Web Development (Need a Website)
                </option>
                <option value="AI Job & Media Management">
                  AI / Media Management
                </option>
                <option value="Graphic Design Job">Need a Graphic Designer</option>
                <option value="Register for Course">
                  Tech Training / Course Registration
                </option>
              </select>

              {/* DROPDOWN 2: COURSES */}
              <select
                name="courseSelection"
                value={regData.courseSelection}
                onChange={handleRegChange}
                required
                style={{
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "15px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option value="" disabled>
                  Select Course Registration Type
                </option>
                <option value="Web Development">
                  1. Web Development (₦30,000/mo)
                </option>
                <option value="Cyber Security">
                  2. Cyber Security (₦30,000/mo)
                </option>
                <option value="AI in Application">
                  3. AI in Application (₦25,000/mo)
                </option>
                <option value="Graphic Design">
                  4. Graphic Design (₦25,000/mo)
                </option>
                <option value="Intro to Computer">
                  5. Intro to Computer (₦20,000/mo)
                </option>
                   <option value="Photography / VideoGraphy">
                  6. Photography / VideoGraphy (₦30,000/mo)
                </option>
                   <option value="Virtual Assistant">
                  7. Virtual Assistant (₦20,000/mo)
                </option>
                   <option value="Content Creation">
                  8. Content Creation (₦20,000/mo)
                </option>
                <option value="None / Service Only">
                  Not Enrolling in a Course (Services Only)
                </option>
              </select>

              <textarea
                name="description"
                placeholder="Describe what you really want..."
                value={regData.description}
                onChange={handleRegChange}
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
                  disabled={regLoading}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                    background: `linear-gradient(90deg, ${brand.secondary}, ${brand.basic})`,
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  {regLoading ? "Sending..." : "Send Registration"}
                </button>
                <button
                  type="button"
                  onClick={toggleRegister}
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
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Flex>
  );
};

export default Price;