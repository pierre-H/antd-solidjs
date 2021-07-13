import { MenuUnfoldOutlined as BaseMenuUnfoldOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MenuUnfoldOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMenuUnfoldOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-menu-unfold-outlined text-xl"
            role="img"
            aria-label="menu-unfold-outlined"
            innerHTML={svgHTMLString}
        />
    );
};