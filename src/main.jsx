import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))

function Page(){
  return (
    <main>
      <header>
        <img src="/react.svg" alt="" width="40px" />
      </header>
      <h1>why i love learning react</h1>
      <ol>
        <li>it is easy</li>
        <li>will make me more employable</li>
        <li>I need money</li>
      </ol>
    </main>
  )
}

root.render(<Page/>)
