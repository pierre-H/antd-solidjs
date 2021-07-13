import { UserSwitchOutlined as BaseUserSwitchOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UserSwitchOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUserSwitchOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-user-switch-outlined text-xl"
            role="img"
            aria-label="user-switch-outlined"
            innerHTML={svgHTMLString}
        />
    );
};