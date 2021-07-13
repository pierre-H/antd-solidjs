import { RadiusSettingOutlined as BaseRadiusSettingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RadiusSettingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusSettingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-radius-setting-outlined text-xl"
            role="img"
            aria-label="radius-setting-outlined"
            innerHTML={svgHTMLString}
        />
    );
};