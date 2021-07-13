import { SlackSquareFilled as BaseSlackSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlackSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlackSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-slack-square-filled text-xl"
            role="img"
            aria-label="slack-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};