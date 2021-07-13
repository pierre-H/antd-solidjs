import { BookFilled as BaseBookFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BookFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBookFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-book-filled text-xl"
            role="img"
            aria-label="book-filled"
            innerHTML={svgHTMLString}
        />
    );
};