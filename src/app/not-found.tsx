import { Body, ButtonLink, Container, Heading, Stack } from "@/components/ui";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Stack gap="lg" align="center" className={styles.wrap}>
      <Container size="narrow" padding="default">
        <Stack gap="md" align="center">
          <Heading as="h1" size="sectionLg" align="center">
            Page not found
          </Heading>
          <Body tone="muted" align="center" maxWidth="md">
            The page you’re looking for doesn’t exist or has been moved.
          </Body>
          <div className={styles.actions}>
            <ButtonLink href="/" variant="primary">
              Back to home
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
}
