import { RedditCircleFilled as BaseRedditCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RedditCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRedditCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reddit-circle-filled text-xl"
            role="img"
            aria-label="reddit-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};