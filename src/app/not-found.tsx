import { Body, ButtonLink, Container, Heading, Stack } from "@/components/ui";
import bind from "classnames/bind";

import styles from "./not-found.module.css";
const cx = bind.bind(styles);

export default function NotFound() {
  return (
    <Stack gap="lg" align="center" className={cx("wrap")}>
      <Container size="narrow" padding="default">
        <Stack gap="md" align="center">
          <Heading as="h1" size="sectionLg" align="center">
            Page not found
          </Heading>
          <Body tone="muted" align="center" maxWidth="md">
            The page you’re looking for doesn’t exist or has been moved.
          </Body>
          <div className={cx("actions")}>
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
