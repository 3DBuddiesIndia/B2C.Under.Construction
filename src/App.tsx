import './App.scss'
import 'bootstrap/scss/bootstrap.scss'
// import '../node_modules/bootstrap/scss/utilities/_spacing.scss'
// import './assets/styles/css/custom.css'
// import './assets/styles/scss/coming-soon.scss'

function App() {

  return (
    <div className="d-flex flex-column ml-550">
        <header className="pt--30 pb--30">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {/* <a className="cs-logo">3D Buddies</a> */}
                    </div>
                </div>
            </div>
        </header>
        <div className="container cs-content__font">
            <div className="row">
                <div className="col-lg-9">
                    <h3 className="cs-content__subtitle mb--10">COMING SOON</h3>
                    <h2 className="cs-content__title">
                        We are building <br/> something awesome!!
                    </h2>
                </div>
            </div>
        </div>
        <footer className="pb--25">
            <div className="cs-copyright text-right">© 2024 
                <a href="https://www.3dbuddies.in/" target="_blank" rel="noopener noreferrer"> 3D Buddies</a>, all rights reserved
            </div>
        </footer>
    </div>
  )
}

export default App
