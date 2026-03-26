import { Html, Head, Body, Heading, Section, Text } from "@react-email/components";

interface EmailFormatProps {
  name: string;
  location: string;
  phoneno: string;
  status: boolean;
}

const CouponEmailFormat = ({ name, location, phoneno, status }: EmailFormatProps) => {
  return (
    <Html>
      <Head />
      <Body>
        <Heading as="h1">Patient Details</Heading>
        <Section style={{ textAlign: 'center' }}> 
          <Text style={{ padding: '4px' }}>Name: {name}</Text>
          <Text style={{ padding: '4px' }}>Location: {location}</Text>
          <Text style={{ padding: '4px' }}>Phone No: {phoneno}</Text>
          <Text style={{ padding: '4px' }}>Interested In Surgery: {status}</Text>
        </Section>
      </Body>
    </Html>
  );
};

export default CouponEmailFormat;
