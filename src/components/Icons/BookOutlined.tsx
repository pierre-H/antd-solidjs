import { BookOutlined as BaseBookOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BookOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBookOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-book-outlined text-xl"
            role="img"
            aria-label="book-outlined"
            innerHTML={svgHTMLString}
        />
    );
};