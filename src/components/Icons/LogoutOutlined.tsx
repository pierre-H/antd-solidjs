import { LogoutOutlined as BaseLogoutOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LogoutOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLogoutOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-logout-outlined text-xl"
            role="img"
            aria-label="logout-outlined"
            innerHTML={svgHTMLString}
        />
    );
};