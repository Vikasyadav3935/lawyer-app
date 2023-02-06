import {
  Heading,
  Image,
  Text,
  Stack,
  Divider,
  Button,
  ButtonGroup,

} from "@chakra-ui/react";
import React from "react";
import { Card,  CardBody, CardFooter, Box } from "@chakra-ui/react";
import {useState,useEffect} from 'react';

const Home = () => {
    const [data,setData]=useState();


    const getData=()=>{
        fetch(`http://localhost:3004/divorced`)
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
      getData()
    },[])
  
  return (
    <div>
      <Heading>Divorced Lawyer</Heading>
      <Box display={"flex"} flexDirection="row" justifyContent={"space-around"}>
        { data && data.map((el) => (
           
          <Card maxW="sm">
            
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name}</Heading>
                <Text>I am Lawyer</Text>
                <Text color="blue.600" fontSize="2xl">
                  Rs {el.charge}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Book now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                   {el.slot.length}
             {/* {el.slot.map(el=>(
                <div>{el}</div>
             ))} */}
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Home;

const divorced = [
  {
    name: "Abhishek",
    charge: 600,
    image: "",
  },
  {
    name: "Prateek",
    charge: 600,
  },
  {
    name: "Aman",
    charge: 600,
  },
];
