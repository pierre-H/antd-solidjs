import { SettingOutlined as BaseSettingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SettingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSettingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-setting-outlined text-xl"
            role="img"
            aria-label="setting-outlined"
            innerHTML={svgHTMLString}
        />
    );
};