export const getColor = (type) => {
    switch (type) {
        case "bug":
            return "#aedf78";
        case "water":
            return "#87BEEA";
        case "grass":
            return "#81F781";
        case "fire":
            return "#F36565";
        case "normal":
            return "#BABEBA";
        case "poison":
            return "#611380";
        case "flying":
            return "#5eb9b2";
        default:
            return "";
    }
};

export const getColorEtiqueta = (type) => {
    switch (type) {
        case "bug":
            return "#90D390";
        case "water":
            return "#2da8ff";
        case "grass":
            return "#07B007";
        case "fire":
            return "#D71313";
        case "normal":
            return "#8e8989";
        case "poison":
            return "#6923AB";
        case "flying":
            return "#EF46B7";
        default:
            return "";
    }
};
