import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { GoGitCompare } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { LiaTruckSolid } from "react-icons/lia";
import { PiHandshakeLight } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoCreditCard } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { MdArrowBackIos } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";


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
export const Guarantee = ({className}) => {
    return <PiHandshakeLight className = {className}/>
}
export const Shipping = ({className}) => {
    return <LiaTruckSolid className = {className}/>
}
export const Warranty = ({className}) => {
    return <SlBadge className = {className}/>
}
export const Support = ({className}) => {
    return <TfiHeadphoneAlt className = {className}/>
}
export const Payment = ({className}) => {
    return <GoCreditCard className = {className}/>
}
export const CloseIcon = ({className}) => {
    return <AiOutlineCloseCircle className = {className}/>
}
export const MinusIcon = ({className}) => {
    return <FaMinus className = {className}/>
}
export const PlusIcon = ({className}) => {
    return <LuPlus className = {className}/>
}
export const RightArrowIcon = ({className}) => {
    return <FaArrowRight className = {className}/>
}
export const GoogleIcon = ({className}) => {
    return <FaGoogle className = {className}/>
}
export const AppleIcon = ({className}) => {
    return <IoLogoApple className = {className}/>
}
export const LogoutIcon = ({className}) => {
    return <VscSignOut className = {className}/>
}
export const BackArrow = ({className}) => {
    return <MdArrowBackIos className = {className}/>
}
export const ThreeDots = ({className}) => {
    return <BsThreeDotsVertical className = {className}/>
}
export const Delivery = ({className}) => {
    return <CiDeliveryTruck className = {className}/>
}
