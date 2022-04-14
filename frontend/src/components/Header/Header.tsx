import { Flex, Image, Link as ChakraLink, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { SearchBar } from "../SearchBar/SearchBar";
import { SideBar } from "../Sidebar/Sidebar";


export function Header() {
  const links = [
    {
      name: "INICIO",
      link: "/",
    },
    {
      name: "FAVORITOS",
      link: "/",
    },
    {
      name: `NOVO LINK`,
      link: `/`,
    },
  ];
  return (
    <Flex
			px="8"
			py="4"
      justifyContent="center"
      bgColor="transparent"
      flexDirection="column"
      w="100%"

		
    >
      <Flex justifyContent="flex-start" align="center">
        <Image
          boxShadow="sm"
          borderRadius="sm"
          src={`/images/logo.jpg`}
          height="100px"
          width="100px"
          alt="logo"
					mr="4"
        />
        <Flex h="45px" align="center">
          <HStack spacing={8} align="center" justify="center">
            {links.map((link: any, index: number) => {
              return (
                <Link key={index} href={link.link} passHref >
                  <ChakraLink
                  ml="4"
										fontWeight="600"
                    boxShadow="sm"
                    color="hsla(0, 0%, 100%, 0.8)"
                    position="relative"

                    _after={{
                      transition: `all 0.4s ease-in-out`,
                      content: `''`,
                      /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                      // outline: `1px solid transparent`,
                      width: `0`,
                      // height: `2px`,
                      position: `absolute`,
                      top: 6,
                      left: -2,
                      bg: "red.main",
                      // zIndex: -1,
                    }}
                    _hover={{
											color:'red.main',
                      _after: {
												height: `2px`,
												// outline: `1px solid red`,
                        width: `40%`,
                      },
                      
                    }}
                  >
                    {link.name}
                  </ChakraLink>
                </Link>
              );
            })}
          </HStack>
        </Flex>
				<Flex ml="auto" align="center">
						<SearchBar/>
						<SideBar/>

				</Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}
