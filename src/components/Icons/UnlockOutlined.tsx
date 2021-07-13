import { UnlockOutlined as BaseUnlockOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UnlockOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUnlockOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-unlock-outlined text-xl"
            role="img"
            aria-label="unlock-outlined"
            innerHTML={svgHTMLString}
        />
    );
};