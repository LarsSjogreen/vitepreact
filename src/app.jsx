import { Compo } from './Compo/compo'

export function App(props) {
  return (
    <>
      <p>Hello worldo!</p>
      <p>
        <Compo/>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
