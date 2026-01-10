import {
    FaGraduationCap,
    FaTruck,
    FaCoins,
    FaCartShopping,
    FaDumbbell,
    FaHeartPulse,
    FaGamepad,
    FaHouse,
    FaBurger,
    FaCarSide,
    FaBroom,
    FaShirt,
    FaBoxOpen,
    FaIndustry,
    FaUtensils,
    FaBuilding,
} from "react-icons/fa6";
import { BiSolidConversation } from "react-icons/bi";
import { MdOutlineSocialDistance, MdSportsTennis } from "react-icons/md";
import { BsHeadsetVr } from "react-icons/bs";
import { RiTaxiFill } from "react-icons/ri";

export const industriesData = [
    { title: "Construction & Realty", icon: <FaBuilding />, href: "/industry/construction-and-realty" },
    { title: "Food & Beverage", icon: <FaUtensils />, href: "/industry/food-and-beverage" },
    { title: "Manufacturing", icon: <FaIndustry />, href: "/industry/manufacturing" },
    { title: "Education", icon: <FaGraduationCap />, href: "/industries/education" },
    { title: "Logistics", icon: <FaTruck />, href: "/industries/logistics" },
    { title: "Finance", icon: <FaCoins />, href: "/industries/finance" },
    { title: "Ecommerce", icon: <FaCartShopping />, href: "/industries/ecommerce" },
    { title: "Fitness", icon: <FaDumbbell />, href: "/industries/fitness" },
    { title: "Dating App Development", icon: <BiSolidConversation />, href: "/industries/dating" },
    { title: "Game Development", icon: <FaGamepad />, href: "/industries/game-dev" },
    { title: "Real Estate", icon: <FaHouse />, href: "/industries/real-estate" },
    { title: "Healthcare", icon: <FaHeartPulse />, href: "/industries/healthcare" },
    { title: "Social Networking", icon: <MdOutlineSocialDistance />, href: "/industries/social" },
    { title: "Sports Betting", icon: <MdSportsTennis />, href: "/industries/sports-betting" },
    { title: "AR/VR", icon: <BsHeadsetVr />, href: "/industries/ar-vr" },
];

export const onDemandAppsData = [
    { title: "Food Delivery", icon: <FaBurger />, href: "/ondemand/food-delivery" },
    { title: "Taxi Booking", icon: <RiTaxiFill />, href: "/ondemand/taxi-booking" },
    { title: "Gojek Clone App", icon: <FaBoxOpen />, href: "/ondemand/gojek-clone" },
    { title: "Restaurant management", icon: <FaBurger />, href: "/ondemand/restaurant" },
    { title: "Grocery Delivery", icon: <FaCartShopping />, href: "/ondemand/grocery" },
    { title: "Home Services", icon: <FaBroom />, href: "/ondemand/home-services" },
    { title: "Ice Cream Delivery App", icon: <FaTruck />, href: "/ondemand/ice-cream" },
    { title: "Carpooling Apps", icon: <FaCarSide />, href: "/ondemand/carpooling" },
    { title: "Pickup & Delivery", icon: <FaTruck />, href: "/ondemand/pickup-delivery" },
    { title: "Beauty & Salon Booking", icon: <FaHeartPulse />, href: "/ondemand/beauty" },
    { title: "Laundry Service", icon: <FaShirt />, href: "/ondemand/laundry" },
    { title: "Marketplace Solutions", icon: <FaCartShopping />, href: "/ondemand/marketplace" },
];

export const servicesData = [
    { title: "Web Development", icon: <FaHouse />, href: "/services/web-development" },
    { title: "Mobile App Development", icon: <FaGamepad />, href: "/services/mobile-app-development" },
    { title: "UI/UX Design", icon: <FaHeartPulse />, href: "/services/ui-ux-design" },
    { title: "Digital Transformation", icon: <FaCoins />, href: "/services/digital-transformation" },
];
