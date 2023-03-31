import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <nav>
      <a href="/So Yummy" aria-current="page">
        <img src={logo} alt="logo" width={40} height={40} />
      </a>
    </nav>
  );
};

export default Logo;
