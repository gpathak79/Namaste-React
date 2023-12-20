import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
const Header = () => (
   
    <div className='container'>
        <div className='row'>
            <div className="col-sm-5 logo">
                
            <img src="https://img.freepik.com/premium-vector/mascot-character-design-standing-hotdog-badge_697324-13003.jpg?t=st=1692847728~exp=1692848328~hmac=d88fd86411a811f27dd8446efd53ecb3f5ff1b069fca0522911e9d1f473deac0" alt="" />
            </div>
            <div className="col-sm-3 search">
            <input type="text" />
        <button> Search </button>
            </div>
            <div className="col-sm-4 png">
            <img align="middle" src="https://img.icons8.com/?size=1x&id=42384&format=png" alt="" />
            </div>
        </div>
    </div>
     
    
)

export default Header;