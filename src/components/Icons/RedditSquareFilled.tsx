import { RedditSquareFilled as BaseRedditSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RedditSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRedditSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reddit-square-filled text-xl"
            role="img"
            aria-label="reddit-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};