import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { TailwindContainer } from "./tailwind-container";

interface MagicLinkEmailProps {
  logoUrl: string;
  name: string;
  code: string;
  link: string;
}

export const MagicLinkEmail = ({
  logoUrl,
  name,
  code,
  link,
}: MagicLinkEmailProps) => {
  const previewText = "Link mágico para acesso";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <TailwindContainer>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-functional-medium rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${logoUrl}`}
                width="40"
                height="40"
                alt="Life & Wealth Network"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Login com link mágico
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Olá {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Para simplificar o seu login, use o código abaixo para acessar.
            </Text>
            <code className="inline-block p-4 w-[90.5%] bg-functional-light rounded border border-solid border-light-border text-functional-dark-medium text-center">
              {code}
            </code>
            <Text className="text-black text-[14px] leading-[24px]">
              Ou clique no botão abaixo para acessar.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-primary rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={link}
              >
                Link Mágico
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Caso não funcione o link acima, copie e cole o link abaixo no seu
              navegador:
            </Text>
            <Link href={link} className="text-blue-600 no-underline text-xs">
              {link}
            </Link>
            <Hr className="border border-solid border-functional-medium my-[26px] mx-0 w-full" />
            <Text className="text-functional-dark-light text-[12px] leading-[24px]">
              Se você não solicitou este link, ignore este email.
            </Text>
          </Container>
        </Body>
      </TailwindContainer>
    </Html>
  );
};

MagicLinkEmail.PreviewProps = {
  logoUrl: "/static/vercel-logo.png",
  name: "Bruno",
  code: "123456",
  link: "https://vercel.com/teams/invite/foo",
} as MagicLinkEmailProps;

export default MagicLinkEmail;
