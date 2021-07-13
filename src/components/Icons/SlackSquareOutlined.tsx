import { SlackSquareOutlined as BaseSlackSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlackSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlackSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-slack-square-outlined text-xl"
            role="img"
            aria-label="slack-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};