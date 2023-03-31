import Button from '../../style';

export function Footer() {
  const onclick = e => {
    console.log(e.target);
  };
  return (
    <>
      <Button
        value="Search"
        nameButton="buttonSearch"
        onclick={onclick}
      ></Button>
      <Button
        value="Sing In"
        nameButton="buttonSingIn"
        onclick={onclick}
      ></Button>
      <Button
        value="Registration"
        nameButton="buttonRegistration"
        onclick={onclick}
      ></Button>
      <Button
        value="Log Out"
        nameButton="buttonLogOutClipPath"
        onclick={onclick}
      ></Button>
      <Button
        value="Other categories"
        nameButton="buttonOtherCategories"
        onclick={onclick}
      ></Button>
    </>
  );
}

export default Footer;
