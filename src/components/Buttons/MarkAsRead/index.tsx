import { Button, Text } from "@chakra-ui/react";
import { IMarkAsReadProps } from "../../../shared/props/IMarkAsReadProps";

export function MarkAsRead(props: IMarkAsReadProps) {
   return (
      <Button type="button" color="textFont" _hover={{ color: 'strongBlue' }} h="30px" variant={"unstyled"} fontSize={{ base: 'xs', sm: 'xs', md: 'sm' }}>
         {props.children}
      </Button>
   );
}