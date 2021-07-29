import React from 'react';
// import Home from './pages/home';
import Canvas from './pages/canvas';
import Header from './components/header';
import UserGallery from './pages/userGallery';
import BtmNav from './components/btmNav';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Canvas />;
    }
    if (route.path === 'userGallery') {
      return (
       <>
        <UserGallery />
        <BtmNav />
      </>
      );
    }
  }

  render() {
    return (
    <div className="topDiv">
      <Header />
      { this.renderPage() }
    </div>
    );
  }
}
