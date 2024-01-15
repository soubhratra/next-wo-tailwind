import {
  Theme,
  Box,
  Text,
  TextFieldRoot,
  TextFieldInput,
  Button,
} from "@radix-ui/themes";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import React from "react";

function Signup() {
  return (
    <Theme>
      <Box
        style={{
          display: "flex",
          fontFamily: "sans-serif",
        }}
      >
        <Box
          style={{
            backgroundColor: "#e6f7f8",
            flexGrow: 1,
            padding: "24px",
            maxWidth: "30%",
            margin: "-10px",
          }}
        >
          <img
            src="/food.png" // Replace with actual image URL
            alt="Healthy Food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box
          style={{
            padding: "64px",
            flexGrow: 1,
          }}
        >
          <Text
            as="h2"
            size="8"
            style={{
              color: "#333",
              marginBottom: "16px",
            }}
          >
            Sign up
          </Text>
          <Text
            size="3"
            style={{
              color: "#666",
              marginBottom: "32px",
            }}
          >
            Create your account
          </Text>
          <Box
            style={{
              marginBottom: "16px",
            }}
          >
            <TextFieldRoot
              style={{
                marginBottom: "12px",
              }}
            >
              <TextFieldInput placeholder="Enter Name*" />
            </TextFieldRoot>
            <TextFieldRoot
              style={{
                marginBottom: "12px",
              }}
            >
              <TextFieldInput placeholder="Enter Email*" />
            </TextFieldRoot>
            <TextFieldRoot>
              <TextFieldInput placeholder="Password*" />
              <EyeOpenIcon width="16" height="16" />
            </TextFieldRoot>
          </Box>
          <Button
            style={{
              background: "#00766c",
              color: "#fff",
              width: "100%",
              marginBottom: "16px",
            }}
          >
            Sign up
          </Button>
          <Box
            style={{
              textAlign: "center",
              margin: "16px 0",
            }}
          >
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #ddd",
                marginBottom: "16px",
              }}
            />
            <Text
              as="span"
              size="3"
              style={{
                color: "#666",
              }}
            >
              or
            </Text>
          </Box>
          <Button
            style={{
              background: "#fff",
              color: "#666",
              width: "100%",
              marginBottom: "16px",
              border: "1px solid #ddd",
            }}
          >
            <div
              style={{
                marginRight: "8px",
                width: "18px",
                height: "18px",
              }}
            />
            Sign up with Google
          </Button>
          <Text
            as="p"
            size="2"
            style={{
              textAlign: "center",
              color: "#666",
            }}
          >
            Already have an account?{" "}
            <a
              href="#"
              style={{
                color: "#00766c",
              }}
            >
              Log in
            </a>{" "}
            your account.
          </Text>
        </Box>
      </Box>
    </Theme>
  );
}

export default Signup;
