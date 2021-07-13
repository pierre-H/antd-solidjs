import { SlackCircleFilled as BaseSlackCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlackCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlackCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-slack-circle-filled text-xl"
            role="img"
            aria-label="slack-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};