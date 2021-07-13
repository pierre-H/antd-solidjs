import { RetweetOutlined as BaseRetweetOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RetweetOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRetweetOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-retweet-outlined text-xl"
            role="img"
            aria-label="retweet-outlined"
            innerHTML={svgHTMLString}
        />
    );
};