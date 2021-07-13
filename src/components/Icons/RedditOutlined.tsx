import { RedditOutlined as BaseRedditOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RedditOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRedditOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reddit-outlined text-xl"
            role="img"
            aria-label="reddit-outlined"
            innerHTML={svgHTMLString}
        />
    );
};