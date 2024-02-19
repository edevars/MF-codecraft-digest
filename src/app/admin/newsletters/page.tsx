import { getNewsletters } from "app/actions/newslettersActions";


export default async function NewslettersPage() {

  const newsletters = await getNewsletters()

  return (
    <div>
      <h1>Newsletters</h1>
      
    </div>
  );
}