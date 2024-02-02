import MainMenu from './MainMenu.jsx';

export default function Header(props) {
  return (
    <>
      <h1>Site Logo</h1>
      <h2>Welcome to {props.title}</h2>
      <MainMenu />
    </>
  );
}
