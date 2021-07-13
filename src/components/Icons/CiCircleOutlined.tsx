import { CiCircleOutlined as BaseCiCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CiCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCiCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ci-circle-outlined text-xl"
            role="img"
            aria-label="ci-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};