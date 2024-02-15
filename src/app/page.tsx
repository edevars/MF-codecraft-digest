import { HomeHeader } from "app/components/home/HomeHeader"
import { SuscriptionForm } from "app/components/home/SuscriptionForm"

export default function Home(){
  return(
    <main style={{
      display: "block",
      margin: '0 auto',
      padding: 12,
      maxWidth: "420px"
    }}>
      <HomeHeader />
      <SuscriptionForm />
    </main>
  )
}