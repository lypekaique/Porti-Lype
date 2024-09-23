import 'aos/dist/aos.css';
import './style.scss'
import '../principais.scss'


const Header = () => {
    return (
            <div>
                <div className="header">
                <div className="menu-toggle">
                    <input type="checkbox" className='nav__checkbox' id='nav-toggle' />
                    <label className ='nav__button' htmlFor='nav-toggle'>
                        <span className='nav__icon'></span>
                    </label>
                    <div className='navigation'>
                        <div className='small_menu'></div>
                        <div ></div>
                    </div>
                    </div>
            </div>
                
        </div>
    )
  };

   export default Header;