import { MenuOutlined as BaseMenuOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MenuOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMenuOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-menu-outlined text-xl"
            role="img"
            aria-label="menu-outlined"
            innerHTML={svgHTMLString}
        />
    );
};