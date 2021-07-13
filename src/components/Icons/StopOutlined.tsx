import { StopOutlined as BaseStopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-stop-outlined text-xl"
            role="img"
            aria-label="stop-outlined"
            innerHTML={svgHTMLString}
        />
    );
};