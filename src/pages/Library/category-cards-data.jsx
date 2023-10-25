import { 
    GiMagicAxe,
    GiRobotGolem,
} from "react-icons/gi";
import {
    FaHeartbeat,
    FaTheaterMasks,
    FaFeatherAlt
} from "react-icons/fa";
import { GrHelpBook } from "react-icons/gr";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { PiSkull } from "react-icons/pi";
import { LiaAtomSolid } from "react-icons/lia";

const categoriesData = [
    {
        title: "Fantasy",
        icon: <GiMagicAxe/>,
        color: "#800080",
    },
    {
        title: "Romance",
        icon: <FaHeartbeat/>,
        color: "#e22794",
    },
    {
        title: "Biography",
        icon: <BsClockHistory/>,
        color: "#8cd811",
    },
    {
        title: "Sci-Fi",
        icon: <GiRobotGolem/>,
        color: "#93B3FF",
    },
    {
        title: "Thriller",
        icon: <AiOutlineThunderbolt/>,
        color: "#8f115a",
    },
    {
        title: "Theater",
        icon: <FaTheaterMasks/>,
        color: "#01648C",
    },
    {
        title: "Poetry",
        icon: <FaFeatherAlt/>,
        color: "#FF649A",
    },
    {
        title: "Horror",
        icon: <PiSkull/>,
        color: "#262626",
    },
    {
        title: "Science",
        icon: <LiaAtomSolid/>,
        color: "#00C9AC",
    },
    {
        title: "Philosophy",
        icon: <GrHelpBook/>,
        color: "#5d6b66",
    },
];

export default categoriesData;

/**
 * Fantasy : GiMagicAxe
 * Philosophy : GrHelpBook
 * Romance : FaHeartbeat
 * Science Fiction : GiRobotGolem
 * Thriller : AiOutlineThunderbolt
 * Biography : BsClockHistory
 * Theater : FaTheaterMasks
 * Poetry : FaFeatherAlt
 * Horror : PiSkull
 * Science : GiAtom
 */