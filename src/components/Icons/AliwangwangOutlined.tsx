import { AliwangwangOutlined as BaseAliwangwangOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AliwangwangOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAliwangwangOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-aliwangwang-outlined text-xl"
            role="img"
            aria-label="aliwangwang-outlined"
            innerHTML={svgHTMLString}
        />
    );
};