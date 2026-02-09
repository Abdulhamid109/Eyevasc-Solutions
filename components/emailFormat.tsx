import { Html, Head, Body, Heading, Section, Text } from "@react-email/components";

interface EmailFormatProps {
  name: string;
  treatment: string;
  phoneno: string;
  date: string;
  time: string;
}

const EmailFormat = ({ name, treatment, phoneno, date, time }: EmailFormatProps) => {
  return (
    <Html>
      <Head />
      <Body>
        <Heading as="h1">Patient Details</Heading>
        <Section style={{ textAlign: 'center' }}> 
          <Text style={{ padding: '4px' }}>Name: {name}</Text>
          <Text style={{ padding: '4px' }}>Treatment: {treatment}</Text>
          <Text style={{ padding: '4px' }}>Phone No: {phoneno}</Text>
          <Text style={{ padding: '4px' }}>Date of booking: {date}</Text>
          <Text style={{ padding: '4px' }}>Time of booking: {time}</Text>
        </Section>
      </Body>
    </Html>
  );
};

export default EmailFormat;
