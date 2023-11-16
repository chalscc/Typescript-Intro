import './style.css'

import { setupCounter } from './counter.ts'
import './topics/01-basic-types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
