import { Button, Flex, Progress, chakra, Icon, Box, Text } from "@chakra-ui/react";
import { Teacher } from "../../styles/components/Icon";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      d="M16.8311 15.6402C17.5011 15.2002 18.3811 15.6802 18.3811 16.4802V17.7702C18.3811 19.0402 17.3911 20.4002 16.2011 20.8002L13.0111 21.8602C12.4511 22.0502 11.5411 22.0502 10.9911 21.8602L7.80109 20.8002C6.60109 20.4002 5.62109 19.0402 5.62109 17.7702V16.4702C5.62109 15.6802 6.50109 15.2002 7.16109 15.6302L9.22109 16.9702C10.0111 17.5002 11.0111 17.7602 12.0111 17.7602C13.0111 17.7602 14.0111 17.5002 14.8011 16.9702L16.8311 15.6402Z"
      fill="black"
    />
    <path
      d="M19.9795 6.46055L13.9895 2.53055C12.9095 1.82055 11.1295 1.82055 10.0495 2.53055L4.02953 6.46055C2.09953 7.71055 2.09953 10.5405 4.02953 11.8005L5.62953 12.8405L10.0495 15.7205C11.1295 16.4305 12.9095 16.4305 13.9895 15.7205L18.3795 12.8405L19.7495 11.9405V15.0005C19.7495 15.4105 20.0895 15.7505 20.4995 15.7505C20.9095 15.7505 21.2495 15.4105 21.2495 15.0005V10.0805C21.6495 8.79055 21.2395 7.29055 19.9795 6.46055Z"
      fill="black"
    />
  </Icon>
);
export function CertificadoButton() {
  return (
    <Flex >
      <Flex direction="column" w="70%">,
      <Flex align="center" justify="space-between" >

        <Button
        _focus={{
          borderWidth: 'none'
        }}
        _hover={{
          bg:'blue.500',
        }} variant="outline" fontSize="sm"
        leftIcon={<Teacher />} w="200px">
          Baixar Certificado
        </Button> 
        <Text>100% concluido</Text>
      </Flex>
        <Box mt="6">
          <Progress
    
            alignSelf="center"
            borderRadius="4px"
            value={20}
            size="xs"
            color="red.main"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
