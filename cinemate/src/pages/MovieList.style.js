import styled from "styled-components";
// import BannerBg from 'common/assets/image/app-minimal/banner-bg-1-1.png';
// import BannerBg from "../superuser/common/assets/image/app-minimal/banner-bg-1-1.png";
import BannerBg from "../assets/Featured Image Header.png";

const BannerArea = styled.section`
  background-color: #f7f7f7;
  background-image: url(${BannerBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  position: relative;
  @media (max-width: 1600px) {
    padding-top: 210px;
    padding-bottom: 170px;
  }
  @media (max-width: 1199px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
  @media (max-width: 575px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .Container {
    display: flex;
  }
  h2 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 62px;
    line-height: 1.21;
    letter-spacing: -2px;
    color: #00000;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
      font-size: 40px;
      max-width: 414px;
    }
    @media (max-width: 574px) {
      font-size: 30px;
      max-width: 100%;
      line-height: 40px;
    }
  }
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 2.11;
    letter-spacing: -0.3px;
    color: #00000;

    margin-bottom: 0;
    max-width: 515px;
    opacity: 0.8;
    @media (max-width: 1600px) {
      font-size: 16px;
      max-width: 466px;
    }
  }
  .ButtonWrap {
    display: flex;
    margin-top: 35px;
    align-items: center;
    @media (max-width: 1600px) {
      margin-top: 20px;
    }
    @media (max-width: 575px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    span {
      font-weight: 500;
      font-size: 15px;
      color: #ffffff;
      opacity: 0.6;
      line-height: 1;
      margin-bottom: 0;
      margin-left: 25px;
      @media (max-width: 1600px) {
        font-size: 14px;
      }
      @media (max-width: 575px) {
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
  .Button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    line-height: 1;
    padding: 21px 29px;
    transition: all 500ms ease;

    /* Default Styles (can be set to either primary or outline based on preference) */
    background-color: #23374d;
    color: #ffffff;
    border: none;

    /* Primary Variant */
    ${(props) =>
      props.variant === "primary" &&
      `
    background-color: #23374d;
    color: #ffffff;
    border: none;
  `}

    /* Outline Variant */
  ${(props) =>
      props.variant === "outline" &&
      `
    background-color: transparent;
    color: #23374d;
    border: 2px solid #23374d;
  `}

  &:hover {
      background-color: ${(props) =>
        props.variant === "outline" ? "#23374d" : "#ffffff"};
      color: ${(props) =>
        props.variant === "outline" ? "#ffffff" : "#23374d"};
    }
  }
  .bannerMoc {
    position: absolute;
    bottom: 145px;
    right: 70px;
    @media (max-width: 1600px) {
      max-width: 750px;
      right: 43px;
    }
    @media (max-width: 1199px) {
      max-width: 500px;
    }
    @media (max-width: 768px) {
      max-width: 350px;
      right: 20px;
      bottom: 170px;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }
`;
export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 1;
  padding: 21px 29px;
  transition: all 500ms ease;

  /* Default Styles (can be set to either primary or outline based on preference) */
  background-color: #23374d;
  color: #ffffff;
  border: none;

  /* Primary Variant */
  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: #23374d;
    color: #ffffff;
    border: none;
  `}

  /* Outline Variant */
  ${(props) =>
    props.variant === "outline" &&
    `
    background-color: transparent;
    color: #23374d;
    border: 2px solid #23374d;
  `}

    /* Outline Variant */
    ${(props) =>
    props.variant === "primarySmall" &&
    `
    background-color: transparent;
    color: #23374d;
    border: 2px solid #23374d;
    padding:12px;
    font-size: 13px;
  `}

  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "#23374d" : "#ffffff"};
    color: ${(props) => (props.variant === "outline" ? "#ffffff" : "#23374d")};
  }
`;

export default BannerArea;
