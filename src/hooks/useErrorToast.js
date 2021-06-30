import { useToast } from "@chakra-ui/react";

export default function useErrorToast() {
  const toast = useToast();

  return (error) => {
    toast({
      description: error,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };
}
