import { WomanOutlined as BaseWomanOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WomanOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWomanOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-woman-outlined text-xl"
            role="img"
            aria-label="woman-outlined"
            innerHTML={svgHTMLString}
        />
    );
};