import { PoweroffOutlined as BasePoweroffOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PoweroffOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePoweroffOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-poweroff-outlined text-xl"
            role="img"
            aria-label="poweroff-outlined"
            innerHTML={svgHTMLString}
        />
    );
};