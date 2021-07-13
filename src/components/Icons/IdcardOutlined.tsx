import { IdcardOutlined as BaseIdcardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IdcardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIdcardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-idcard-outlined text-xl"
            role="img"
            aria-label="idcard-outlined"
            innerHTML={svgHTMLString}
        />
    );
};