import { Box } from "@chakra-ui/layout";

interface IContentProps {
   children?: string | React.ReactNode;
}

export function Content({ children }: IContentProps) {
   return (
      <Box bg="white" 
         width={{ base: '100%', md: '730px' }}
         height={{ base: '100%' }}
         padding={{ base: '2rem 2.5rem' }}
         borderRadius={{ base: '0', md: '0.938rem' }}>
         {children}
      </Box>
   );
}