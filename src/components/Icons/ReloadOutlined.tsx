import { ReloadOutlined as BaseReloadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ReloadOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseReloadOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reload-outlined text-xl"
            role="img"
            aria-label="reload-outlined"
            innerHTML={svgHTMLString}
        />
    );
};