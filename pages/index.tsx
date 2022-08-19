import type { NextPage } from 'next'


const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_TEST)
  return (
    <div>123S</div>
  )
}

export default Home
