import { useState } from 'react'
import Item from './components/Item/Item'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const data = [
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sssh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
    { name: 'sh', link: 'youtube.com' },
  ]
  return (
    <>
<Item data={data}/>
    </>
  )
}

