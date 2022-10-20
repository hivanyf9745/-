import { Fragment } from "react";
import Button from "@mui/joy/Button";
import "./Main-nav.styls.scss";

const MainNav = () => {
  return (
    <Fragment>
      <div className='mainNav-container'>
        <div className='mainNav-opt'>
          <a href='/'>登陆</a>
        </div>
        <div className='mainNav-opt'>
          <a href='/'>注册</a>
        </div>
        <div className='mainNav-opt'>
          <a href='/'>我的账户</a>
        </div>
      </div>
      <div className='mainNav-wrapper'>
        <img src='/logo.png/' alt='logo' />
        <div className='mainNav-links'>
          <Button
            variant='solid'
            size='lg'
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1b73b0",
              backgroundColor: "#F1EDE0",
              borderRadius: "lg",
              boxShadow: "md",
            }}>
            家具｜家居
          </Button>
          <Button
            variant='solid'
            size='lg'
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1b73b0",
              backgroundColor: "#F1EDE0",
              borderRadius: "lg",
              boxShadow: "md",
            }}>
            电子｜电器
          </Button>
          <Button
            variant='solid'
            size='lg'
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1b73b0",
              backgroundColor: "#F1EDE0",
              borderRadius: "lg",
              boxShadow: "md",
            }}>
            图书｜学习
          </Button>
          <Button
            variant='solid'
            size='lg'
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1b73b0",
              backgroundColor: "#F1EDE0",
              borderRadius: "lg",
              boxShadow: "md",
            }}>
            运动｜休闲
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default MainNav;
