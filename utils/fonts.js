import { Inter,Playfair_Display,Fira_Code } from "next/font/google";

const InterFont = Inter({
    style: "normal",
    weights: [400, 500, 600, 700],
    subsets: ["latin-ext"],
});

const PlayfairDisplayFont = Playfair_Display({
    style: "normal",
    weights: [400, 500, 600, 700],
    subsets: ["latin-ext"],
});

const FiraCodeFont = Fira_Code({
    style: "normal",
    weights: [400, 500, 600, 700],
    subsets: ["latin-ext"],
});

const Fonts = {
    InterFont: InterFont.className,
    PlayfairDisplayFont: PlayfairDisplayFont.className,
    FiraCodeFont: FiraCodeFont.className,
}

export default Fonts;