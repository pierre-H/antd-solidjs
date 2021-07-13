import { MenuFoldOutlined as BaseMenuFoldOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MenuFoldOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMenuFoldOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-menu-fold-outlined text-xl"
            role="img"
            aria-label="menu-fold-outlined"
            innerHTML={svgHTMLString}
        />
    );
};