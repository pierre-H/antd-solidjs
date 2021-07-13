import { LoginOutlined as BaseLoginOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LoginOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLoginOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-login-outlined text-xl"
            role="img"
            aria-label="login-outlined"
            innerHTML={svgHTMLString}
        />
    );
};