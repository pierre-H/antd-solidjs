import { UpCircleOutlined as BaseUpCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-circle-outlined text-xl"
            role="img"
            aria-label="up-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};