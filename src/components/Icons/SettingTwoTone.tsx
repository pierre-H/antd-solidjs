import { SettingTwoTone as BaseSettingTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SettingTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSettingTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-setting-two-tone text-xl"
            role="img"
            aria-label="setting-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};