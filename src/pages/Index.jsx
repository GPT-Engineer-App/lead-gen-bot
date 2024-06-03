import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { text: "Thank you for your message! How can I assist you further?", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Lead Generation Chatbot</Text>
        <Box borderWidth="1px" borderRadius="lg" padding={4} width="100%" height="400px" overflowY="auto">
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} bg={message.sender === "user" ? "blue.100" : "gray.100"} borderRadius="md" padding={2} marginY={1}>
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
