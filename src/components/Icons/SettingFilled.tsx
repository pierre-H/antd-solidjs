import { SettingFilled as BaseSettingFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SettingFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSettingFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-setting-filled text-xl"
            role="img"
            aria-label="setting-filled"
            innerHTML={svgHTMLString}
        />
    );
};