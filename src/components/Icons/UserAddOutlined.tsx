import { UserAddOutlined as BaseUserAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UserAddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUserAddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-user-add-outlined text-xl"
            role="img"
            aria-label="user-add-outlined"
            innerHTML={svgHTMLString}
        />
    );
};