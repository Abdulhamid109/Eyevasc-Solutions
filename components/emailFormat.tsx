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
          <Text style={{ padding: '8px' }}>Name: {name}</Text>
          <Text style={{ padding: '81px' }}>Treatment: {treatment}</Text>
          <Text style={{ padding: '8px' }}>Phone No: {phoneno}</Text>
          <Text style={{ padding: '8px' }}>Date of booking: {date}</Text>
          <Text style={{ padding: '8px' }}>Time of booking: {time}</Text>
        </Section>
      </Body>
    </Html>
  );
};

export default EmailFormat;
