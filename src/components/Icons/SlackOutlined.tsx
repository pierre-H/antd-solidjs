import { SlackOutlined as BaseSlackOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlackOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlackOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-slack-outlined text-xl"
            role="img"
            aria-label="slack-outlined"
            innerHTML={svgHTMLString}
        />
    );
};