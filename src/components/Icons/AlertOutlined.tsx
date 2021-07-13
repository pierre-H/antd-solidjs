import { AlertOutlined as BaseAlertOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlertOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlertOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alert-outlined text-xl"
            role="img"
            aria-label="alert-outlined"
            innerHTML={svgHTMLString}
        />
    );
};