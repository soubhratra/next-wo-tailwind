import { Flex, Box, AspectRatio, Text } from "@radix-ui/themes";
import React from "react";
const ImageComponent = () => {
  return (
    <Flex className="min-h-screen bg-white">
      <Box className="w-1/2">
        <AspectRatio ratio={1} className="w-full h-full">
          <img
            src="/food.png"
            alt="Salad"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </Box>
      <Flex className="w-1/2 flex-col justify-center p-16">
        <Text className="text-3xl font-bold mb-6">Sign up</Text>
        <Text className="text-lg mb-2">Create your account</Text>
        <Text className="text-sm font-semibold mb-1">Enter Name*</Text>
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 p-2 border rounded"
        />
        <Text className="text-sm font-semibold mb-1">Enter Email*</Text>
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 p-2 border rounded"
        />
        <Text className="text-sm font-semibold mb-1">Password*</Text>
        <input
          type="password"
          placeholder="At least 8 characters"
          className="mb-6 p-2 border rounded"
        />
        <button className="bg-teal-500 text-white py-2 rounded mb-4">
          Sign up
        </button>
        <Flex className="items-center">
          <Box className="flex-grow h-px bg-gray-300" />
          <Text className="mx-4">or</Text>
          <Box className="flex-grow h-px bg-gray-300" />
        </Flex>
        <button className="bg-white text-gray-700 py-2 rounded border border-gray-300 mt-4 flex items-center justify-center">
          <img src="/placeholder.png" alt="Google" className="mr-2" />
          Sign up with Google
        </button>
        <Text className="mt-4 text-center">
          Already have an account?{" "}
          <a href="#" className="text-teal-500">
            Log In
          </a>{" "}
          your account.
        </Text>
      </Flex>
    </Flex>
  );
};
export default ImageComponent;
