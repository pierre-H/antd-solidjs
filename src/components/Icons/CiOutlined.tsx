import { CiOutlined as BaseCiOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CiOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCiOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ci-outlined text-xl"
            role="img"
            aria-label="ci-outlined"
            innerHTML={svgHTMLString}
        />
    );
};