import { FlagOutlined as BaseFlagOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FlagOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFlagOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-flag-outlined text-xl"
            role="img"
            aria-label="flag-outlined"
            innerHTML={svgHTMLString}
        />
    );
};