import { Container, Flex, Heading, Box, Center } from "@chakra-ui/react";
import { MarkAsRead } from "../Buttons/MarkAsRead";

export function Header() {
   return (
      <Flex w="100%" justifyContent="space-between" alignItems="flex-end" as="header">
         <Flex as="section">
            <Heading w="auto" fontSize={{ base: 'md', md: 'lg' }} color="blackFont" fontWeight="extrabold" as="h3" marginRight="0.675rem">
               Notifications
            </Heading>

            <Heading bg="strongBlue" w="32px" display={{ base: 'none', sm: 'block' }} padding="0.25rem" borderRadius="0.375rem" color="white" fontSize={{ base: "16px", md: 'sm' }} as="h4">
               <Center>
                  3
               </Center>
            </Heading>
         </Flex>

         <Flex w="100%" justifyContent="flex-end" as="section">
            <MarkAsRead color={"textFont"}>
               Mark all as read
            </MarkAsRead>
         </Flex>
      </Flex>
   );
};