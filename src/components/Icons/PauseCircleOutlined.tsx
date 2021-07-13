import { PauseCircleOutlined as BasePauseCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PauseCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePauseCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pause-circle-outlined text-xl"
            role="img"
            aria-label="pause-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};