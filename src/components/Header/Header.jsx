import './Header.scss';

export const Header = () => (
  <header
    className="header"
  >
    <div className="header__nav nav">
      <div className="nav__logo">
        SHOP.ua
      </div>

      <img
        className='nav__menu'
        src="https://img.icons8.com/?size=100&id=36389&format=png&color=ffffff"
        alt="menu" />
    </div>
  </header>
)