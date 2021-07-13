import { AimOutlined as BaseAimOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AimOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAimOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-aim-outlined text-xl"
            role="img"
            aria-label="aim-outlined"
            innerHTML={svgHTMLString}
        />
    );
};