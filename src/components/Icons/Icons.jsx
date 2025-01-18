import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { GoGitCompare } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";


export const CartIcon = ({ className }) => {
  return <BsCart2 className={className} />;
};
export const LikeIcon = ({ className }) => {
  return <LuHeart className={className} />;
};

export const CompareIcon = ({className}) => {
    return <GoGitCompare className = {className}/>
}

export const CopyIcon = ({className}) => {
    return <IoCopyOutline className = {className}/>
}

export const FacebookIcon = ({className}) => {
    return <CiFacebook className = {className}/>
}
export const InstagramIcon = ({className}) => {
    return <IoLogoInstagram className = {className}/>
}

