import { PauseOutlined as BasePauseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PauseOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePauseOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pause-outlined text-xl"
            role="img"
            aria-label="pause-outlined"
            innerHTML={svgHTMLString}
        />
    );
};