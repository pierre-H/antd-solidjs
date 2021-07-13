import { EnterOutlined as BaseEnterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EnterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEnterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-enter-outlined text-xl"
            role="img"
            aria-label="enter-outlined"
            innerHTML={svgHTMLString}
        />
    );
};