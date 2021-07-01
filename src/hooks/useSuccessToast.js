import { useToast } from "@chakra-ui/react";

export default function useErrorToast() {
  const toast = useToast();

  return (message) => {
    toast({
      description: message,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
}
