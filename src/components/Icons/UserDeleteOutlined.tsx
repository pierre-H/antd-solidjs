import { UserDeleteOutlined as BaseUserDeleteOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UserDeleteOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUserDeleteOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-user-delete-outlined text-xl"
            role="img"
            aria-label="user-delete-outlined"
            innerHTML={svgHTMLString}
        />
    );
};