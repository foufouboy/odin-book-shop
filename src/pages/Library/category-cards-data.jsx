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
        value: "fantasy",
        icon: <GiMagicAxe/>,
        color: "#800080",
    },
    {
        title: "Romance",
        value: "romance",
        icon: <FaHeartbeat/>,
        color: "#e22794",
    },
    {
        title: "SciFi",
        value: "science_fiction",
        icon: <GiRobotGolem/>,
        color: "#93B3FF",
    },
    {
        title: "Biography",
        value: "biography",
        icon: <BsClockHistory/>,
        color: "#8cd811",
    },
    {
        title: "Thriller",
        value: "thriller",
        icon: <AiOutlineThunderbolt/>,
        color: "#8f115a",
    },
    {
        title: "Theater",
        value: "theater",
        icon: <FaTheaterMasks/>,
        color: "#01648C",
    },
    {
        title: "Poetry",
        value: "poetry",
        icon: <FaFeatherAlt/>,
        color: "#FF649A",
    },
    {
        title: "Horror",
        value: "horror",
        icon: <PiSkull/>,
        color: "#262626",
    },
    {
        title: "Science",
        value: "science",
        icon: <LiaAtomSolid/>,
        color: "#00C9AC",
    },
    {
        title: "Philosophy",
        value: "philosophy",
        icon: <GrHelpBook/>,
        color: "#5d6b66",
    },
];

export function getCategoryName(category) {
    const categoryNames = {
        "philosophy": "Philosophy",
        "science": "Science",
        "romance": "Romance",
        "science_fiction": "Science Fiction",
        "horror": "Horror",
        "poetry": "Poetry",
        "fantasy": "Fantasy",
        "biography": "Biography",
        "thriller": "Thriller",
        "theater": "Theater",
    };

    if (categoryNames[category]) {
        return categoryNames[category];
    } else {
        return "Everything";
    }
}

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