import { UserOutlined as BaseUserOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UserOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUserOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-user-outlined text-xl"
            role="img"
            aria-label="user-outlined"
            innerHTML={svgHTMLString}
        />
    );
};