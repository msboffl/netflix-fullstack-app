import Home from "./pages/Home/Home";
export default function App({children}) {
  return (
    <>
    <Home>
      {children}
    </Home>
    </>
  );
}
