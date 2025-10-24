import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useThemeContext();
  return (<div className={theme === "dark" ? "app dark-theme" : "app"}>
    <Header />
    <Content />
    <Footer />
  </div>
  )
}

export default App
