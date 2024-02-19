import { getNewsletters } from "app/actions/newslettersActions";
import { NewsletterContainer } from "app/containers/NewsletterContainer";

export default async function NewslettersPage() {

  const newsletters = await getNewsletters()

  return (
    <main>
      <NewsletterContainer newsletters={newsletters} />
    </main>
  );
}