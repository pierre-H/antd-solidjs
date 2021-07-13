import { BookTwoTone as BaseBookTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BookTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBookTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-book-two-tone text-xl"
            role="img"
            aria-label="book-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};