import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { DoptAiProvider } from "@dopt/ai-assistant-react";
import ContextualAssistant from "@dopt/react-contextual-assistant";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DoptAiProvider
      //A identifier for a user that has been identified to Dopt
      userId="$USER_ID"
      //An AI API key
      apiKey="$YOUR_AI_API_KEY"
    >
      <ContextualAssistant.Provider assistant="dopt">
        <ContextualAssistant.Highlight>
          <App />
        </ContextualAssistant.Highlight>
      </ContextualAssistant.Provider>
    </DoptAiProvider>
  </React.StrictMode>
);
