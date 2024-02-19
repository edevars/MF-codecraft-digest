import { getNewsletters } from "app/actions/newslettersActions";
import { NewsletterContainer } from "app/containers/NewsletterContainer";

export const dynamic = "force-dynamic"

export default async function NewslettersPage() {

  const newsletters = await getNewsletters()

  return (
    <main>
      <NewsletterContainer newsletters={newsletters} />
    </main>
  );
}