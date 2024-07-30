import { useNavigate } from "react-router";
import { logo } from "../../assets";
import "./footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-div">
        <div className="logo-footer">
          <img src={logo} alt="" />
          <p>
            Specializes in providing high-quality, stylish productsfor your
            wardrobe
          </p>
        </div>
        <div className="contacts">
          <div className="companies">
            <h3>COMPANY</h3>
            <p onClick={() => navigate("/")}>About</p>
            <p onClick={() => navigate("/")}>Terms of Use</p>
            <p onClick={() => navigate("/")}>Policies</p>
          </div>
        </div>
      </div>
      <hr />
      <p>
        Copyright <i class="fa-regular fa-copyright"></i>2023 Attire. All rights
        reserved.
      </p>
    </footer>
  );
};
