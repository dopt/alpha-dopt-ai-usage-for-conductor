import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContextualAssistant, {
  useContextualAssistant,
} from "@dopt/react-contextual-assistant";

function App() {
  const [count, setCount] = useState(0);

  const { setActive, close, selection, answer, content, documents } =
    useContextualAssistant();

  return (
    <>
      <button onClick={() => setActive((prev) => !prev)}>
        Activate AI assistant
      </button>
      {selection && (
        <ContextualAssistant.Popover
          position="right"
          alignment="start"
          anchor={selection}
        >
          <ContextualAssistant.Content>
            <ContextualAssistant.Header>
              <ContextualAssistant.Title>
                ✨ AI assistant
              </ContextualAssistant.Title>
              <ContextualAssistant.DismissIcon onClick={() => close()} />
            </ContextualAssistant.Header>
            <ContextualAssistant.Body>
              {!content && (
                <div style={{ display: "grid", gap: 8 }}>
                  <ContextualAssistant.Skeleton />
                  <ContextualAssistant.Skeleton width="85%" />
                  <ContextualAssistant.Skeleton width="95%" />
                </div>
              )}
              <ContextualAssistant.Answer>
                {answer || content}
              </ContextualAssistant.Answer>
              <ContextualAssistant.BodyHeading>
                Sources
              </ContextualAssistant.BodyHeading>
              {!documents && <ContextualAssistant.Skeleton height={64} />}
              <ContextualAssistant.Sources>
                {documents?.map(({ url, title, id }) => (
                  <ContextualAssistant.Source key={id} url={url} index={id}>
                    {title}
                  </ContextualAssistant.Source>
                ))}
              </ContextualAssistant.Sources>
            </ContextualAssistant.Body>
          </ContextualAssistant.Content>
        </ContextualAssistant.Popover>
      )}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
