import { StudioClientPage } from './studio-client-page';

export { metadata, viewport } from 'next-sanity/studio';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <StudioClientPage />;
}
