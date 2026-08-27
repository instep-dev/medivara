import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Text
} from "@react-email/components";

export interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  fileName?: string;
  logoUrl: string;
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
  fileName,
  logoUrl
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
            src={logoUrl}
            alt="Medivara"
              width="280"
              style={styles.logo}
            />
          </Section>

          <Section style={styles.content}>
            <Text style={styles.label}>From</Text>
            <Text style={styles.value}>
              <strong>{name}</strong>{" "}
              <Link href={`mailto:${email}`} style={styles.link}>
                &lt;{email}&gt;
              </Link>
            </Text>

            <Text style={styles.label}>Subject</Text>
            <Text style={styles.subject}>{subject}</Text>

            <Text style={styles.label}>Message</Text>
            <Section style={styles.message}>
              <Text style={styles.messageText}>{message}</Text>
            </Section>

            {fileName && (
              <Text style={styles.attachment}>
                Attachment: <strong>{fileName}</strong>
              </Text>
            )}
          </Section>

          <Hr style={styles.rule} />
          <Text style={styles.footer}>
            Reply to this email to contact the sender directly.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f4f7f6",
    color: "#102a2e",
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 0,
    padding: "32px 16px"
  },
  container: {
    backgroundColor: "#ffffff",
    border: "1px solid #d8e5e2",
    margin: "0 auto",
    maxWidth: "600px",
    padding: "32px"
  },
  header: {
    borderBottom: "3px solid #19b5a5",
    paddingBottom: "18px"
  },
  logo: {
    display: "block",
    height: "auto",
    maxWidth: "280px",
    width: "100%"
  },
  content: {
    paddingTop: "24px"
  },
  label: {
    color: "#63777a",
    fontSize: "12px",
    margin: "0 0 6px"
  },
  value: {
    fontSize: "16px",
    margin: "0 0 22px"
  },
  link: {
    color: "#0b8f84"
  },
  subject: {
    fontSize: "16px",
    fontWeight: 700,
    margin: "0 0 22px"
  },
  message: {
    backgroundColor: "#f4f7f6",
    borderLeft: "4px solid #ef765d",
    padding: "14px 16px"
  },
  messageText: {
    fontSize: "15px",
    lineHeight: "1.6",
    margin: 0,
    whiteSpace: "pre-wrap"
  },
  attachment: {
    color: "#63777a",
    fontSize: "13px",
    margin: "22px 0 0"
  },
  rule: {
    borderColor: "#d8e5e2",
    margin: "28px 0 0"
  },
  footer: {
    color: "#63777a",
    fontSize: "12px",
    lineHeight: "1.5",
    margin: "18px 0 0"
  }
};
