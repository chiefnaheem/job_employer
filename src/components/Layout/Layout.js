import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from '../../pages/Footer';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;