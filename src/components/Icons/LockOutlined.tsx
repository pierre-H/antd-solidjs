import { LockOutlined as BaseLockOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LockOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLockOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-lock-outlined text-xl"
            role="img"
            aria-label="lock-outlined"
            innerHTML={svgHTMLString}
        />
    );
};