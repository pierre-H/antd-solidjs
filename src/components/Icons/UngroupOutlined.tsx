import { UngroupOutlined as BaseUngroupOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UngroupOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUngroupOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ungroup-outlined text-xl"
            role="img"
            aria-label="ungroup-outlined"
            innerHTML={svgHTMLString}
        />
    );
};