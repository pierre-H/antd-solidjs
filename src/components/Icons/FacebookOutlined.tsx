import { FacebookOutlined as BaseFacebookOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FacebookOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFacebookOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-facebook-outlined text-xl"
            role="img"
            aria-label="facebook-outlined"
            innerHTML={svgHTMLString}
        />
    );
};