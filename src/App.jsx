import "./styles/general.scss";
import { Outlet } from "react-router-dom";

import { QuizProvider } from "./context/QuizContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <QuizProvider>
      <div className="main_wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </QuizProvider>
  );
};
